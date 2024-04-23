/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { CountryRestrictModule } from "../CountryRestrictModule";

export class CountryRestrictModule__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CountryRestrictModule> {
    return super.deploy(overrides || {}) as Promise<CountryRestrictModule>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CountryRestrictModule {
    return super.attach(address) as CountryRestrictModule;
  }
  connect(signer: Signer): CountryRestrictModule__factory {
    return super.connect(signer) as CountryRestrictModule__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CountryRestrictModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CountryRestrictModule;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "_country",
        type: "uint16",
      },
    ],
    name: "AddedRestrictedCountry",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
    ],
    name: "ComplianceBound",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
    ],
    name: "ComplianceUnbound",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "_country",
        type: "uint16",
      },
    ],
    name: "RemovedRestrictedCountry",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_country",
        type: "uint16",
      },
    ],
    name: "addCountryRestriction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16[]",
        name: "_countries",
        type: "uint16[]",
      },
    ],
    name: "batchRestrictCountries",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16[]",
        name: "_countries",
        type: "uint16[]",
      },
    ],
    name: "batchUnrestrictCountries",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
    ],
    name: "bindCompliance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "canComplianceBind",
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
        name: "_compliance",
        type: "address",
      },
    ],
    name: "isComplianceBound",
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
        name: "_compliance",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_country",
        type: "uint16",
      },
    ],
    name: "isCountryRestricted",
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
    name: "isPlugAndPlay",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
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
    name: "moduleBurnAction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
    ],
    name: "moduleCheck",
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
    name: "moduleMintAction",
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
    name: "moduleTransferAction",
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
        name: "_name",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_country",
        type: "uint16",
      },
    ],
    name: "removeCountryRestriction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
    ],
    name: "unbindCompliance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610f1c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c8063013b7ce4146100ca5780630333ce24146100f25780630694a5fb1461010757806306fdde031461011a578063249c981d146101515780632cb7e1ec1461016457806330236f4a14610177578063372491a21461018a5780634a9325441461019d5780634cf4d295146101b05780636aae7b26146101dc578063bcc21053146101ef578063bdf9a07e14610203578063e6f5e80714610216578063f104a8c91461018a575b600080fd5b6100dd6100d8366004610b08565b61021d565b60405190151581526020015b60405180910390f35b610105610100366004610b6b565b610253565b005b610105610115366004610b88565b61031c565b6040805180820182526015815274436f756e74727952657374726963744d6f64756c6560581b602082015290516100e99190610ba5565b61010561015f366004610bf3565b6103e2565b610105610172366004610c67565b6105ae565b6100dd610185366004610ca8565b6105dd565b610105610198366004610ce1565b61060e565b6101056101ab366004610b88565b610641565b6100dd6101be366004610b88565b6001600160a01b031660009081526020819052604090205460ff1690565b6101056101ea366004610b6b565b61073f565b6100dd6101fd366004610b88565b50600190565b610105610211366004610bf3565b6107f4565b60016100dd565b60008061022a83866109b8565b905061023683826105dd565b1561024557600091505061024b565b60019150505b949350505050565b3360009081526020819052604090205460ff1661028b5760405162461bcd60e51b815260040161028290610d0d565b60405180910390fd5b33600090815260016020908152604080832061ffff8516845290915290205460ff16156102ca5760405162461bcd60e51b815260040161028290610d44565b33600081815260016020818152604080842061ffff8716855290915291829020805460ff1916909117905551600080516020610ea783398151915290610311908490610d78565b60405180910390a250565b3360009081526020819052604090205460ff1661034b5760405162461bcd60e51b815260040161028290610d0d565b6001600160a01b0381166103715760405162461bcd60e51b815260040161028290610d87565b336001600160a01b038216146103995760405162461bcd60e51b815260040161028290610dbe565b6001600160a01b038116600081815260208190526040808220805460ff19169055517f408b49d9be1c914c52a0227e18a077e5a892dddf32a26cfa94a5d9708fad77189190a250565b3360009081526020819052604090205460ff166104115760405162461bcd60e51b815260040161028290610d0d565b60c381106104765760405162461bcd60e51b815260206004820152602c60248201527f6d6178696d756d203139352063616e20626520756e726573747269637465642060448201526b0d2dc40dedcca40c4c2e8c6d60a31b6064820152608401610282565b60005b818110156105a957336000908152600160205260408120908484848181106104a3576104a3610dff565b90506020020160208101906104b89190610b6b565b61ffff16815260208101919091526040016000205460ff1615156001146104f15760405162461bcd60e51b815260040161028290610e15565b3360009081526001602052604081208185858581811061051357610513610dff565b90506020020160208101906105289190610b6b565b61ffff1681526020810191909152604001600020805460ff191691151591909117905533600080516020610ec783398151915284848481811061056d5761056d610dff565b90506020020160208101906105829190610b6b565b60405161058f9190610d78565b60405180910390a2806105a181610e45565b915050610479565b505050565b3360009081526020819052604090205460ff166105a95760405162461bcd60e51b815260040161028290610d0d565b6001600160a01b038216600090815260016020908152604080832061ffff8516845290915290205460ff1692915050565b3360009081526020819052604090205460ff1661063d5760405162461bcd60e51b815260040161028290610d0d565b5050565b6001600160a01b0381166106675760405162461bcd60e51b815260040161028290610d87565b6001600160a01b03811660009081526020819052604090205460ff16156106cb5760405162461bcd60e51b815260206004820152601860248201527718dbdb5c1b1a585b98d948185b1c9958591e48189bdd5b9960421b6044820152606401610282565b336001600160a01b038216146106f35760405162461bcd60e51b815260040161028290610dbe565b6001600160a01b038116600081815260208190526040808220805460ff19166001179055517f1f7b76c58fb697eb53c6c7c1becb96911516a136e24d7ced386b2355358b75a39190a250565b3360009081526020819052604090205460ff1661076e5760405162461bcd60e51b815260040161028290610d0d565b33600090815260016020818152604080842061ffff861685529091529091205460ff161515146107b05760405162461bcd60e51b815260040161028290610e15565b33600081815260016020908152604080832061ffff8616845290915290819020805460ff1916905551600080516020610ec783398151915290610311908490610d78565b3360009081526020819052604090205460ff166108235760405162461bcd60e51b815260040161028290610d0d565b60c381106108865760405162461bcd60e51b815260206004820152602a60248201527f6d6178696d756d203139352063616e206265207265737472696374656420696e604482015269040dedcca40c4c2e8c6d60b31b6064820152608401610282565b60005b818110156105a957336000908152600160205260408120908484848181106108b3576108b3610dff565b90506020020160208101906108c89190610b6b565b61ffff16815260208101919091526040016000205460ff16156108fd5760405162461bcd60e51b815260040161028290610d44565b3360009081526001602081905260408220909185858581811061092257610922610dff565b90506020020160208101906109379190610b6b565b61ffff1681526020810191909152604001600020805460ff191691151591909117905533600080516020610ea783398151915284848481811061097c5761097c610dff565b90506020020160208101906109919190610b6b565b60405161099e9190610d78565b60405180910390a2806109b081610e45565b915050610889565b6000826001600160a01b0316636a3edf286040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109f8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1c9190610e6c565b6001600160a01b031663134e18f46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7d9190610e6c565b604051637e42683b60e01b81526001600160a01b0384811660048301529190911690637e42683b90602401602060405180830381865afa158015610ac5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae99190610e89565b9392505050565b6001600160a01b0381168114610b0557600080fd5b50565b60008060008060808587031215610b1e57600080fd5b8435610b2981610af0565b93506020850135610b3981610af0565b9250604085013591506060850135610b5081610af0565b939692955090935050565b61ffff81168114610b0557600080fd5b600060208284031215610b7d57600080fd5b8135610ae981610b5b565b600060208284031215610b9a57600080fd5b8135610ae981610af0565b600060208083528351808285015260005b81811015610bd257858101830151858201604001528201610bb6565b506000604082860101526040601f19601f8301168501019250505092915050565b60008060208385031215610c0657600080fd5b82356001600160401b0380821115610c1d57600080fd5b818501915085601f830112610c3157600080fd5b813581811115610c4057600080fd5b8660208260051b8501011115610c5557600080fd5b60209290920196919550909350505050565b600080600060608486031215610c7c57600080fd5b8335610c8781610af0565b92506020840135610c9781610af0565b929592945050506040919091013590565b60008060408385031215610cbb57600080fd5b8235610cc681610af0565b91506020830135610cd681610b5b565b809150509250929050565b60008060408385031215610cf457600080fd5b8235610cff81610af0565b946020939093013593505050565b6020808252601e908201527f6f6e6c7920626f756e6420636f6d706c69616e63652063616e2063616c6c0000604082015260600190565b6020808252601a908201527918dbdd5b9d1c9e48185b1c9958591e481c995cdd1c9a58dd195960321b604082015260600190565b61ffff91909116815260200190565b6020808252601f908201527f696e76616c696420617267756d656e74202d207a65726f206164647265737300604082015260600190565b60208082526021908201527f6f6e6c7920636f6d706c69616e636520636f6e74726163742063616e2063616c6040820152601b60fa1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b60208082526016908201527518dbdd5b9d1c9e481b9bdd081c995cdd1c9a58dd195960521b604082015260600190565b600060018201610e6557634e487b7160e01b600052601160045260246000fd5b5060010190565b600060208284031215610e7e57600080fd5b8151610ae981610af0565b600060208284031215610e9b57600080fd5b8151610ae981610b5b56fe5e0addf626d7d7091ab7aebf34682c3203384648734760b24921e31ddcec0bb5fb8bb575200aa114265a31c7d8ebeb4e395bd3cd9d0914c4bfa2a511d2011a7aa2646970667358221220edf8bace44982103a8a908725af4ed4a8a7b332368e5c617c0d217f72d091ec064736f6c63430008110033";
