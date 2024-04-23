/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IClaimIssuer } from "../IClaimIssuer";

export class IClaimIssuer__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IClaimIssuer {
    return new Contract(address, _abi, signerOrProvider) as IClaimIssuer;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "executionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "Approved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "claimId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "topic",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "scheme",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "ClaimAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "claimId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "topic",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "scheme",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "ClaimChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "claimId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "topic",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "scheme",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "ClaimRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "ClaimRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "executionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "Executed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "executionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "ExecutionFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "executionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "ExecutionRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "purpose",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "keyType",
        type: "uint256",
      },
    ],
    name: "KeyAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "purpose",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "keyType",
        type: "uint256",
      },
    ],
    name: "KeyRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_topic",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_scheme",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "addClaim",
    outputs: [
      {
        internalType: "bytes32",
        name: "claimRequestId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_purpose",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_keyType",
        type: "uint256",
      },
    ],
    name: "addKey",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_approve",
        type: "bool",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "success",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "uint256",
        name: "executionId",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_claimId",
        type: "bytes32",
      },
    ],
    name: "getClaim",
    outputs: [
      {
        internalType: "uint256",
        name: "topic",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "scheme",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_topic",
        type: "uint256",
      },
    ],
    name: "getClaimIdsByTopic",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "claimIds",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "getKey",
    outputs: [
      {
        internalType: "uint256[]",
        name: "purposes",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "keyType",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "getKeyPurposes",
    outputs: [
      {
        internalType: "uint256[]",
        name: "_purposes",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_purpose",
        type: "uint256",
      },
    ],
    name: "getKeysByPurpose",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "keys",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_sig",
        type: "bytes",
      },
    ],
    name: "isClaimRevoked",
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
        internalType: "contract IIdentity",
        name: "_identity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "claimTopic",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "isClaimValid",
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
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_purpose",
        type: "uint256",
      },
    ],
    name: "keyHasPurpose",
    outputs: [
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_claimId",
        type: "bytes32",
      },
    ],
    name: "removeClaim",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_purpose",
        type: "uint256",
      },
    ],
    name: "removeKey",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_claimId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_identity",
        type: "address",
      },
    ],
    name: "revokeClaim",
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
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "revokeClaimBySignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
