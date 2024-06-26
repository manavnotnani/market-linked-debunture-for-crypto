/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { OwnerRolesUpgradeable } from "../OwnerRolesUpgradeable";

export class OwnerRolesUpgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OwnerRolesUpgradeable> {
    return super.deploy(overrides || {}) as Promise<OwnerRolesUpgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OwnerRolesUpgradeable {
    return super.attach(address) as OwnerRolesUpgradeable;
  }
  connect(signer: Signer): OwnerRolesUpgradeable__factory {
    return super.connect(signer) as OwnerRolesUpgradeable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnerRolesUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OwnerRolesUpgradeable;
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
        name: "_owner",
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
        name: "_owner",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "addClaimRegistryManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "addComplianceManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "addComplianceSetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "addIssuersRegistryManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "addOwnerAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "addRegistryAddressSetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "addTokenInfoManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "isClaimRegistryManager",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "isComplianceManager",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "isComplianceSetter",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "isIssuersRegistryManager",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "isOwnerAdmin",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "isRegistryAddressSetter",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "isTokenInfoManager",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "removeClaimRegistryManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "removeComplianceManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "removeComplianceSetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "removeIssuersRegistryManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "removeOwnerAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "removeRegistryAddressSetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "removeTokenInfoManager",
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
  "0x608060405234801561001057600080fd5b50610fcf806100206000396000f3fe608060405234801561001057600080fd5b50600436106101285760003560e01c8063039ec2cd1461012d57806303ff5014146101425780632447e50b1461016a5780633ba7c75e1461017d5780633c734ce81461019057806340522554146101a357806346b686f8146101b657806354b9797f146101c957806362cdd482146101dc5780636ff7bff7146101ef578063715018a614610202578063828709371461020a578063882fc6ca1461021d5780638da5cb5b14610230578063934b2da41461025057806394e69f1b14610263578063a66bcc1c14610276578063ac95fc9114610289578063ae5aaa3b1461029c578063ce4bdac7146102af578063e110255b146102c2578063f2fde38b146102d5578063faed696a146102e8578063ff806311146102fb575b600080fd5b61014061013b366004610ea8565b61030e565b005b610155610150366004610ea8565b6103bf565b60405190151581526020015b60405180910390f35b610155610178366004610ea8565b6103d2565b61015561018b366004610ea8565b6103df565b61015561019e366004610ea8565b6103ec565b6101406101b1366004610ea8565b6103f9565b6101406101c4366004610ea8565b610490565b6101406101d7366004610ea8565b610528565b6101556101ea366004610ea8565b6105b9565b6101406101fd366004610ea8565b6105c6565b610140610663565b610155610218366004610ea8565b610677565b61014061022b366004610ea8565b610684565b61023861071b565b6040516001600160a01b039091168152602001610161565b61014061025e366004610ea8565b61072a565b610140610271366004610ea8565b6107bb565b610140610284366004610ea8565b610852565b610140610297366004610ea8565b6108ea565b6101406102aa366004610ea8565b610987565b6101406102bd366004610ea8565b610a23565b6101406102d0366004610ea8565b610aba565b6101406102e3366004610ea8565b610b55565b6101406102f6366004610ea8565b610bce565b610155610309366004610ea8565b610c69565b3361031761071b565b6001600160a01b031614806103305750610330336105b9565b6103555760405162461bcd60e51b815260040161034c90610ed8565b60405180910390fd5b610360606682610c76565b60408051808201825260158152742932b3b4b9ba393ca0b2323932b9b9a9b2ba3a32b960591b602082015290516001600160a01b03831690600080516020610f5a833981519152906103b3908490610f0b565b60405180910390a25050565b60006103cc606883610cf8565b92915050565b60006103cc606b83610cf8565b60006103cc606783610cf8565b60006103cc606983610cf8565b3361040261071b565b6001600160a01b0316148061041b575061041b336105b9565b6104375760405162461bcd60e51b815260040161034c90610ed8565b610442606782610c76565b604080518082018252601081526f21b7b6b83634b0b731b2a9b2ba3a32b960811b602082015290516001600160a01b03831690600080516020610f5a833981519152906103b3908490610f0b565b3361049961071b565b6001600160a01b031614806104b257506104b2336105b9565b6104ce5760405162461bcd60e51b815260040161034c90610ed8565b6104d9606882610c76565b604080518082018252601181527021b7b6b83634b0b731b2a6b0b730b3b2b960791b602082015290516001600160a01b03831690600080516020610f5a833981519152906103b3908490610f0b565b3361053161071b565b6001600160a01b0316148061054a575061054a336105b9565b6105665760405162461bcd60e51b815260040161034c90610ed8565b610571606582610c76565b604080518082018252600a81526927bbb732b920b236b4b760b11b602082015290516001600160a01b03831690600080516020610f5a833981519152906103b3908490610f0b565b60006103cc606583610cf8565b336105cf61071b565b6001600160a01b031614806105e857506105e8336105b9565b6106045760405162461bcd60e51b815260040161034c90610ed8565b61060f606a82610c76565b604080518082018252601681527524b9b9bab2b939a932b3b4b9ba393ca6b0b730b3b2b960511b602082015290516001600160a01b03831690600080516020610f5a833981519152906103b3908490610f0b565b61066b610d7b565b6106756000610dda565b565b60006103cc606683610cf8565b3361068d61071b565b6001600160a01b031614806106a657506106a6336105b9565b6106c25760405162461bcd60e51b815260040161034c90610ed8565b6106cd606b82610c76565b604080518082018252601081526f2a37b5b2b724b73337a6b0b730b3b2b960811b602082015290516001600160a01b03831690600080516020610f5a833981519152906103b3908490610f0b565b6033546001600160a01b031690565b3361073361071b565b6001600160a01b0316148061074c575061074c336105b9565b6107685760405162461bcd60e51b815260040161034c90610ed8565b610773606582610e2c565b604080518082018252600a81526927bbb732b920b236b4b760b11b602082015290516001600160a01b03831690600080516020610f7a833981519152906103b3908490610f0b565b336107c461071b565b6001600160a01b031614806107dd57506107dd336105b9565b6107f95760405162461bcd60e51b815260040161034c90610ed8565b610804606b82610e2c565b604080518082018252601081526f2a37b5b2b724b73337a6b0b730b3b2b960811b602082015290516001600160a01b03831690600080516020610f7a833981519152906103b3908490610f0b565b3361085b61071b565b6001600160a01b031614806108745750610874336105b9565b6108905760405162461bcd60e51b815260040161034c90610ed8565b61089b606882610e2c565b604080518082018252601181527021b7b6b83634b0b731b2a6b0b730b3b2b960791b602082015290516001600160a01b03831690600080516020610f7a833981519152906103b3908490610f0b565b336108f361071b565b6001600160a01b0316148061090c575061090c336105b9565b6109285760405162461bcd60e51b815260040161034c90610ed8565b610933606a82610e2c565b604080518082018252601681527524b9b9bab2b939a932b3b4b9ba393ca6b0b730b3b2b960511b602082015290516001600160a01b03831690600080516020610f7a833981519152906103b3908490610f0b565b3361099061071b565b6001600160a01b031614806109a957506109a9336105b9565b6109c55760405162461bcd60e51b815260040161034c90610ed8565b6109d0606682610e2c565b60408051808201825260158152742932b3b4b9ba393ca0b2323932b9b9a9b2ba3a32b960591b602082015290516001600160a01b03831690600080516020610f7a833981519152906103b3908490610f0b565b33610a2c61071b565b6001600160a01b03161480610a455750610a45336105b9565b610a615760405162461bcd60e51b815260040161034c90610ed8565b610a6c606782610e2c565b604080518082018252601081526f21b7b6b83634b0b731b2a9b2ba3a32b960811b602082015290516001600160a01b03831690600080516020610f7a833981519152906103b3908490610f0b565b33610ac361071b565b6001600160a01b03161480610adc5750610adc336105b9565b610af85760405162461bcd60e51b815260040161034c90610ed8565b610b03606982610c76565b604080518082018252601481527321b630b4b6a932b3b4b9ba393ca6b0b730b3b2b960611b602082015290516001600160a01b03831690600080516020610f5a833981519152906103b3908490610f0b565b610b5d610d7b565b6001600160a01b038116610bc25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161034c565b610bcb81610dda565b50565b33610bd761071b565b6001600160a01b03161480610bf05750610bf0336105b9565b610c0c5760405162461bcd60e51b815260040161034c90610ed8565b610c17606982610e2c565b604080518082018252601481527321b630b4b6a932b3b4b9ba393ca6b0b730b3b2b960611b602082015290516001600160a01b03831690600080516020610f7a833981519152906103b3908490610f0b565b60006103cc606a83610cf8565b610c808282610cf8565b610cd65760405162461bcd60e51b815260206004820152602160248201527f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c6044820152606560f81b606482015260840161034c565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b60006001600160a01b038216610d5b5760405162461bcd60e51b815260206004820152602260248201527f526f6c65733a206163636f756e7420697320746865207a65726f206164647265604482015261737360f01b606482015260840161034c565b506001600160a01b03166000908152602091909152604090205460ff1690565b33610d8461071b565b6001600160a01b0316146106755760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161034c565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610e368282610cf8565b15610e835760405162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015260640161034c565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b600060208284031215610eba57600080fd5b81356001600160a01b0381168114610ed157600080fd5b9392505050565b6020808252601990820152782937b6329d1029b2b73232b91034b9902727aa1020b236b4b760391b604082015260600190565b600060208083528351808285015260005b81811015610f3857858101830151858201604001528201610f1c565b506000604082860101526040601f19601f830116850101925050509291505056fed211483f91fc6eff862467f8de606587a30c8fc9981056f051b897a418df803abfec83d64eaa953f2708271a023ab9ee82057f8f3578d548c1a4ba0b5b700489a264697066735822122006b3407c92a8ccdafc73e43635a7f80b126b04612e67da9262ccf6ccde6a535364736f6c63430008110033";
