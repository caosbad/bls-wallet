/* eslint-disable */

export default {
  "_format": "hh-sol-artifact-1",
  "contractName": "BLSWallet",
  "sourceName": "contracts/BLSWallet.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "contractAddress",
          "type": "address",
        },
        {
          "internalType": "bytes4",
          "name": "methodID",
          "type": "bytes4",
        },
        {
          "internalType": "bytes",
          "name": "encodedParams",
          "type": "bytes",
        },
      ],
      "name": "action",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool",
        },
      ],
      "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "gateway",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address",
        },
      ],
      "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "blsKeyHash",
          "type": "bytes32",
        },
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "nonce",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256",
        },
      ],
      "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [
        {
          "internalType": "contract IERC20",
          "name": "token",
          "type": "address",
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address",
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256",
        },
      ],
      "name": "payTokenAmount",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool",
        },
      ],
      "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "publicKeyHash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32",
        },
      ],
      "stateMutability": "view",
      "type": "function",
    },
  ],
  "bytecode":
    "0x60806040523480156100195760008061001661001f565b50505b5061008a565b632a2a7adb598160e01b8152600481016020815285602082015260005b8681101561005757808601518282016040015260200161003c565b506020828760640184336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b505050565b610abd806100996000396000f3fe608060405234801561001957600080610016610597565b50505b506004361061007b5760003560e01c80639498bd71116100595780639498bd71146100dc578063affed0e0146100f1578063f51b80cf146100f95761007b565b8063116191b6146100895780635e7e3416146100a75780637808ad35146100bc575b600080610086610597565b50505b61009161010c565b60405161009e9190610a2f565b60405180910390f35b6100af61012b565b60405161009e9190610a67565b6100cf6100ca36600461095d565b610138565b60405161009e9190610a5c565b6100ef6100ea36600461093c565b610269565b005b6100af61040a565b6100cf61010736600461082f565b610414565b60026000610118610602565b906101000a90046001600160a01b031681565b6001610135610602565b81565b6000600281610145610602565b906101000a90046001600160a01b03166001600160a01b03165a610167610662565b6001600160a01b03161461018357600080610180610597565b50505b60008383604051602401610198929190610a43565b604051601f198183030181526040919091527fa9059cbb000000000000000000000000000000000000000000000000000000006020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16909117905290506001600160a01b0385168160405161020e9190610a1c565b6000604051808303816000865a6102236106a8565b5050505050509150503d8060008114610258576040513d603f01601f191681016040523d815291503d6000602084013e61025d565b606091505b50909695505050505050565b60016000610275610602565b906101000a900460ff168061028d575061028d610519565b806102aa575060008061029e610602565b906101000a900460ff16155b610308576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610a8f602e913960400191505060405180910390610305610597565b50505b6000600181610315610602565b906101000a900460ff16159050801561037b576001600061010081610338610602565b8160ff0219169083151502179061034d610795565b50505060016000806101000a81610362610602565b8160ff02191690831515021790610377610795565b5050505b81806001610387610795565b5050505a610393610662565b600062010000816103a2610602565b816001600160a01b0302191690836001600160a01b03160217906103c4610795565b5050506000600281906103d5610795565b505050801561040657600080610100816103ed610602565b8160ff02191690831515021790610402610795565b5050505b5050565b6002610135610602565b6000600281610421610602565b906101000a90046001600160a01b03166001600160a01b03165a610443610662565b6001600160a01b03161461045f5760008061045c610597565b50505b600083836040516020016104749291906109e0565b6040516020818303038152906040529050846001600160a01b03168160405161049d9190610a1c565b6000604051808303816000865a6104b26106a8565b5050505050509150503d80600081146104e7576040513d603f01601f191681016040523d815291503d6000602084013e6104ec565b606091505b50508092505060026000816104ff610602565b9160018301915061050e610795565b505050509392505050565b600061057c5a63996d79a5598160e01b8152602081600483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b8051925060005b60408110156105745760008282015260200161055d565b505050610582565b15905090565b6000808261058e6107e3565b15159392505050565b632a2a7adb598160e01b8152600481016020815285602082015260005b868110156105cf5780860151828201604001526020016105b4565b506020828760640184336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b505050565b6303daa959598160e01b8152836004820152602081602483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b8051935060005b604081101561065d57600082820152602001610646565b505050565b6373509064598160e01b8152602081600483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b80516000825293506020610646565b6385979f76598160e01b81526106db565b80808311156106c55750815b92915050565b80808310156106c5575090919050565b836004820152846024820152606060448201528760648201526084810160005b898110156107135780890151828201526020016106fb565b506060828a60a40184336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b815160408301513d6000853e8c8c82606087013350600060045af150596107688e3d6106cb565b8d0161077481876106b9565b5b828110156107895760008152602001610775565b50929d50505050505050565b6322bd64c0598160e01b8152836004820152846024820152600081604483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b600081526020610646565b638435035b598160e01b8152836004820152602081602483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b80516000825293506020610646565b60008060006060848603121561084c578283610849610597565b50505b833561085781610a70565b92506020848101357fffffffff0000000000000000000000000000000000000000000000000000000081168114610895578384610892610597565b50505b9250604085013567ffffffffffffffff808211156108ba5783846108b7610597565b50505b818701915087601f8301126108d65783846108d3610597565b50505b8135818111156108e257fe5b604051601f8201601f19168101850183811182821017156108ff57fe5b60405281815283820185018a101561091e57858661091b610597565b50505b81858501868301378585838301015280955050505050509250925092565b600060208284031215610956578081610953610597565b50505b5035919050565b60008060006060848603121561097a578283610977610597565b50505b833561098581610a70565b9250602084013561099581610a70565b929592945050506040919091013590565b60008151815b818110156109c75760208185010151858201526020016109ac565b818111156109d55782828601525b509290920192915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000084168252610a1460048301846109a6565b949350505050565b6000610a2882846109a6565b9392505050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b6001600160a01b0381168114610a8b5760008061065d610597565b5056fe496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564",
  "deployedBytecode":
    "0x608060405234801561001957600080610016610597565b50505b506004361061007b5760003560e01c80639498bd71116100595780639498bd71146100dc578063affed0e0146100f1578063f51b80cf146100f95761007b565b8063116191b6146100895780635e7e3416146100a75780637808ad35146100bc575b600080610086610597565b50505b61009161010c565b60405161009e9190610a2f565b60405180910390f35b6100af61012b565b60405161009e9190610a67565b6100cf6100ca36600461095d565b610138565b60405161009e9190610a5c565b6100ef6100ea36600461093c565b610269565b005b6100af61040a565b6100cf61010736600461082f565b610414565b60026000610118610602565b906101000a90046001600160a01b031681565b6001610135610602565b81565b6000600281610145610602565b906101000a90046001600160a01b03166001600160a01b03165a610167610662565b6001600160a01b03161461018357600080610180610597565b50505b60008383604051602401610198929190610a43565b604051601f198183030181526040919091527fa9059cbb000000000000000000000000000000000000000000000000000000006020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16909117905290506001600160a01b0385168160405161020e9190610a1c565b6000604051808303816000865a6102236106a8565b5050505050509150503d8060008114610258576040513d603f01601f191681016040523d815291503d6000602084013e61025d565b606091505b50909695505050505050565b60016000610275610602565b906101000a900460ff168061028d575061028d610519565b806102aa575060008061029e610602565b906101000a900460ff16155b610308576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610a8f602e913960400191505060405180910390610305610597565b50505b6000600181610315610602565b906101000a900460ff16159050801561037b576001600061010081610338610602565b8160ff0219169083151502179061034d610795565b50505060016000806101000a81610362610602565b8160ff02191690831515021790610377610795565b5050505b81806001610387610795565b5050505a610393610662565b600062010000816103a2610602565b816001600160a01b0302191690836001600160a01b03160217906103c4610795565b5050506000600281906103d5610795565b505050801561040657600080610100816103ed610602565b8160ff02191690831515021790610402610795565b5050505b5050565b6002610135610602565b6000600281610421610602565b906101000a90046001600160a01b03166001600160a01b03165a610443610662565b6001600160a01b03161461045f5760008061045c610597565b50505b600083836040516020016104749291906109e0565b6040516020818303038152906040529050846001600160a01b03168160405161049d9190610a1c565b6000604051808303816000865a6104b26106a8565b5050505050509150503d80600081146104e7576040513d603f01601f191681016040523d815291503d6000602084013e6104ec565b606091505b50508092505060026000816104ff610602565b9160018301915061050e610795565b505050509392505050565b600061057c5a63996d79a5598160e01b8152602081600483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b8051925060005b60408110156105745760008282015260200161055d565b505050610582565b15905090565b6000808261058e6107e3565b15159392505050565b632a2a7adb598160e01b8152600481016020815285602082015260005b868110156105cf5780860151828201604001526020016105b4565b506020828760640184336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b505050565b6303daa959598160e01b8152836004820152602081602483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b8051935060005b604081101561065d57600082820152602001610646565b505050565b6373509064598160e01b8152602081600483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b80516000825293506020610646565b6385979f76598160e01b81526106db565b80808311156106c55750815b92915050565b80808310156106c5575090919050565b836004820152846024820152606060448201528760648201526084810160005b898110156107135780890151828201526020016106fb565b506060828a60a40184336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b815160408301513d6000853e8c8c82606087013350600060045af150596107688e3d6106cb565b8d0161077481876106b9565b5b828110156107895760008152602001610775565b50929d50505050505050565b6322bd64c0598160e01b8152836004820152846024820152600081604483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b600081526020610646565b638435035b598160e01b8152836004820152602081602483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b80516000825293506020610646565b60008060006060848603121561084c578283610849610597565b50505b833561085781610a70565b92506020848101357fffffffff0000000000000000000000000000000000000000000000000000000081168114610895578384610892610597565b50505b9250604085013567ffffffffffffffff808211156108ba5783846108b7610597565b50505b818701915087601f8301126108d65783846108d3610597565b50505b8135818111156108e257fe5b604051601f8201601f19168101850183811182821017156108ff57fe5b60405281815283820185018a101561091e57858661091b610597565b50505b81858501868301378585838301015280955050505050509250925092565b600060208284031215610956578081610953610597565b50505b5035919050565b60008060006060848603121561097a578283610977610597565b50505b833561098581610a70565b9250602084013561099581610a70565b929592945050506040919091013590565b60008151815b818110156109c75760208185010151858201526020016109ac565b818111156109d55782828601525b509290920192915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000084168252610a1460048301846109a6565b949350505050565b6000610a2882846109a6565b9392505050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b6001600160a01b0381168114610a8b5760008061065d610597565b5056fe496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564",
  "linkReferences": {},
  "deployedLinkReferences": {},
};
