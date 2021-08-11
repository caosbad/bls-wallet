import { ethers, network } from "hardhat";

import { expect, assert, should } from "chai";

import { expectEvent, expectRevert } from "@openzeppelin/test-helpers";

import Fixture from "../shared/helpers/Fixture";
import dataPayload from "../shared/helpers/dataPayload";
import { FullTxData, TxData } from "../shared/helpers/Fixture";
import TokenHelper from "../shared/helpers/TokenHelper";

import { aggregate } from "../shared/lib/hubble-bls/src/signer";
import { BigNumber, providers } from "ethers";
import { getAddress } from "ethers/lib/utils";
import { doesNotMatch } from "assert";



describe.only('TokenPayments', async function () {
  let fx: Fixture;
  let th: TokenHelper;
  let blsWalletAddresses: string[];

  beforeEach(async function() {
    fx = await Fixture.create(7, false);
    th = new TokenHelper(fx);
    blsWalletAddresses = await th.walletTokenSetup();
    await fx.verificationGateway.initialize(th.testToken.address);
  });

  it("should reward tx submitter (single call)", async function() {
    const reward = ethers.utils.parseUnits("10");

    let blsSigner = fx.blsSigners[0];
    
    let txDataFull: FullTxData = {
      blsSigner: blsSigner,
      chainId: fx.chainId,
      nonce: 1, //next nonce after creation
      reward: reward,
      contract:fx.verificationGateway,
      functionName:"walletCrossCheck",
      params:[Fixture.blsKeyHash(blsSigner)]
    }

    let aggBalanceBefore = await th.testToken.balanceOf(await fx.signers[0].getAddress());

    await fx.gatewayCallFull(txDataFull);



    // let blsSigner = fx.blsSigners[0];
    // const blsPubKeyHash = Fixture.blsKeyHash(blsSigner);

    // let encodedFunction = fx.VerificationGateway.interface.encodeFunctionData(
    //   "walletCrossCheck",
    //   [blsPubKeyHash]
    // );
    // await fx.gatewayCall(
    //   blsSigner,
    //   1, //next nonce after creation
    //   reward,
    //   fx.verificationGateway.address,
    //   encodedFunction
    // );
    let walletBalance = await th.testToken.balanceOf(blsWalletAddresses[0]);

    expect(walletBalance).to.equal(th.userStartAmount.sub(reward));
    let aggBalance = await th.testToken.balanceOf(await fx.signers[0].getAddress());
    expect(aggBalance).to.equal(aggBalanceBefore.add(reward));
  });

  it("should perform wallet action with reward (single call)", async function() {
    const reward = ethers.utils.parseUnits("10");
    
    let blsSigner = fx.blsSigners[0];
    const blsPubKeyHash = Fixture.blsKeyHash(blsSigner);

    let actionToken = await TokenHelper.deployTestToken(blsWalletAddresses[0]);
    const actionAmount = ethers.utils.parseUnits("5");
    const burnAddress = "0x" + "1234".padStart(40, "0");
    // let encodedFunction = th.testToken.interface.encodeFunctionData(
    //   "transfer",
    //   [burnAddress, actionAmount]
    // );

    let walletNonce = 1;  //next nonce after creation

    let txDataFull:FullTxData = {
      blsSigner: blsSigner,
      chainId: fx.chainId,
      nonce: walletNonce++,
      reward: reward,
      contract: actionToken,
      functionName: "transfer",
      params: [burnAddress, actionAmount]    
    } 
    let walletActionBalanceBefore = await actionToken.balanceOf(blsWalletAddresses[0]);
    await fx.gatewayCallFull(txDataFull);
    //   blsSigner,
    //   walletNonce++,
    //   reward,
    //   actionToken.address,
    //   encodedFunction
    // );
    let walletActionBalanceAfter = await actionToken.balanceOf(blsWalletAddresses[0]);

    //successfull transfer of action-token
    expect(walletActionBalanceAfter).to.equal(walletActionBalanceBefore.sub(actionAmount));

    let walletBalance = await th.testToken.balanceOf(blsWalletAddresses[0]);

    let failedTestMessage = "GatewayCall should not execute with insufficient reward.";
    try {
      txDataFull.nonce = walletNonce++;
      txDataFull.reward = walletBalance.add(1);
      await fx.gatewayCallFull(txDataFull);
      //   blsSigner,
      //   walletNonce++,
      //   walletBalance.add(1), // promise to reward more than balance
      //   actionToken.address,
      //   encodedFunction
      // );
      expect.fail(failedTestMessage);
    } catch(e) {
      if (e.message == failedTestMessage) {
        throw(e);
      };
    }
  });

  it("should reward tx submitter (callMany)", async function() {
    const reward = ethers.utils.parseUnits("10");

    let txs: TxData[] = new Array(blsWalletAddresses.length);
    let signatures: any[] = new Array(blsWalletAddresses.length);

    let sigHash = fx.VerificationGateway.interface.getSighash("walletCrossCheck");

    let walletNonce = 1;  //next nonce after creation
    for (let i = 0; i<blsWalletAddresses.length; i++) {
      let publicKeyHash = Fixture.blsKeyHash(fx.blsSigners[i]);
      let encodedFunction = fx.VerificationGateway.interface.encodeFunctionData(
        "walletCrossCheck",
        [publicKeyHash]
      );
      let dataToSign = dataPayload(
        fx.chainId,
        walletNonce,
        reward,
        fx.verificationGateway.address,
        encodedFunction
      );

      txs[i] = {
        publicKeyHash: publicKeyHash,
        tokenRewardAmount: reward,
        contractAddress: fx.verificationGateway.address,
        methodId: sigHash,
        encodedParams: '0x'+encodedFunction.substr(10)
      }
      signatures[i] = fx.blsSigners[i].sign(dataToSign);
    }

    let aggSignature = aggregate(signatures);

    let balancesBefore = await Promise.all(blsWalletAddresses.map(a => th.testToken.balanceOf(a)));

    let firstSigner = await fx.signers[0].getAddress();
    let aggBalanceBefore = await th.testToken.balanceOf(firstSigner);
    await(await fx.verificationGateway.blsCallMany(
      firstSigner,
      aggSignature,
      txs
    )).wait();

    let balancesAfter = await Promise.all(blsWalletAddresses.map(a => th.testToken.balanceOf(a)));
    let expectedAfter = th.userStartAmount.sub(reward);
    
    balancesAfter.map( b => expect(b).to.equal(expectedAfter) );
    let aggBalance = await th.testToken.balanceOf(firstSigner);
    expect(aggBalance).to.equal(aggBalanceBefore.add(reward.mul(blsWalletAddresses.length)));

    walletNonce++;

  });

  it("should perform wallet actions with reward (multi call)", async function() {
    const reward = ethers.utils.parseUnits("10");

    let txs: TxData[] = new Array(blsWalletAddresses.length);
    let signatures: any[] = new Array(blsWalletAddresses.length);

    const burnAddress = "0x" + "1234".padStart(40, "0");
    const actionAmount = reward.div(2);
    let encodedFunction = th.testToken.interface.encodeFunctionData(
      "transfer",
      [burnAddress, actionAmount]
    );
    let sigHash = encodedFunction.substr(0, 10);

    let walletNonce = 1;
    let dataToSign = fx.dataPayload(
      walletNonce,
      reward,
      th.testToken.address,
      encodedFunction
    );

    for (let i = 0; i<blsWalletAddresses.length; i++) {
      txs[i] = {
        publicKeyHash: Fixture.blsKeyHash(fx.blsSigners[i]),
        tokenRewardAmount: reward,
        contractAddress: th.testToken.address,
        methodId: sigHash,
        encodedParams: '0x'+encodedFunction.substr(10)
      }
      signatures[i] = fx.blsSigners[i].sign(dataToSign);
    }

    let aggSignature = aggregate(signatures);

    let firstSigner = await fx.signers[0].getAddress();
    let aggBalanceBefore = await th.testToken.balanceOf(firstSigner);
    await(await fx.verificationGateway.blsCallMany(
      firstSigner,
      aggSignature,
      txs
    )).wait();

    let balancesAfter = await Promise.all(blsWalletAddresses.map(a => th.testToken.balanceOf(a)));
    let expectedAfter = th.userStartAmount.sub(reward).sub(actionAmount);
    balancesAfter.map( b => expect(b).to.equal(expectedAfter) );
    let aggBalance = await th.testToken.balanceOf(firstSigner);
    expect(aggBalance).to.equal(aggBalanceBefore.add(reward.mul(blsWalletAddresses.length)));
  });

  it("should skip wallet actions that can't pay reward (multi call)", async function() {

    let txs: TxData[] = new Array(blsWalletAddresses.length);
    let signatures: any[] = new Array(blsWalletAddresses.length);

    const burnAddress = "0x" + "1234".padStart(40, "0");
    const actionAmount = ethers.utils.parseUnits("10");
    let encodedFunction = th.testToken.interface.encodeFunctionData(
      "transfer",
      [burnAddress, actionAmount]
    );
    let sigHash = encodedFunction.substr(0, 10);

    let walletNonce = 1;
    let balancesBefore = await Promise.all(blsWalletAddresses.map(a => th.testToken.balanceOf(a)));
    
    // Just enough for action after reward
    let rewards = balancesBefore.map( b => b.sub(actionAmount) );
    // Reward amount greater than balance (for failure)
    const insufficientRewardIndex = 2;
    rewards[insufficientRewardIndex] = balancesBefore[insufficientRewardIndex].add(1);

    for (let i = 0; i<blsWalletAddresses.length; i++) {
      let dataToSign = fx.dataPayload(
        walletNonce,
        rewards[i],
        th.testToken.address,
        encodedFunction
      );
      txs[i] = {
        publicKeyHash: Fixture.blsKeyHash(fx.blsSigners[i]),
        tokenRewardAmount: rewards[i],
        contractAddress: th.testToken.address,
        methodId: sigHash,
        encodedParams: '0x'+encodedFunction.substr(10)
      }
      signatures[i] = fx.blsSigners[i].sign(dataToSign);
    }
    let aggSignature = aggregate(signatures);

    let firstSigner = await fx.signers[0].getAddress();
    let aggBalanceBefore = await th.testToken.balanceOf(firstSigner);
    await(await fx.verificationGateway.blsCallMany(
      firstSigner,
      aggSignature,
      txs
    )).wait();

    let totalAggReward = BigNumber.from(0);
    for (let i=0; i<blsWalletAddresses.length; i++) {
      let balanceAfter = await th.testToken.balanceOf(blsWalletAddresses[i]);
      let expectedAfter = th.userStartAmount.sub(rewards[i]).sub(actionAmount);
      totalAggReward = totalAggReward.add(rewards[i]);
      if (i == insufficientRewardIndex) { //expect unchanged balance
        expectedAfter = th.userStartAmount;
        totalAggReward = totalAggReward.sub(rewards[i]); //not paid to aggregator
      }
      expect(balanceAfter).to.equal(expectedAfter)
    }

    let aggBalance = await th.testToken.balanceOf(firstSigner);
    expect(aggBalance).to.equal(aggBalanceBefore.add(totalAggReward));

  });

});
