/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ITrustedIssuersRegistry } from "../ITrustedIssuersRegistry";

export class ITrustedIssuersRegistry__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITrustedIssuersRegistry {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ITrustedIssuersRegistry;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IClaimIssuer",
        name: "trustedIssuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "claimTopics",
        type: "uint256[]",
      },
    ],
    name: "ClaimTopicsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IClaimIssuer",
        name: "trustedIssuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "claimTopics",
        type: "uint256[]",
      },
    ],
    name: "TrustedIssuerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IClaimIssuer",
        name: "trustedIssuer",
        type: "address",
      },
    ],
    name: "TrustedIssuerRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IClaimIssuer",
        name: "_trustedIssuer",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_claimTopics",
        type: "uint256[]",
      },
    ],
    name: "addTrustedIssuer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IClaimIssuer",
        name: "_trustedIssuer",
        type: "address",
      },
    ],
    name: "getTrustedIssuerClaimTopics",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTrustedIssuers",
    outputs: [
      {
        internalType: "contract IClaimIssuer[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "claimTopic",
        type: "uint256",
      },
    ],
    name: "getTrustedIssuersForClaimTopic",
    outputs: [
      {
        internalType: "contract IClaimIssuer[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_issuer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_claimTopic",
        type: "uint256",
      },
    ],
    name: "hasClaimTopic",
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
        name: "_issuer",
        type: "address",
      },
    ],
    name: "isTrustedIssuer",
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
        internalType: "contract IClaimIssuer",
        name: "_trustedIssuer",
        type: "address",
      },
    ],
    name: "removeTrustedIssuer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IClaimIssuer",
        name: "_trustedIssuer",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_claimTopics",
        type: "uint256[]",
      },
    ],
    name: "updateIssuerClaimTopics",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
