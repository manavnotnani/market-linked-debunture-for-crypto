/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IERC735Legacy } from "../IERC735Legacy";

export class IERC735Legacy__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC735Legacy {
    return new Contract(address, _abi, signerOrProvider) as IERC735Legacy;
  }
}

const _abi = [
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
        internalType: "uint256",
        name: "claimRequestId",
        type: "uint256",
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
    name: "ClaimRequested",
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
];
