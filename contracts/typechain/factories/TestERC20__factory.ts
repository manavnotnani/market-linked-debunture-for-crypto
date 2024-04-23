/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TestERC20 } from "../TestERC20";

export class TestERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestERC20> {
    return super.deploy(name, symbol, overrides || {}) as Promise<TestERC20>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): TestERC20 {
    return super.attach(address) as TestERC20;
  }
  connect(signer: Signer): TestERC20__factory {
    return super.connect(signer) as TestERC20__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200104038038062001040833981016040819052620000349162000189565b8181620000413362000074565b60046200004f838262000282565b5060056200005e828262000282565b50506006805460ff19169055506200034e915050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000ec57600080fd5b81516001600160401b0380821115620001095762000109620000c4565b604051601f8301601f19908116603f01168101908282118183101715620001345762000134620000c4565b816040528381526020925086838588010111156200015157600080fd5b600091505b8382101562000175578582018301518183018401529082019062000156565b600093810190920192909252949350505050565b600080604083850312156200019d57600080fd5b82516001600160401b0380821115620001b557600080fd5b620001c386838701620000da565b93506020850151915080821115620001da57600080fd5b50620001e985828601620000da565b9150509250929050565b600181811c908216806200020857607f821691505b6020821081036200022957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200027d57600081815260208120601f850160051c81016020861015620002585750805b601f850160051c820191505b81811015620002795782815560010162000264565b5050505b505050565b81516001600160401b038111156200029e576200029e620000c4565b620002b681620002af8454620001f3565b846200022f565b602080601f831160018114620002ee5760008415620002d55750858301515b600019600386901b1c1916600185901b17855562000279565b600085815260208120601f198616915b828110156200031f57888601518255948401946001909101908401620002fe565b50858210156200033e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610ce2806200035e6000396000f3fe608060405234801561001057600080fd5b50600436106100e65760003560e01c806306fdde03146100eb578063095ea7b31461010957806318160ddd1461012c57806323b872dd1461013e578063313ce5671461015157806339509351146101605780633f4ba83a1461017357806340c10f191461017d5780635c975abb1461019057806370a082311461019b578063715018a6146101c45780638456cb59146101cc5780638da5cb5b146101d457806395d89b41146101e9578063a457c2d7146101f1578063a9059cbb14610204578063dd62ed3e14610217578063f2fde38b1461022a575b600080fd5b6100f361023d565b6040516101009190610af8565b60405180910390f35b61011c610117366004610b62565b6102cf565b6040519015158152602001610100565b6003545b604051908152602001610100565b61011c61014c366004610b8c565b6102e9565b60405160128152602001610100565b61011c61016e366004610b62565b61030d565b61017b61032f565b005b61017b61018b366004610b62565b610341565b60065460ff1661011c565b6101306101a9366004610bc8565b6001600160a01b031660009081526001602052604090205490565b61017b610357565b61017b610369565b6101dc610379565b6040516101009190610bea565b6100f3610388565b61011c6101ff366004610b62565b610397565b61011c610212366004610b62565b610417565b610130610225366004610bfe565b610425565b61017b610238366004610bc8565b610450565b60606004805461024c90610c31565b80601f016020809104026020016040519081016040528092919081815260200182805461027890610c31565b80156102c55780601f1061029a576101008083540402835291602001916102c5565b820191906000526020600020905b8154815290600101906020018083116102a857829003601f168201915b5050505050905090565b6000336102dd8185856104c9565b60019150505b92915050565b6000336102f78582856105ed565b610302858585610667565b506001949350505050565b6000336102dd8185856103208383610425565b61032a9190610c6b565b6104c9565b61033761080b565b61033f61086a565b565b61034961080b565b61035382826108b6565b5050565b61035f61080b565b61033f6000610971565b61037161080b565b61033f6109c1565b6000546001600160a01b031690565b60606005805461024c90610c31565b600033816103a58286610425565b90508381101561040a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61030282868684036104c9565b6000336102dd818585610667565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b61045861080b565b6001600160a01b0381166104bd5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610401565b6104c681610971565b50565b6001600160a01b03831661052b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610401565b6001600160a01b03821661058c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610401565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006105f98484610425565b9050600019811461066157818110156106545760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610401565b61066184848484036104c9565b50505050565b6001600160a01b0383166106cb5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610401565b6001600160a01b03821661072d5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610401565b6107388383836109fe565b6001600160a01b038316600090815260016020526040902054818110156107b05760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610401565b6001600160a01b038085166000818152600160205260408082208686039055928616808252908390208054860190559151600080516020610c8d833981519152906107fe9086815260200190565b60405180910390a3610661565b33610814610379565b6001600160a01b03161461033f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610401565b610872610a69565b6006805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516108ac9190610bea565b60405180910390a1565b6001600160a01b03821661090c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610401565b610918600083836109fe565b806003600082825461092a9190610c6b565b90915550506001600160a01b038216600081815260016020908152604080832080548601905551848152600080516020610c8d833981519152910160405180910390a35050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6109c9610ab2565b6006805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861089f3390565b60065460ff1615610a645760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b6064820152608401610401565b505050565b60065460ff1661033f5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610401565b60065460ff161561033f5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610401565b600060208083528351808285015260005b81811015610b2557858101830151858201604001528201610b09565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610b5d57600080fd5b919050565b60008060408385031215610b7557600080fd5b610b7e83610b46565b946020939093013593505050565b600080600060608486031215610ba157600080fd5b610baa84610b46565b9250610bb860208501610b46565b9150604084013590509250925092565b600060208284031215610bda57600080fd5b610be382610b46565b9392505050565b6001600160a01b0391909116815260200190565b60008060408385031215610c1157600080fd5b610c1a83610b46565b9150610c2860208401610b46565b90509250929050565b600181811c90821680610c4557607f821691505b602082108103610c6557634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156102e357634e487b7160e01b600052601160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220d5d2f483df3fc35955c466d2eb6bdf64fe96a11ffbca2c24aab8669a8766442064736f6c63430008110033";
