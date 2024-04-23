/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { AgentRolesUpgradeable } from "../AgentRolesUpgradeable";

export class AgentRolesUpgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AgentRolesUpgradeable> {
    return super.deploy(overrides || {}) as Promise<AgentRolesUpgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AgentRolesUpgradeable {
    return super.attach(address) as AgentRolesUpgradeable;
  }
  connect(signer: Signer): AgentRolesUpgradeable__factory {
    return super.connect(signer) as AgentRolesUpgradeable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AgentRolesUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AgentRolesUpgradeable;
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
        indexed: true,
        internalType: "address",
        name: "_agent",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_role",
        type: "string",
      },
    ],
    name: "RoleAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_agent",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_role",
        type: "string",
      },
    ],
    name: "RoleRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agent",
        type: "address",
      },
    ],
    name: "addAgentAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agent",
        type: "address",
      },
    ],
    name: "addComplianceAgent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agent",
        type: "address",
      },
    ],
    name: "addFreezer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agent",
        type: "address",
      },
    ],
    name: "addRecoveryAgent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agent",
        type: "address",
      },
    ],
    name: "addSupplyModifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agent",
        type: "address",
      },
    ],
    name: "addTransferManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agent",
        type: "address",
      },
    ],
    name: "addWhiteListManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agent",
        type: "address",
      },
    ],
    name: "isAgentAdmin",
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
        name: "_agent",
        type: "address",
      },
    ],
    name: "isComplianceAgent",
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
        name: "_agent",
        type: "address",
      },
    ],
    name: "isFreezer",
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
        name: "_agent",
        type: "address",
      },
    ],
    name: "isRecoveryAgent",
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
        name: "_agent",
        type: "address",
      },
    ],
    name: "isSupplyModifier",
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
        name: "_agent",
        type: "address",
      },
    ],
    name: "isTransferManager",
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
        name: "_agent",
        type: "address",
      },
    ],
    name: "isWhiteListManager",
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
        name: "_agent",
        type: "address",
      },
    ],
    name: "removeAgentAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agent",
        type: "address",
      },
    ],
    name: "removeComplianceAgent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agent",
        type: "address",
      },
    ],
    name: "removeFreezer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agent",
        type: "address",
      },
    ],
    name: "removeRecoveryAgent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agent",
        type: "address",
      },
    ],
    name: "removeSupplyModifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agent",
        type: "address",
      },
    ],
    name: "removeTransferManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agent",
        type: "address",
      },
    ],
    name: "removeWhiteListManager",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610f8f806100206000396000f3fe608060405234801561001057600080fd5b50600436106101285760003560e01c8063042a36061461012d57806314f2d2761461015557806315d8ca621461016a5780632001c3501461017d5780632acd2000146101905780633966904d146101a35780633cdf8000146101b65780634599fb7b146101c95780634aff432c146101dc578063526606c9146101ef57806365d07b2e146102025780636c65fd6a14610215578063715018a6146102285780637489453d146102305780637ad78a4614610243578063860a2bcf146102565780638da5cb5b14610269578063965e61ea14610289578063bd92fcfe1461029c578063c6006c9a146102af578063c8777b50146102c2578063cdf1b693146102d5578063e86c6431146102e8578063f2fde38b146102fb575b600080fd5b61014061013b366004610e68565b61030e565b60405190151581526020015b60405180910390f35b610168610163366004610e68565b610321565b005b610168610178366004610e68565b6103cc565b61014061018b366004610e68565b610461565b61016861019e366004610e68565b61046e565b6101686101b1366004610e68565b6104fc565b6101686101c4366004610e68565b610593565b6101406101d7366004610e68565b610629565b6101686101ea366004610e68565b610636565b6101686101fd366004610e68565b6106cd565b610168610210366004610e68565b61075b565b610140610223366004610e68565b6107ec565b6101686107f9565b61016861023e366004610e68565b61080d565b610140610251366004610e68565b6108a1565b610168610264366004610e68565b6108ae565b610271610943565b6040516001600160a01b03909116815260200161014c565b610168610297366004610e68565b610952565b6101406102aa366004610e68565b6109e8565b6101686102bd366004610e68565b6109f5565b6101686102d0366004610e68565b610a8b565b6101686102e3366004610e68565b610b1f565b6101406102f6366004610e68565b610bb0565b610168610309366004610e68565b610bbd565b600061031b606583610c36565b92915050565b3361032a610943565b6001600160a01b03161480610343575061034333610629565b6103685760405162461bcd60e51b815260040161035f90610e98565b60405180910390fd5b610373606782610cb9565b604080518082018252600f81526e2a3930b739b332b926b0b730b3b2b960891b602082015290516001600160a01b03831690600080516020610f3a833981519152906103c0908490610ecb565b60405180910390a25050565b336103d5610943565b6001600160a01b031614806103ee57506103ee33610629565b61040a5760405162461bcd60e51b815260040161035f90610e98565b610415606582610cb9565b604080518082018252600e81526d29bab838363ca6b7b234b334b2b960911b602082015290516001600160a01b03831690600080516020610f3a833981519152906103c0908490610ecb565b600061031b606983610c36565b33610477610943565b6001600160a01b03161480610490575061049033610629565b6104ac5760405162461bcd60e51b815260040161035f90610e98565b6104b7606682610d35565b6040805180820182526007815266233932b2bd32b960c91b602082015290516001600160a01b03831690600080516020610f1a833981519152906103c0908490610ecb565b33610505610943565b6001600160a01b0316148061051e575061051e33610629565b61053a5760405162461bcd60e51b815260040161035f90610e98565b610545606a82610cb9565b604080518082018252601081526f2bb434ba32a634b9ba26b0b730b3b2b960811b602082015290516001600160a01b03831690600080516020610f3a833981519152906103c0908490610ecb565b3361059c610943565b6001600160a01b031614806105b557506105b533610629565b6105d15760405162461bcd60e51b815260040161035f90610e98565b6105dc606982610cb9565b604080518082018252600f81526e10dbdb5c1b1a585b98d95059d95b9d608a1b602082015290516001600160a01b03831690600080516020610f3a833981519152906103c0908490610ecb565b600061031b606b83610c36565b3361063f610943565b6001600160a01b03161480610658575061065833610629565b6106745760405162461bcd60e51b815260040161035f90610e98565b61067f606a82610d35565b604080518082018252601081526f2bb434ba32a634b9ba26b0b730b3b2b960811b602082015290516001600160a01b03831690600080516020610f1a833981519152906103c0908490610ecb565b336106d6610943565b6001600160a01b031614806106ef57506106ef33610629565b61070b5760405162461bcd60e51b815260040161035f90610e98565b610716606682610cb9565b6040805180820182526007815266233932b2bd32b960c91b602082015290516001600160a01b03831690600080516020610f3a833981519152906103c0908490610ecb565b33610764610943565b6001600160a01b0316148061077d575061077d33610629565b6107995760405162461bcd60e51b815260040161035f90610e98565b6107a4606b82610d35565b604080518082018252600a81526920b3b2b73a20b236b4b760b11b602082015290516001600160a01b03831690600080516020610f1a833981519152906103c0908490610ecb565b600061031b606683610c36565b610801610db7565b61080b6000610e16565b565b33610816610943565b6001600160a01b0316148061082f575061082f33610629565b61084b5760405162461bcd60e51b815260040161035f90610e98565b610856606882610cb9565b604080518082018252600d81526c149958dbdd995c9e5059d95b9d609a1b602082015290516001600160a01b03831690600080516020610f3a833981519152906103c0908490610ecb565b600061031b606883610c36565b336108b7610943565b6001600160a01b031614806108d057506108d033610629565b6108ec5760405162461bcd60e51b815260040161035f90610e98565b6108f7606582610d35565b604080518082018252600e81526d29bab838363ca6b7b234b334b2b960911b602082015290516001600160a01b03831690600080516020610f1a833981519152906103c0908490610ecb565b6033546001600160a01b031690565b3361095b610943565b6001600160a01b03161480610974575061097433610629565b6109905760405162461bcd60e51b815260040161035f90610e98565b61099b606782610d35565b604080518082018252600f81526e2a3930b739b332b926b0b730b3b2b960891b602082015290516001600160a01b03831690600080516020610f1a833981519152906103c0908490610ecb565b600061031b606a83610c36565b336109fe610943565b6001600160a01b03161480610a175750610a1733610629565b610a335760405162461bcd60e51b815260040161035f90610e98565b610a3e606982610d35565b604080518082018252600f81526e10dbdb5c1b1a585b98d95059d95b9d608a1b602082015290516001600160a01b03831690600080516020610f1a833981519152906103c0908490610ecb565b33610a94610943565b6001600160a01b03161480610aad5750610aad33610629565b610ac95760405162461bcd60e51b815260040161035f90610e98565b610ad4606882610d35565b604080518082018252600d81526c149958dbdd995c9e5059d95b9d609a1b602082015290516001600160a01b03831690600080516020610f1a833981519152906103c0908490610ecb565b33610b28610943565b6001600160a01b03161480610b415750610b4133610629565b610b5d5760405162461bcd60e51b815260040161035f90610e98565b610b68606b82610cb9565b604080518082018252600a81526920b3b2b73a20b236b4b760b11b602082015290516001600160a01b03831690600080516020610f3a833981519152906103c0908490610ecb565b600061031b606783610c36565b610bc5610db7565b6001600160a01b038116610c2a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161035f565b610c3381610e16565b50565b60006001600160a01b038216610c995760405162461bcd60e51b815260206004820152602260248201527f526f6c65733a206163636f756e7420697320746865207a65726f206164647265604482015261737360f01b606482015260840161035f565b506001600160a01b03166000908152602091909152604090205460ff1690565b610cc38282610c36565b15610d105760405162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015260640161035f565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b610d3f8282610c36565b610d955760405162461bcd60e51b815260206004820152602160248201527f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c6044820152606560f81b606482015260840161035f565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b33610dc0610943565b6001600160a01b03161461080b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161035f565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600060208284031215610e7a57600080fd5b81356001600160a01b0381168114610e9157600080fd5b9392505050565b6020808252601990820152782937b6329d1029b2b73232b91034b9902727aa1020b236b4b760391b604082015260600190565b600060208083528351808285015260005b81811015610ef857858101830151858201604001528201610edc565b506000604082860101526040601f19601f830116850101925050509291505056fed211483f91fc6eff862467f8de606587a30c8fc9981056f051b897a418df803abfec83d64eaa953f2708271a023ab9ee82057f8f3578d548c1a4ba0b5b700489a26469706673582212207e33213a881e04e274d1f6908399d3ba034a93ba45cf074652d356cc685e92a264736f6c63430008110033";
