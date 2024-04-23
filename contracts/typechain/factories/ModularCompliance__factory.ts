/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ModularCompliance } from "../ModularCompliance";

export class ModularCompliance__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ModularCompliance> {
    return super.deploy(overrides || {}) as Promise<ModularCompliance>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ModularCompliance {
    return super.attach(address) as ModularCompliance;
  }
  connect(signer: Signer): ModularCompliance__factory {
    return super.connect(signer) as ModularCompliance__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ModularCompliance {
    return new Contract(address, _abi, signerOrProvider) as ModularCompliance;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_module",
        type: "address",
      },
    ],
    name: "ModuleAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
    ],
    name: "ModuleInteraction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_module",
        type: "address",
      },
    ],
    name: "ModuleRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "TokenBound",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "TokenUnbound",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_module",
        type: "address",
      },
    ],
    name: "addModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "bindToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_module",
        type: "address",
      },
    ],
    name: "callModuleFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "canTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "created",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "destroyed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getModules",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenBound",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_module",
        type: "address",
      },
    ],
    name: "isModuleBound",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_module",
        type: "address",
      },
    ],
    name: "removeModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferred",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "unbindToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506115d2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100d05760003560e01c80631ed86f19146100d55780633ff5aa02146100ea57806340db3b50146100fd5780635f8dead3146101105780636a3edf2814610123578063715018a6146101465780638baf29b41461014e5780638d2ea772146101615780638da5cb5b14610174578063a06324611461017c578063a446d49f1461018f578063b2494df3146101cb578063e1c7392a146101e0578063e46638e6146101e8578063efb22d33146101fb578063f2fde38b1461020e575b600080fd5b6100e86100e33660046112a5565b610221565b005b6100e86100f83660046112a5565b61053a565b6100e861010b3660046112a5565b61063b565b6100e861011e3660046112c0565b610765565b6065546001600160a01b03165b60405161013d91906112ea565b60405180910390f35b6100e86108ac565b6100e861015c3660046112fe565b6108c0565b6100e861016f3660046112c0565b610a34565b610130610b75565b6100e861018a3660046112a5565b610b84565b6101bb61019d3660046112a5565b6001600160a01b031660009081526067602052604090205460ff1690565b604051901515815260200161013d565b6101d3610dc1565b60405161013d919061133a565b6100e8610e23565b6101bb6101f63660046112fe565b610f30565b6100e8610209366004611387565b61100d565b6100e861021c3660046112a5565b6110ef565b610229611165565b6001600160a01b0381166102585760405162461bcd60e51b815260040161024f90611407565b60405180910390fd5b6001600160a01b03811660009081526067602052604090205460ff16156102b85760405162461bcd60e51b81526020600482015260146024820152731b5bd91d5b1948185b1c9958591e48189bdd5b9960621b604482015260640161024f565b6066546018101561030b5760405162461bcd60e51b815260206004820152601f60248201527f63616e6e6f7420616464206d6f7265207468616e203235206d6f64756c657300604482015260640161024f565b6000819050806001600160a01b031663e6f5e8076040518163ffffffff1660e01b8152600401602060405180830381865afa15801561034e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610372919061143e565b61044c5760405163bcc2105360e01b81526001600160a01b0382169063bcc21053906103a29030906004016112ea565b602060405180830381865afa1580156103bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e3919061143e565b61044c5760405162461bcd60e51b815260206004820152603460248201527f636f6d706c69616e6365206973206e6f74207375697461626c6520666f722062604482015273696e64696e6720746f20746865206d6f64756c6560601b606482015260840161024f565b6040516312a4c95160e21b81526001600160a01b03821690634a932544906104789030906004016112ea565b600060405180830381600087803b15801561049257600080fd5b505af11580156104a6573d6000803e3d6000fd5b50506066805460018082019092557f46501879b8ca8525e8c2fd519e2fbfcfa2ebea26501294aa02cbfcfb12e943540180546001600160a01b0319166001600160a01b038716908117909155600081815260676020526040808220805460ff191690941790935591519093507fead6a006345da1073a106d5f32372d2d2204f46cb0b4bca8f5ebafcbbed12b8a9250a25050565b33610543610b75565b6001600160a01b0316148061057457506065546001600160a01b03161580156105745750336001600160a01b038216145b6105bf5760405162461bcd60e51b815260206004820152601c60248201527b1bdb9b1e481bdddb995c881bdc881d1bdad95b8818d85b8818d85b1b60221b604482015260640161024f565b6001600160a01b0381166105e55760405162461bcd60e51b815260040161024f90611407565b606580546001600160a01b0319166001600160a01b0383161790556040517f2de35142b19ed5a07796cf30791959c592018f70b1d2d7c460eef8ffe713692b906106309083906112ea565b60405180910390a150565b33610644610b75565b6001600160a01b031614806106615750336001600160a01b038216145b6106a85760405162461bcd60e51b81526020600482015260186024820152771bdb9b1e481bdddb995c881bdc881d1bdad95b8818d85b1b60421b604482015260640161024f565b6065546001600160a01b038281169116146106ff5760405162461bcd60e51b8152602060048201526017602482015276151a1a5cc81d1bdad95b881a5cc81b9bdd08189bdd5b99604a1b604482015260640161024f565b6001600160a01b0381166107255760405162461bcd60e51b815260040161024f90611407565b606580546001600160a01b03191690556040517f28a4ca7134a3b3f9aff286e79ad3daadb4a06d1b43d037a3a98bdc074edd9b7a906106309083906112ea565b6065546001600160a01b0316331461078f5760405162461bcd60e51b815260040161024f90611460565b6001600160a01b0382166107b55760405162461bcd60e51b815260040161024f90611407565b600081116108055760405162461bcd60e51b815260206004820181905260248201527f696e76616c696420617267756d656e74202d206e6f2076616c7565206d696e74604482015260640161024f565b60665460005b818110156108a65760668181548110610826576108266114ca565b60009182526020909120015460405163f104a8c960e01b81526001600160a01b039091169063f104a8c99061086190879087906004016114e0565b600060405180830381600087803b15801561087b57600080fd5b505af115801561088f573d6000803e3d6000fd5b50505050808061089e9061150f565b91505061080b565b50505050565b6108b4611165565b6108be60006111c4565b565b6065546001600160a01b031633146108ea5760405162461bcd60e51b815260040161024f90611460565b6001600160a01b0383161580159061090a57506001600160a01b03821615155b6109265760405162461bcd60e51b815260040161024f90611407565b600081116109825760405162461bcd60e51b8152602060048201526024808201527f696e76616c696420617267756d656e74202d206e6f2076616c7565207472616e60448201526339b332b960e11b606482015260840161024f565b60665460005b81811015610a2d57606681815481106109a3576109a36114ca565b600091825260209091200154604051630b2df87b60e21b81526001600160a01b03878116600483015286811660248301526044820186905290911690632cb7e1ec90606401600060405180830381600087803b158015610a0257600080fd5b505af1158015610a16573d6000803e3d6000fd5b505050508080610a259061150f565b915050610988565b5050505050565b6065546001600160a01b03163314610a5e5760405162461bcd60e51b815260040161024f90611460565b6001600160a01b038216610a845760405162461bcd60e51b815260040161024f90611407565b60008111610ad45760405162461bcd60e51b815260206004820181905260248201527f696e76616c696420617267756d656e74202d206e6f2076616c7565206275726e604482015260640161024f565b60665460005b818110156108a65760668181548110610af557610af56114ca565b600091825260209091200154604051631b9248d160e11b81526001600160a01b039091169063372491a290610b3090879087906004016114e0565b600060405180830381600087803b158015610b4a57600080fd5b505af1158015610b5e573d6000803e3d6000fd5b505050508080610b6d9061150f565b915050610ada565b6033546001600160a01b031690565b610b8c611165565b6001600160a01b038116610bb25760405162461bcd60e51b815260040161024f90611407565b6001600160a01b03811660009081526067602052604090205460ff16610c0d5760405162461bcd60e51b815260206004820152601060248201526f1b5bd91d5b19481b9bdd08189bdd5b9960821b604482015260640161024f565b60665460005b81811015610dbc57826001600160a01b031660668281548110610c3857610c386114ca565b6000918252602090912001546001600160a01b031603610daa57604051630694a5fb60e01b81526001600160a01b03841690630694a5fb90610c7e9030906004016112ea565b600060405180830381600087803b158015610c9857600080fd5b505af1158015610cac573d6000803e3d6000fd5b505050506066600183610cbf9190611528565b81548110610ccf57610ccf6114ca565b600091825260209091200154606680546001600160a01b039092169183908110610cfb57610cfb6114ca565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506066805480610d3a57610d3a61153b565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03851680835260679091526040808320805460ff191690555190917f0a1ee69f55c33d8467c69ca59ce2007a737a88603d75392972520bf67cb513b891a2505050565b80610db48161150f565b915050610c13565b505050565b60606066805480602002602001604051908101604052809291908181526020018280548015610e1957602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610dfb575b5050505050905090565b600054610100900460ff1615808015610e435750600054600160ff909116105b80610e5d5750303b158015610e5d575060005460ff166001145b610ec05760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161024f565b6000805460ff191660011790558015610ee3576000805461ff0019166101001790555b610eeb611216565b8015610f2d576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602001610630565b50565b606654600090815b81811015610fff5760668181548110610f5357610f536114ca565b600091825260209091200154604051624edf3960e21b81526001600160a01b0388811660048301528781166024830152604482018790523060648301529091169063013b7ce490608401602060405180830381865afa158015610fba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fde919061143e565b610fed57600092505050611006565b80610ff78161150f565b915050610f38565b5060019150505b9392505050565b611015611165565b6001600160a01b03811660009081526067602052604090205460ff166110795760405162461bcd60e51b815260206004820152601960248201527863616c6c206f6e6c79206f6e20626f756e64206d6f64756c6560381b604482015260640161024f565b6040518284823760008084836000865af1611098573d6000803e3d6000fd5b50806001600160a01b03167f20d79de70adcc6e9353d8a9a5646b46dc352710d0a310b1ad1f67faeca7ef8916110ce8585611245565b6040516001600160e01b0319909116815260200160405180910390a2505050565b6110f7611165565b6001600160a01b03811661115c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161024f565b610f2d816111c4565b3361116e610b75565b6001600160a01b0316146108be5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161024f565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1661123d5760405162461bcd60e51b815260040161024f90611551565b6108be611259565b600060048210611253575081355b92915050565b600054610100900460ff166112805760405162461bcd60e51b815260040161024f90611551565b6108be336111c4565b80356001600160a01b03811681146112a057600080fd5b919050565b6000602082840312156112b757600080fd5b61100682611289565b600080604083850312156112d357600080fd5b6112dc83611289565b946020939093013593505050565b6001600160a01b0391909116815260200190565b60008060006060848603121561131357600080fd5b61131c84611289565b925061132a60208501611289565b9150604084013590509250925092565b6020808252825182820181905260009190848201906040850190845b8181101561137b5783516001600160a01b031683529284019291840191600101611356565b50909695505050505050565b60008060006040848603121561139c57600080fd5b83356001600160401b03808211156113b357600080fd5b818601915086601f8301126113c757600080fd5b8135818111156113d657600080fd5b8760208285010111156113e857600080fd5b6020928301955093506113fe9186019050611289565b90509250925092565b6020808252601f908201527f696e76616c696420617267756d656e74202d207a65726f206164647265737300604082015260600190565b60006020828403121561145057600080fd5b8151801515811461100657600080fd5b60208082526044908201527f6572726f72203a20746869732061646472657373206973206e6f74206120746f60408201527f6b656e20626f756e6420746f2074686520636f6d706c69616e636520636f6e746060820152631c9858dd60e21b608082015260a00190565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03929092168252602082015260400190565b634e487b7160e01b600052601160045260246000fd5b600060018201611521576115216114f9565b5060010190565b81810381811115611253576112536114f9565b634e487b7160e01b600052603160045260246000fd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea264697066735822122062bbdbc2a66d9cb80815a575a5db2529dc8650177694e91eb56d31a48b25a00264736f6c63430008110033";