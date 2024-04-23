/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ClaimIssuerTrick } from "../ClaimIssuerTrick";

export class ClaimIssuerTrick__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ClaimIssuerTrick> {
    return super.deploy(overrides || {}) as Promise<ClaimIssuerTrick>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ClaimIssuerTrick {
    return super.attach(address) as ClaimIssuerTrick;
  }
  connect(signer: Signer): ClaimIssuerTrick__factory {
    return super.connect(signer) as ClaimIssuerTrick__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClaimIssuerTrick {
    return new Contract(address, _abi, signerOrProvider) as ClaimIssuerTrick;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101c4806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c0969a6e14610030575b600080fd5b61004361003e3660046100f7565b610057565b604051901515815260200160405180910390f35b60006001600160a01b0387163303610071575060016100a5565b60405162461bcd60e51b815260206004820152600560248201526422a92927a960d91b604482015260640160405180910390fd5b9695505050505050565b60008083601f8401126100c157600080fd5b5081356001600160401b038111156100d857600080fd5b6020830191508360208285010111156100f057600080fd5b9250929050565b6000806000806000806080878903121561011057600080fd5b86356001600160a01b038116811461012757600080fd5b95506020870135945060408701356001600160401b038082111561014a57600080fd5b6101568a838b016100af565b9096509450606089013591508082111561016f57600080fd5b5061017c89828a016100af565b979a969950949750929593949250505056fea2646970667358221220850807cca39c065051574b97d7d11e43984f70872d79575071167e0679a702e364736f6c63430008110033";