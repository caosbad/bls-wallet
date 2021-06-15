//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;
// pragma abicoder v2;
pragma experimental ABIEncoderV2;

import "./VerificationGateway.sol";

/**
@dev Optimisations to reduce calldata of VerificationGateway multiCall
with shared params.
*/
contract BLSExpander is Initializable {
    VerificationGateway verificationGateway;
    function initialize(address gateway) public initializer {
        verificationGateway = VerificationGateway(gateway);
    }

    // // eg approve and transfers of a token contract
    // function blsCallMultiSameContract(
    //     address rewardAddress;
    //     bytes32[] calldata  publicKeyHashes,
    //     uint256[2] memory signature,
    //     uint256[] calldata tokenRewardAmounts,
    //     address contractAddress,
    //     bytes4[] calldata methodIDs,
    //     bytes[] calldata encodedParamSets
    // ) public {
    //     uint256 length = publicKeyHashes.length;
    //     address[] memory contractAddresses = new address[](length);
    //     for (uint256 i=0; i<length; i++) {
    //         contractAddresses[i] = contractAddress;
    //     }

    //     verificationGateway.blsCallMany(
    //         publicKeyHashes,
    //         signature,
    //         tokenRewardAmounts,
    //         contractAddresses,
    //         methodIDs,
    //         encodedParamSets
    //     );
    // }

    // // // eg a set of txs from one account
    // // function blsCallMultiSameCaller(
    // //     bytes32 publicKeyHash,
    // //     uint256[2] memory signature,
    // //     address[] calldata contractAddresses,
    // //     bytes4[] calldata methodIDs,
    // //     bytes[] calldata encodedParamSets
    // // ) public {
    // //     uint256 length = contractAddresses.length;
    // //     bytes32[] memory publicKeyHashes = new bytes32[](length);
    // //     for (uint256 i=0; i<length; i++) {
    // //         publicKeyHashes[i] = publicKeyHash;
    // //     }

    // //     verificationGateway.blsCallMany(
    // //         publicKeyHashes,
    // //         signature,
    // //         contractAddresses,
    // //         methodIDs,
    // //         encodedParamSets
    // //     );
    // // }

    // // // eg airdrop
    function blsCallMultiSameCallerContractFunction(
        bytes32 publicKeyHash,
        uint256[2] memory signature,
        uint256[] calldata tokenRewardAmounts,
        address contractAddress,
        bytes4 methodID,
        bytes[] calldata encodedParamSets
    ) external {
        uint256 length = encodedParamSets.length;
        VerificationGateway.TxData[] memory txs = new VerificationGateway.TxData[](length);
        for (uint256 i=0; i<length; i++) {
            txs[i].publicKeyHash = publicKeyHash;
            txs[i].tokenRewardAmount = tokenRewardAmounts[i];
            txs[i].contractAddress = contractAddress;
            txs[i].methodID = methodID;
            txs[i].encodedParams = encodedParamSets[i];
        }

        verificationGateway.blsCallMany(
            msg.sender,
            signature,
            txs
        );
    }

    // // // eg identical txs from multiple accounts
    function blsCallMultiSameContractFunctionParams(
        bytes32[] calldata  publicKeyHashes,
        uint256[2] memory signature,
        uint256[] calldata tokenRewardAmounts,
        address contractAddress,
        bytes4 methodID,
        bytes calldata encodedParams
    ) public {
        uint256 length = publicKeyHashes.length;
        VerificationGateway.TxData[] memory txs = new VerificationGateway.TxData[](length);
        for (uint256 i=0; i<length; i++) {
            txs[i].publicKeyHash = publicKeyHashes[i];
            txs[i].tokenRewardAmount = tokenRewardAmounts[i];
            txs[i].contractAddress = contractAddress;
            txs[i].methodID = methodID;
            txs[i].encodedParams = encodedParams;
        }

        verificationGateway.blsCallMany(
            msg.sender,
            signature,
            txs
        );
    }

}