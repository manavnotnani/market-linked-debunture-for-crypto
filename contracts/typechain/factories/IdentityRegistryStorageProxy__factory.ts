/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { IdentityRegistryStorageProxy } from "../IdentityRegistryStorageProxy";

export class IdentityRegistryStorageProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    implementationAuthority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IdentityRegistryStorageProxy> {
    return super.deploy(
      implementationAuthority,
      overrides || {}
    ) as Promise<IdentityRegistryStorageProxy>;
  }
  getDeployTransaction(
    implementationAuthority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(implementationAuthority, overrides || {});
  }
  attach(address: string): IdentityRegistryStorageProxy {
    return super.attach(address) as IdentityRegistryStorageProxy;
  }
  connect(signer: Signer): IdentityRegistryStorageProxy__factory {
    return super.connect(signer) as IdentityRegistryStorageProxy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IdentityRegistryStorageProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IdentityRegistryStorageProxy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "implementationAuthority",
        type: "address",
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
        name: "_implementationAuthority",
        type: "address",
      },
    ],
    name: "ImplementationAuthoritySet",
    type: "event",
  },
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
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "getImplementationAuthority",
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
        name: "_newImplementationAuthority",
        type: "address",
      },
    ],
    name: "setImplementationAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516108f63803806108f683398101604081905261002f9161022a565b6001600160a01b03811661008a5760405162461bcd60e51b815260206004820152601f60248201527f696e76616c696420617267756d656e74202d207a65726f20616464726573730060448201526064015b60405180910390fd5b6100a0816000805160206108d683398151915255565b6040516001600160a01b038216907f3b1074392ed8e8424715d0dda2197eede67080b377fc8370e26f3e882207f6b890600090a260006100ec6000805160206108d68339815191525490565b6001600160a01b0316639e3e7bb96040518163ffffffff1660e01b8152600401602060405180830381865afa158015610129573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014d919061022a565b60408051600481526024810182526020810180516001600160e01b03166370e39c9560e11b17905290519192506000916001600160a01b038416916101919161025a565b600060405180830381855af49150503d80600081146101cc576040519150601f19603f3d011682016040523d82523d6000602084013e6101d1565b606091505b50509050806102225760405162461bcd60e51b815260206004820152601660248201527f496e697469616c697a6174696f6e206661696c65642e000000000000000000006044820152606401610081565b505050610289565b60006020828403121561023c57600080fd5b81516001600160a01b038116811461025357600080fd5b9392505050565b6000825160005b8181101561027b5760208186018101518583015201610261565b506000920191825250919050565b61063e806102986000396000f3fe6080604052600436106100295760003560e01c80632d5f1187146100c157806392dd9d65146100f2575b6000610033610112565b6001600160a01b0316639e3e7bb96040518163ffffffff1660e01b8152600401602060405180830381865afa158015610070573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061009491906105a7565b90503660008037600080366000846127105a03f43d806000803e8180156100ba57816000f35b816000fd5b005b3480156100cd57600080fd5b506100d6610112565b6040516001600160a01b03909116815260200160405180910390f35b3480156100fe57600080fd5b506100bf61010d3660046105cb565b610125565b6000805160206105e98339815191525490565b61012d610112565b6001600160a01b0316336001600160a01b0316146101a85760405162461bcd60e51b815260206004820152602d60248201527f6f6e6c792063757272656e7420696d706c656d656e746174696f6e417574686f60448201526c1c9a5d1e4818d85b8818d85b1b609a1b60648201526084015b60405180910390fd5b6001600160a01b0381166101fe5760405162461bcd60e51b815260206004820152601f60248201527f696e76616c696420617267756d656e74202d207a65726f206164647265737300604482015260640161019f565b60006001600160a01b0316816001600160a01b031663709bc7f36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610247573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026b91906105a7565b6001600160a01b0316141580156102f6575060006001600160a01b0316816001600160a01b0316636ff6e83f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ea91906105a7565b6001600160a01b031614155b8015610376575060006001600160a01b0316816001600160a01b0316631ee9ce8b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610346573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036a91906105a7565b6001600160a01b031614155b80156103f6575060006001600160a01b0316816001600160a01b0316639e3e7bb96040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ea91906105a7565b6001600160a01b031614155b8015610476575060006001600160a01b0316816001600160a01b03166361f898256040518163ffffffff1660e01b8152600401602060405180830381865afa158015610446573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046a91906105a7565b6001600160a01b031614155b80156104f6575060006001600160a01b0316816001600160a01b031663fedcc0526040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ea91906105a7565b6001600160a01b031614155b6105425760405162461bcd60e51b815260206004820181905260248201527f696e76616c696420496d706c656d656e746174696f6e20417574686f72697479604482015260640161019f565b610558816000805160206105e983398151915255565b6040516001600160a01b038216907f3b1074392ed8e8424715d0dda2197eede67080b377fc8370e26f3e882207f6b890600090a250565b6001600160a01b03811681146105a457600080fd5b50565b6000602082840312156105b957600080fd5b81516105c48161058f565b9392505050565b6000602082840312156105dd57600080fd5b81356105c48161058f56fec5f16f0fcc639fa48a6947836d9850f504798523bf8c9a3a87d5876cf622bcf7a2646970667358221220fd7ef53736b0af3d24bcfb0a383a3a0a5ae643319ec174d5c325395095bde8e964736f6c63430008110033c5f16f0fcc639fa48a6947836d9850f504798523bf8c9a3a87d5876cf622bcf7";
