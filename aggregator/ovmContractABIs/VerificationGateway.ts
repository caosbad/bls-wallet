export default {
  "_format": "hh-sol-artifact-1",
  "contractName": "VerificationGateway",
  "sourceName": "contracts/VerificationGateway.sol",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "wallet",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "result",
          "type": "bool"
        }
      ],
      "name": "WalletActioned",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "wallet",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "publicKeyHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256[4]",
          "name": "publicKey",
          "type": "uint256[4]"
        }
      ],
      "name": "WalletCreated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "rewardRecipient",
          "type": "address"
        },
        {
          "internalType": "uint256[4][]",
          "name": "publicKeys",
          "type": "uint256[4][]"
        },
        {
          "internalType": "uint256[2]",
          "name": "signature",
          "type": "uint256[2]"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "publicKeyHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            },
            {
              "internalType": "contract IERC20",
              "name": "rewardTokenAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "rewardTokenAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ethValue",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "contractAddress",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "encodedFunction",
              "type": "bytes"
            }
          ],
          "internalType": "struct VerificationGateway.TxData[]",
          "name": "txs",
          "type": "tuple[]"
        }
      ],
      "name": "actionCalls",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "blsLib",
      "outputs": [
        {
          "internalType": "contract IBLS",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IBLS",
          "name": "bls",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[2]",
          "name": "signature",
          "type": "uint256[2]"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "publicKeyHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            },
            {
              "internalType": "contract IERC20",
              "name": "rewardTokenAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "rewardTokenAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ethValue",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "contractAddress",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "encodedFunction",
              "type": "bytes"
            }
          ],
          "internalType": "struct VerificationGateway.TxData[]",
          "name": "txs",
          "type": "tuple[]"
        }
      ],
      "name": "verifySignatures",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "hash",
          "type": "bytes32"
        }
      ],
      "name": "walletCrossCheck",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "walletFromHash",
      "outputs": [
        {
          "internalType": "contract BLSWallet",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x63feedbee560e01b60a052600460805260a46040527e54159611832e24cdd64c6a133e71d373c5f8553dde6c762e6bffe707ad83cc60015534801561004357600080fd5b5061191c806100536000396000f3fe6080604052600436106100655760003560e01c8063a5bafba611610043578063a5bafba6146100fe578063a890347e14610111578063c4d66de81461013157600080fd5b80632c6e76071461006a578063470c30461461008c5780638f003354146100de575b600080fd5b34801561007657600080fd5b5061008a610085366004610df1565b610151565b005b34801561009857600080fd5b506100c26100a7366004610e45565b6003602052600090815260409020546001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b3480156100ea57600080fd5b5061008a6100f9366004610e73565b61040b565b61008a61010c366004610e45565b610858565b34801561011d57600080fd5b506004546100c2906001600160a01b031681565b34801561013d57600080fd5b5061008a61014c366004610f36565b61087e565b8060008167ffffffffffffffff81111561016d5761016d610f53565b6040519080825280602002602001820160405280156101a657816020015b610193610cf2565b81526020019060019003908161018b5790505b50905060008267ffffffffffffffff8111156101c4576101c4610f53565b6040519080825280602002602001820160405280156101fd57816020015b6101ea610d10565b8152602001906001900390816101e25790505b50905060005b838110156102e8576002600087878481811061022157610221610f69565b90506020028101906102339190610f7f565b35815260208101919091526040908101600020815160808101928390529160049082845b81548152602001906001019080831161025757505050505083828151811061028157610281610f69565b60200260200101819052506102b88686838181106102a1576102a1610f69565b90506020028101906102b39190610f7f565b610969565b8282815181106102ca576102ca610f69565b602002602001018190525080806102e090610f9f565b915050610203565b50600480546040517f914137630000000000000000000000000000000000000000000000000000000081526000926001600160a01b0390921691639141376391610338918b918891889101611029565b60206040518083038186803b15801561035057600080fd5b505afa158015610364573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038891906110b1565b9050806104025760405162461bcd60e51b815260206004820152602a60248201527f566572696669636174696f6e476174657761793a20416c6c2073696773206e6f60448201527f742076657269666965640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b50505050505050565b61041785858484610aab565b610422838383610151565b6000805b8281101561084e576003600085858481811061044457610444610f69565b90506020028101906104569190610f7f565b35815260208082019290925260409081016000205481517faffed0e000000000000000000000000000000000000000000000000000000000815291516001600160a01b039091169450849263affed0e09260048082019391829003018186803b1580156104c257600080fd5b505afa1580156104d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fa91906110d3565b84848381811061050c5761050c610f69565b905060200281019061051e9190610f7f565b60200135141561083c5760008085858481811061053d5761053d610f69565b905060200281019061054f9190610f7f565b60600135119050801561066c57826001600160a01b0316637808ad3586868581811061057d5761057d610f69565b905060200281019061058f9190610f7f565b6105a0906060810190604001610f36565b8b8888878181106105b3576105b3610f69565b90506020028101906105c59190610f7f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526001600160a01b039384166004820152929091166024830152606001356044820152606401602060405180830381600087803b15801561063057600080fd5b505af1158015610644573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066891906110b1565b1590505b8061083a576000836001600160a01b0316639cd62d9a87878681811061069457610694610f69565b90506020028101906106a69190610f7f565b608001358888878181106106bc576106bc610f69565b90506020028101906106ce9190610f7f565b6106df9060c081019060a001610f36565b8989888181106106f1576106f1610f69565b90506020028101906107039190610f7f565b6107119060c08101906110ec565b6040518563ffffffff1660e01b81526004016107309493929190611133565b602060405180830381600087803b15801561074a57600080fd5b505af115801561075e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078291906110b1565b9050836001600160a01b03167fcdca5f63e41347f46847c9d00536c50af3e1ea1c08666733179f1cc0c9d55fd6856001600160a01b031663affed0e06040518163ffffffff1660e01b815260040160206040518083038186803b1580156107e857600080fd5b505afa1580156107fc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082091906110d3565b6040805191825284151560208301520160405180910390a2505b505b8061084681610f9f565b915050610426565b5050505050505050565b6000818152600360205260409020546001600160a01b0316331461087b57600080fd5b50565b600054610100900460ff1680610897575060005460ff16155b6109095760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016103f9565b600054610100900460ff1615801561092b576000805461ffff19166101011790555b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384161790558015610965576000805461ff00191690555b5050565b610971610d10565b60045460015446916001600160a01b03169063a850a9099083602087013561099f6060890160408a01610f36565b606089013560808a01356109b960c08c0160a08d01610f36565b6109c660c08d018d6110ec565b6040516109d4929190611179565b6040805191829003822060208301989098528101959095526bffffffffffffffffffffffff19606094851b8116858701526074860193909352609485019190915290911b1660b482015260c881019190915260e8016040516020818303038152906040526040518363ffffffff1660e01b8152600401610a55929190611189565b604080518083038186803b158015610a6c57600080fd5b505afa158015610a80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa491906111e6565b9392505050565b60005b81811015610ceb576000838383818110610aca57610aca610f69565b9050602002810190610adc9190610f7f565b359050858583818110610af157610af1610f69565b905060800201604051602001610b079190611274565b6040516020818303038152906040528051906020012081148015610b6c57506000600381868686818110610b3d57610b3d610f69565b9050602002810190610b4f9190610f7f565b3581526020810191909152604001600020546001600160a01b0316145b15610cd857858583818110610b8357610b83610f69565b6000848152600260205260409020610ba5939092506080909102016004610d2e565b50604051610bb290610d6c565b604051809103906000f080158015610bce573d6000803e3d6000fd5b5060008281526003602052604090819020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03939093169283179055517f9498bd7100000000000000000000000000000000000000000000000000000000815260048101839052639498bd7190602401600060405180830381600087803b158015610c5757600080fd5b505af1158015610c6b573d6000803e3d6000fd5b5050506000828152600360205260409020548291506001600160a01b03167fb65a6d7c4b2ea016740a09090e34933cc4058cd2788e5c9dfc7a6bf972143532888886818110610cbc57610cbc610f69565b905060800201604051610ccf9190611289565b60405180910390a35b5080610ce381610f9f565b915050610aae565b5050505050565b60405180608001604052806004906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b8260048101928215610d5c579160200282015b82811115610d5c578235825591602001919060010190610d41565b50610d68929150610d79565b5090565b61064a8061129d83390190565b5b80821115610d685760008155600101610d7a565b8060408101831015610d9f57600080fd5b92915050565b60008083601f840112610db757600080fd5b50813567ffffffffffffffff811115610dcf57600080fd5b6020830191508360208260051b8501011115610dea57600080fd5b9250929050565b600080600060608486031215610e0657600080fd5b610e108585610d8e565b9250604084013567ffffffffffffffff811115610e2c57600080fd5b610e3886828701610da5565b9497909650939450505050565b600060208284031215610e5757600080fd5b5035919050565b6001600160a01b038116811461087b57600080fd5b60008060008060008060a08789031215610e8c57600080fd5b8635610e9781610e5e565b9550602087013567ffffffffffffffff80821115610eb457600080fd5b818901915089601f830112610ec857600080fd5b813581811115610ed757600080fd5b8a60208260071b8501011115610eec57600080fd5b6020830197509550610f018a60408b01610d8e565b94506080890135915080821115610f1757600080fd5b50610f2489828a01610da5565b979a9699509497509295939492505050565b600060208284031215610f4857600080fd5b8135610aa481610e5e565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000823560de19833603018112610f9557600080fd5b9190910192915050565b6000600019821415610fc157634e487b7160e01b600052601160045260246000fd5b5060010190565b60008151808452602080850194508084016000805b8481101561101d57825188835b600281101561100757825182529186019190860190600101610fea565b5050506040979097019691830191600101610fdd565b50959695505050505050565b6000608080830160408785376040840182905285519081905260209060a0850190600090838901825b8281101561108f57815185855b600481101561107c5782518252918801919088019060010161105f565b5050509386019390850190600101611052565b5050505084810360608601526110a58187610fc8565b98975050505050505050565b6000602082840312156110c357600080fd5b81518015158114610aa457600080fd5b6000602082840312156110e557600080fd5b5051919050565b6000808335601e1984360301811261110357600080fd5b83018035915067ffffffffffffffff82111561111e57600080fd5b602001915036819003821315610dea57600080fd5b8481526001600160a01b038416602082015260606040820152816060820152818360808301376000818301608090810191909152601f909201601f191601019392505050565b8183823760009101908152919050565b82815260006020604081840152835180604085015260005b818110156111bd578581018301518582016060015282016111a1565b818111156111cf576000606083870101525b50601f01601f191692909201606001949350505050565b6000604082840312156111f857600080fd5b82601f83011261120757600080fd5b6040516040810181811067ffffffffffffffff8211171561123857634e487b7160e01b600052604160045260246000fd5b806040525080604084018581111561124f57600080fd5b845b81811015611269578051835260209283019201611251565b509195945050505050565b60808282376000608091909101908152919050565b608081810190838337600081529291505056fe608060405234801561001057600080fd5b5061062a806100206000396000f3fe6080604052600436106100635760003560e01c80639498bd71116100405780639498bd71146101035780639cd62d9a14610123578063affed0e01461013657005b8063116191b61461006c5780635e7e3416146100af5780637808ad35146100d357005b3661006a57005b005b34801561007857600080fd5b50600054610092906201000090046001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100bb57600080fd5b506100c560015481565b6040519081526020016100a6565b3480156100df57600080fd5b506100f36100ee366004610484565b61014c565b60405190151581526020016100a6565b34801561010f57600080fd5b5061006a61011e3660046104c5565b610249565b6100f36101313660046104de565b610361565b34801561014257600080fd5b506100c560025481565b600080546201000090046001600160a01b0316331461016a57600080fd5b6040516001600160a01b03841660248201526044810183905260009060640160408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052519091506001600160a01b038616906101fb908390610567565b6000604051808303816000865af19150503d8060008114610238576040519150601f19603f3d011682016040523d82523d6000602084013e61023d565b606091505b50909695505050505050565b600054610100900460ff1680610262575060005460ff16155b6102f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840160405180910390fd5b600054610100900460ff16158015610314576000805461ffff19166101011790555b6001829055600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff16336201000002178155600255801561035d576000805461ff00191690555b5050565b600080546201000090046001600160a01b0316331461037f57600080fd5b84156103ed57836001600160a01b03168584846040516103a09291906105a2565b60006040518083038185875af1925050503d80600081146103dd576040519150601f19603f3d011682016040523d82523d6000602084013e6103e2565b606091505b50508091505061044f565b836001600160a01b031683836040516104079291906105a2565b6000604051808303816000865af19150503d8060008114610444576040519150601f19603f3d011682016040523d82523d6000602084013e610449565b606091505b50909150505b6002805490600061045f836105b2565b9190505550949350505050565b6001600160a01b038116811461048157600080fd5b50565b60008060006060848603121561049957600080fd5b83356104a48161046c565b925060208401356104b48161046c565b929592945050506040919091013590565b6000602082840312156104d757600080fd5b5035919050565b600080600080606085870312156104f457600080fd5b8435935060208501356105068161046c565b9250604085013567ffffffffffffffff8082111561052357600080fd5b818701915087601f83011261053757600080fd5b81358181111561054657600080fd5b88602082850101111561055857600080fd5b95989497505060200194505050565b6000825160005b81811015610588576020818601810151858301520161056e565b81811115610597576000828501525b509190910192915050565b8183823760009101908152919050565b60006000198214156105ed577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea2646970667358221220912aae517994ddc3c371581941a4cd6ace35fc97be547ccab066149076f44e2164736f6c63430008090033a264697066735822122072f04b17ed572c15520056d585e0ec3d42a6c6641e5143114784dadb3345f44264736f6c63430008090033",
  "deployedBytecode": "0x6080604052600436106100655760003560e01c8063a5bafba611610043578063a5bafba6146100fe578063a890347e14610111578063c4d66de81461013157600080fd5b80632c6e76071461006a578063470c30461461008c5780638f003354146100de575b600080fd5b34801561007657600080fd5b5061008a610085366004610df1565b610151565b005b34801561009857600080fd5b506100c26100a7366004610e45565b6003602052600090815260409020546001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b3480156100ea57600080fd5b5061008a6100f9366004610e73565b61040b565b61008a61010c366004610e45565b610858565b34801561011d57600080fd5b506004546100c2906001600160a01b031681565b34801561013d57600080fd5b5061008a61014c366004610f36565b61087e565b8060008167ffffffffffffffff81111561016d5761016d610f53565b6040519080825280602002602001820160405280156101a657816020015b610193610cf2565b81526020019060019003908161018b5790505b50905060008267ffffffffffffffff8111156101c4576101c4610f53565b6040519080825280602002602001820160405280156101fd57816020015b6101ea610d10565b8152602001906001900390816101e25790505b50905060005b838110156102e8576002600087878481811061022157610221610f69565b90506020028101906102339190610f7f565b35815260208101919091526040908101600020815160808101928390529160049082845b81548152602001906001019080831161025757505050505083828151811061028157610281610f69565b60200260200101819052506102b88686838181106102a1576102a1610f69565b90506020028101906102b39190610f7f565b610969565b8282815181106102ca576102ca610f69565b602002602001018190525080806102e090610f9f565b915050610203565b50600480546040517f914137630000000000000000000000000000000000000000000000000000000081526000926001600160a01b0390921691639141376391610338918b918891889101611029565b60206040518083038186803b15801561035057600080fd5b505afa158015610364573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038891906110b1565b9050806104025760405162461bcd60e51b815260206004820152602a60248201527f566572696669636174696f6e476174657761793a20416c6c2073696773206e6f60448201527f742076657269666965640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b50505050505050565b61041785858484610aab565b610422838383610151565b6000805b8281101561084e576003600085858481811061044457610444610f69565b90506020028101906104569190610f7f565b35815260208082019290925260409081016000205481517faffed0e000000000000000000000000000000000000000000000000000000000815291516001600160a01b039091169450849263affed0e09260048082019391829003018186803b1580156104c257600080fd5b505afa1580156104d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fa91906110d3565b84848381811061050c5761050c610f69565b905060200281019061051e9190610f7f565b60200135141561083c5760008085858481811061053d5761053d610f69565b905060200281019061054f9190610f7f565b60600135119050801561066c57826001600160a01b0316637808ad3586868581811061057d5761057d610f69565b905060200281019061058f9190610f7f565b6105a0906060810190604001610f36565b8b8888878181106105b3576105b3610f69565b90506020028101906105c59190610f7f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526001600160a01b039384166004820152929091166024830152606001356044820152606401602060405180830381600087803b15801561063057600080fd5b505af1158015610644573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066891906110b1565b1590505b8061083a576000836001600160a01b0316639cd62d9a87878681811061069457610694610f69565b90506020028101906106a69190610f7f565b608001358888878181106106bc576106bc610f69565b90506020028101906106ce9190610f7f565b6106df9060c081019060a001610f36565b8989888181106106f1576106f1610f69565b90506020028101906107039190610f7f565b6107119060c08101906110ec565b6040518563ffffffff1660e01b81526004016107309493929190611133565b602060405180830381600087803b15801561074a57600080fd5b505af115801561075e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078291906110b1565b9050836001600160a01b03167fcdca5f63e41347f46847c9d00536c50af3e1ea1c08666733179f1cc0c9d55fd6856001600160a01b031663affed0e06040518163ffffffff1660e01b815260040160206040518083038186803b1580156107e857600080fd5b505afa1580156107fc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082091906110d3565b6040805191825284151560208301520160405180910390a2505b505b8061084681610f9f565b915050610426565b5050505050505050565b6000818152600360205260409020546001600160a01b0316331461087b57600080fd5b50565b600054610100900460ff1680610897575060005460ff16155b6109095760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016103f9565b600054610100900460ff1615801561092b576000805461ffff19166101011790555b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384161790558015610965576000805461ff00191690555b5050565b610971610d10565b60045460015446916001600160a01b03169063a850a9099083602087013561099f6060890160408a01610f36565b606089013560808a01356109b960c08c0160a08d01610f36565b6109c660c08d018d6110ec565b6040516109d4929190611179565b6040805191829003822060208301989098528101959095526bffffffffffffffffffffffff19606094851b8116858701526074860193909352609485019190915290911b1660b482015260c881019190915260e8016040516020818303038152906040526040518363ffffffff1660e01b8152600401610a55929190611189565b604080518083038186803b158015610a6c57600080fd5b505afa158015610a80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa491906111e6565b9392505050565b60005b81811015610ceb576000838383818110610aca57610aca610f69565b9050602002810190610adc9190610f7f565b359050858583818110610af157610af1610f69565b905060800201604051602001610b079190611274565b6040516020818303038152906040528051906020012081148015610b6c57506000600381868686818110610b3d57610b3d610f69565b9050602002810190610b4f9190610f7f565b3581526020810191909152604001600020546001600160a01b0316145b15610cd857858583818110610b8357610b83610f69565b6000848152600260205260409020610ba5939092506080909102016004610d2e565b50604051610bb290610d6c565b604051809103906000f080158015610bce573d6000803e3d6000fd5b5060008281526003602052604090819020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03939093169283179055517f9498bd7100000000000000000000000000000000000000000000000000000000815260048101839052639498bd7190602401600060405180830381600087803b158015610c5757600080fd5b505af1158015610c6b573d6000803e3d6000fd5b5050506000828152600360205260409020548291506001600160a01b03167fb65a6d7c4b2ea016740a09090e34933cc4058cd2788e5c9dfc7a6bf972143532888886818110610cbc57610cbc610f69565b905060800201604051610ccf9190611289565b60405180910390a35b5080610ce381610f9f565b915050610aae565b5050505050565b60405180608001604052806004906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b8260048101928215610d5c579160200282015b82811115610d5c578235825591602001919060010190610d41565b50610d68929150610d79565b5090565b61064a8061129d83390190565b5b80821115610d685760008155600101610d7a565b8060408101831015610d9f57600080fd5b92915050565b60008083601f840112610db757600080fd5b50813567ffffffffffffffff811115610dcf57600080fd5b6020830191508360208260051b8501011115610dea57600080fd5b9250929050565b600080600060608486031215610e0657600080fd5b610e108585610d8e565b9250604084013567ffffffffffffffff811115610e2c57600080fd5b610e3886828701610da5565b9497909650939450505050565b600060208284031215610e5757600080fd5b5035919050565b6001600160a01b038116811461087b57600080fd5b60008060008060008060a08789031215610e8c57600080fd5b8635610e9781610e5e565b9550602087013567ffffffffffffffff80821115610eb457600080fd5b818901915089601f830112610ec857600080fd5b813581811115610ed757600080fd5b8a60208260071b8501011115610eec57600080fd5b6020830197509550610f018a60408b01610d8e565b94506080890135915080821115610f1757600080fd5b50610f2489828a01610da5565b979a9699509497509295939492505050565b600060208284031215610f4857600080fd5b8135610aa481610e5e565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000823560de19833603018112610f9557600080fd5b9190910192915050565b6000600019821415610fc157634e487b7160e01b600052601160045260246000fd5b5060010190565b60008151808452602080850194508084016000805b8481101561101d57825188835b600281101561100757825182529186019190860190600101610fea565b5050506040979097019691830191600101610fdd565b50959695505050505050565b6000608080830160408785376040840182905285519081905260209060a0850190600090838901825b8281101561108f57815185855b600481101561107c5782518252918801919088019060010161105f565b5050509386019390850190600101611052565b5050505084810360608601526110a58187610fc8565b98975050505050505050565b6000602082840312156110c357600080fd5b81518015158114610aa457600080fd5b6000602082840312156110e557600080fd5b5051919050565b6000808335601e1984360301811261110357600080fd5b83018035915067ffffffffffffffff82111561111e57600080fd5b602001915036819003821315610dea57600080fd5b8481526001600160a01b038416602082015260606040820152816060820152818360808301376000818301608090810191909152601f909201601f191601019392505050565b8183823760009101908152919050565b82815260006020604081840152835180604085015260005b818110156111bd578581018301518582016060015282016111a1565b818111156111cf576000606083870101525b50601f01601f191692909201606001949350505050565b6000604082840312156111f857600080fd5b82601f83011261120757600080fd5b6040516040810181811067ffffffffffffffff8211171561123857634e487b7160e01b600052604160045260246000fd5b806040525080604084018581111561124f57600080fd5b845b81811015611269578051835260209283019201611251565b509195945050505050565b60808282376000608091909101908152919050565b608081810190838337600081529291505056fe608060405234801561001057600080fd5b5061062a806100206000396000f3fe6080604052600436106100635760003560e01c80639498bd71116100405780639498bd71146101035780639cd62d9a14610123578063affed0e01461013657005b8063116191b61461006c5780635e7e3416146100af5780637808ad35146100d357005b3661006a57005b005b34801561007857600080fd5b50600054610092906201000090046001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100bb57600080fd5b506100c560015481565b6040519081526020016100a6565b3480156100df57600080fd5b506100f36100ee366004610484565b61014c565b60405190151581526020016100a6565b34801561010f57600080fd5b5061006a61011e3660046104c5565b610249565b6100f36101313660046104de565b610361565b34801561014257600080fd5b506100c560025481565b600080546201000090046001600160a01b0316331461016a57600080fd5b6040516001600160a01b03841660248201526044810183905260009060640160408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052519091506001600160a01b038616906101fb908390610567565b6000604051808303816000865af19150503d8060008114610238576040519150601f19603f3d011682016040523d82523d6000602084013e61023d565b606091505b50909695505050505050565b600054610100900460ff1680610262575060005460ff16155b6102f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840160405180910390fd5b600054610100900460ff16158015610314576000805461ffff19166101011790555b6001829055600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff16336201000002178155600255801561035d576000805461ff00191690555b5050565b600080546201000090046001600160a01b0316331461037f57600080fd5b84156103ed57836001600160a01b03168584846040516103a09291906105a2565b60006040518083038185875af1925050503d80600081146103dd576040519150601f19603f3d011682016040523d82523d6000602084013e6103e2565b606091505b50508091505061044f565b836001600160a01b031683836040516104079291906105a2565b6000604051808303816000865af19150503d8060008114610444576040519150601f19603f3d011682016040523d82523d6000602084013e610449565b606091505b50909150505b6002805490600061045f836105b2565b9190505550949350505050565b6001600160a01b038116811461048157600080fd5b50565b60008060006060848603121561049957600080fd5b83356104a48161046c565b925060208401356104b48161046c565b929592945050506040919091013590565b6000602082840312156104d757600080fd5b5035919050565b600080600080606085870312156104f457600080fd5b8435935060208501356105068161046c565b9250604085013567ffffffffffffffff8082111561052357600080fd5b818701915087601f83011261053757600080fd5b81358181111561054657600080fd5b88602082850101111561055857600080fd5b95989497505060200194505050565b6000825160005b81811015610588576020818601810151858301520161056e565b81811115610597576000828501525b509190910192915050565b8183823760009101908152919050565b60006000198214156105ed577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea2646970667358221220912aae517994ddc3c371581941a4cd6ace35fc97be547ccab066149076f44e2164736f6c63430008090033a264697066735822122072f04b17ed572c15520056d585e0ec3d42a6c6641e5143114784dadb3345f44264736f6c63430008090033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}