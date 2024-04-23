/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ITREXGateway } from "../ITREXGateway";

export class ITREXGateway__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITREXGateway {
    return new Contract(address, _abi, signerOrProvider) as ITREXGateway;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    name: "DeployerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    name: "DeployerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bool",
        name: "isEnabled",
        type: "bool",
      },
    ],
    name: "DeploymentFeeEnabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "feeToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "feeCollector",
        type: "address",
      },
    ],
    name: "DeploymentFeeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "factory",
        type: "address",
      },
    ],
    name: "FactorySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "deployer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "discount",
        type: "uint16",
      },
    ],
    name: "FeeDiscountApplied",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "requester",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "intendedOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeApplied",
        type: "uint256",
      },
    ],
    name: "GatewaySuiteDeploymentProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bool",
        name: "publicDeploymentStatus",
        type: "bool",
      },
    ],
    name: "PublicDeploymentStatusSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    name: "addDeployer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "deployer",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "discount",
        type: "uint16",
      },
    ],
    name: "applyFeeDiscount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "deployers",
        type: "address[]",
      },
    ],
    name: "batchAddDeployer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "deployers",
        type: "address[]",
      },
      {
        internalType: "uint16[]",
        name: "discounts",
        type: "uint16[]",
      },
    ],
    name: "batchApplyFeeDiscount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
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
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "irs",
            type: "address",
          },
          {
            internalType: "address",
            name: "ONCHAINID",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "irAgents",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "tokenAgents",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "complianceModules",
            type: "address[]",
          },
          {
            internalType: "bytes[]",
            name: "complianceSettings",
            type: "bytes[]",
          },
          {
            internalType: "address",
            name: "tokenOwner",
            type: "address",
          },
          {
            internalType: "address",
            name: "dividend",
            type: "address",
          },
        ],
        internalType: "struct ITREXFactory.TokenDetails[]",
        name: "_tokenDetails",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256[]",
            name: "claimTopics",
            type: "uint256[]",
          },
          {
            internalType: "address[]",
            name: "issuers",
            type: "address[]",
          },
          {
            internalType: "uint256[][]",
            name: "issuerClaims",
            type: "uint256[][]",
          },
        ],
        internalType: "struct ITREXFactory.ClaimDetails[]",
        name: "_claimDetails",
        type: "tuple[]",
      },
    ],
    name: "batchDeployTREXSuite",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "deployers",
        type: "address[]",
      },
    ],
    name: "batchRemoveDeployer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    name: "calculateFee",
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
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
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
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "irs",
            type: "address",
          },
          {
            internalType: "address",
            name: "ONCHAINID",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "irAgents",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "tokenAgents",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "complianceModules",
            type: "address[]",
          },
          {
            internalType: "bytes[]",
            name: "complianceSettings",
            type: "bytes[]",
          },
          {
            internalType: "address",
            name: "tokenOwner",
            type: "address",
          },
          {
            internalType: "address",
            name: "dividend",
            type: "address",
          },
        ],
        internalType: "struct ITREXFactory.TokenDetails",
        name: "_tokenDetails",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256[]",
            name: "claimTopics",
            type: "uint256[]",
          },
          {
            internalType: "address[]",
            name: "issuers",
            type: "address[]",
          },
          {
            internalType: "uint256[][]",
            name: "issuerClaims",
            type: "uint256[][]",
          },
        ],
        internalType: "struct ITREXFactory.ClaimDetails",
        name: "_claimDetails",
        type: "tuple",
      },
    ],
    name: "deployTREXSuite",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_isEnabled",
        type: "bool",
      },
    ],
    name: "enableDeploymentFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeploymentFee",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "feeToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeCollector",
            type: "address",
          },
        ],
        internalType: "struct ITREXGateway.Fee",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFactory",
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
    name: "getPublicDeploymentStatus",
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
        name: "deployer",
        type: "address",
      },
    ],
    name: "isDeployer",
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
    name: "isDeploymentFeeEnabled",
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
        name: "deployer",
        type: "address",
      },
    ],
    name: "removeDeployer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_feeToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeCollector",
        type: "address",
      },
    ],
    name: "setDeploymentFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
    ],
    name: "setFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_isEnabled",
        type: "bool",
      },
    ],
    name: "setPublicDeploymentStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferFactoryOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
