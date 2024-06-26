/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface DVDTransferManagerInterface extends ethers.utils.Interface {
  functions: {
    "calculateFee(bytes32)": FunctionFragment;
    "calculateParity(address,address)": FunctionFragment;
    "calculateTransferID(uint256,address,address,uint256,address,address,uint256)": FunctionFragment;
    "cancelDVDTransfer(bytes32)": FunctionFragment;
    "fee(bytes32)": FunctionFragment;
    "initiateDVDTransfer(address,uint256,address,address,uint256)": FunctionFragment;
    "isTREX(address)": FunctionFragment;
    "isTREXAgent(address,address)": FunctionFragment;
    "isTREXOwner(address,address)": FunctionFragment;
    "modifyFee(address,address,uint256,uint256,uint256,address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "takeDVDTransfer(bytes32)": FunctionFragment;
    "token1ToDeliver(bytes32)": FunctionFragment;
    "token2ToDeliver(bytes32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "txNonce()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateFee",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateParity",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateTransferID",
    values: [
      BigNumberish,
      string,
      string,
      BigNumberish,
      string,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelDVDTransfer",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "fee", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "initiateDVDTransfer",
    values: [string, BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isTREX", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isTREXAgent",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isTREXOwner",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "modifyFee",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "takeDVDTransfer",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "token1ToDeliver",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "token2ToDeliver",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "txNonce", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "calculateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateParity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateTransferID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelDVDTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initiateDVDTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isTREX", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTREXAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTREXOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "modifyFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "takeDVDTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "token1ToDeliver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "token2ToDeliver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "txNonce", data: BytesLike): Result;

  events: {
    "DVDTransferCancelled(bytes32)": EventFragment;
    "DVDTransferExecuted(bytes32)": EventFragment;
    "DVDTransferInitiated(bytes32,address,address,uint256,address,address,uint256)": EventFragment;
    "FeeModified(bytes32,address,address,uint256,uint256,uint256,address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DVDTransferCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DVDTransferExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DVDTransferInitiated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeModified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class DVDTransferManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: DVDTransferManagerInterface;

  functions: {
    calculateFee(
      _transferID: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, string, string] & {
          txFee1: BigNumber;
          txFee2: BigNumber;
          fee1Wallet: string;
          fee2Wallet: string;
        }
      ]
    >;

    "calculateFee(bytes32)"(
      _transferID: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, string, string] & {
          txFee1: BigNumber;
          txFee2: BigNumber;
          fee1Wallet: string;
          fee2Wallet: string;
        }
      ]
    >;

    calculateParity(
      _token1: string,
      _token2: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "calculateParity(address,address)"(
      _token1: string,
      _token2: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    calculateTransferID(
      _nonce: BigNumberish,
      _maker: string,
      _token1: string,
      _token1Amount: BigNumberish,
      _taker: string,
      _token2: string,
      _token2Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "calculateTransferID(uint256,address,address,uint256,address,address,uint256)"(
      _nonce: BigNumberish,
      _maker: string,
      _token1: string,
      _token1Amount: BigNumberish,
      _taker: string,
      _token2: string,
      _token2Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    cancelDVDTransfer(
      _transferID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "cancelDVDTransfer(bytes32)"(
      _transferID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fee(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string] & {
        token1Fee: BigNumber;
        token2Fee: BigNumber;
        feeBase: BigNumber;
        fee1Wallet: string;
        fee2Wallet: string;
      }
    >;

    "fee(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string] & {
        token1Fee: BigNumber;
        token2Fee: BigNumber;
        feeBase: BigNumber;
        fee1Wallet: string;
        fee2Wallet: string;
      }
    >;

    initiateDVDTransfer(
      _token1: string,
      _token1Amount: BigNumberish,
      _counterpart: string,
      _token2: string,
      _token2Amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initiateDVDTransfer(address,uint256,address,address,uint256)"(
      _token1: string,
      _token1Amount: BigNumberish,
      _counterpart: string,
      _token2: string,
      _token2Amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isTREX(_token: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isTREX(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTREXAgent(
      _token: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isTREXAgent(address,address)"(
      _token: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTREXOwner(
      _token: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isTREXOwner(address,address)"(
      _token: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    modifyFee(
      _token1: string,
      _token2: string,
      _fee1: BigNumberish,
      _fee2: BigNumberish,
      _feeBase: BigNumberish,
      _fee1Wallet: string,
      _fee2Wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "modifyFee(address,address,uint256,uint256,uint256,address,address)"(
      _token1: string,
      _token2: string,
      _fee1: BigNumberish,
      _fee2: BigNumberish,
      _feeBase: BigNumberish,
      _fee1Wallet: string,
      _fee2Wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    takeDVDTransfer(
      _transferID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "takeDVDTransfer(bytes32)"(
      _transferID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token1ToDeliver(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        counterpart: string;
        token: string;
        amount: BigNumber;
      }
    >;

    "token1ToDeliver(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        counterpart: string;
        token: string;
        amount: BigNumber;
      }
    >;

    token2ToDeliver(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        counterpart: string;
        token: string;
        amount: BigNumber;
      }
    >;

    "token2ToDeliver(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        counterpart: string;
        token: string;
        amount: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    txNonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    "txNonce()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  calculateFee(
    _transferID: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, string] & {
      txFee1: BigNumber;
      txFee2: BigNumber;
      fee1Wallet: string;
      fee2Wallet: string;
    }
  >;

  "calculateFee(bytes32)"(
    _transferID: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, string] & {
      txFee1: BigNumber;
      txFee2: BigNumber;
      fee1Wallet: string;
      fee2Wallet: string;
    }
  >;

  calculateParity(
    _token1: string,
    _token2: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "calculateParity(address,address)"(
    _token1: string,
    _token2: string,
    overrides?: CallOverrides
  ): Promise<string>;

  calculateTransferID(
    _nonce: BigNumberish,
    _maker: string,
    _token1: string,
    _token1Amount: BigNumberish,
    _taker: string,
    _token2: string,
    _token2Amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "calculateTransferID(uint256,address,address,uint256,address,address,uint256)"(
    _nonce: BigNumberish,
    _maker: string,
    _token1: string,
    _token1Amount: BigNumberish,
    _taker: string,
    _token2: string,
    _token2Amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  cancelDVDTransfer(
    _transferID: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "cancelDVDTransfer(bytes32)"(
    _transferID: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fee(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string, string] & {
      token1Fee: BigNumber;
      token2Fee: BigNumber;
      feeBase: BigNumber;
      fee1Wallet: string;
      fee2Wallet: string;
    }
  >;

  "fee(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string, string] & {
      token1Fee: BigNumber;
      token2Fee: BigNumber;
      feeBase: BigNumber;
      fee1Wallet: string;
      fee2Wallet: string;
    }
  >;

  initiateDVDTransfer(
    _token1: string,
    _token1Amount: BigNumberish,
    _counterpart: string,
    _token2: string,
    _token2Amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initiateDVDTransfer(address,uint256,address,address,uint256)"(
    _token1: string,
    _token1Amount: BigNumberish,
    _counterpart: string,
    _token2: string,
    _token2Amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isTREX(_token: string, overrides?: CallOverrides): Promise<boolean>;

  "isTREX(address)"(
    _token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTREXAgent(
    _token: string,
    _user: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isTREXAgent(address,address)"(
    _token: string,
    _user: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTREXOwner(
    _token: string,
    _user: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isTREXOwner(address,address)"(
    _token: string,
    _user: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  modifyFee(
    _token1: string,
    _token2: string,
    _fee1: BigNumberish,
    _fee2: BigNumberish,
    _feeBase: BigNumberish,
    _fee1Wallet: string,
    _fee2Wallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "modifyFee(address,address,uint256,uint256,uint256,address,address)"(
    _token1: string,
    _token2: string,
    _fee1: BigNumberish,
    _fee2: BigNumberish,
    _feeBase: BigNumberish,
    _fee1Wallet: string,
    _fee2Wallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  takeDVDTransfer(
    _transferID: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "takeDVDTransfer(bytes32)"(
    _transferID: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token1ToDeliver(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      counterpart: string;
      token: string;
      amount: BigNumber;
    }
  >;

  "token1ToDeliver(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      counterpart: string;
      token: string;
      amount: BigNumber;
    }
  >;

  token2ToDeliver(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      counterpart: string;
      token: string;
      amount: BigNumber;
    }
  >;

  "token2ToDeliver(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      counterpart: string;
      token: string;
      amount: BigNumber;
    }
  >;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  txNonce(overrides?: CallOverrides): Promise<BigNumber>;

  "txNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    calculateFee(
      _transferID: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string] & {
        txFee1: BigNumber;
        txFee2: BigNumber;
        fee1Wallet: string;
        fee2Wallet: string;
      }
    >;

    "calculateFee(bytes32)"(
      _transferID: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string] & {
        txFee1: BigNumber;
        txFee2: BigNumber;
        fee1Wallet: string;
        fee2Wallet: string;
      }
    >;

    calculateParity(
      _token1: string,
      _token2: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "calculateParity(address,address)"(
      _token1: string,
      _token2: string,
      overrides?: CallOverrides
    ): Promise<string>;

    calculateTransferID(
      _nonce: BigNumberish,
      _maker: string,
      _token1: string,
      _token1Amount: BigNumberish,
      _taker: string,
      _token2: string,
      _token2Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "calculateTransferID(uint256,address,address,uint256,address,address,uint256)"(
      _nonce: BigNumberish,
      _maker: string,
      _token1: string,
      _token1Amount: BigNumberish,
      _taker: string,
      _token2: string,
      _token2Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    cancelDVDTransfer(
      _transferID: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelDVDTransfer(bytes32)"(
      _transferID: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    fee(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string] & {
        token1Fee: BigNumber;
        token2Fee: BigNumber;
        feeBase: BigNumber;
        fee1Wallet: string;
        fee2Wallet: string;
      }
    >;

    "fee(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string] & {
        token1Fee: BigNumber;
        token2Fee: BigNumber;
        feeBase: BigNumber;
        fee1Wallet: string;
        fee2Wallet: string;
      }
    >;

    initiateDVDTransfer(
      _token1: string,
      _token1Amount: BigNumberish,
      _counterpart: string,
      _token2: string,
      _token2Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initiateDVDTransfer(address,uint256,address,address,uint256)"(
      _token1: string,
      _token1Amount: BigNumberish,
      _counterpart: string,
      _token2: string,
      _token2Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isTREX(_token: string, overrides?: CallOverrides): Promise<boolean>;

    "isTREX(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTREXAgent(
      _token: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isTREXAgent(address,address)"(
      _token: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTREXOwner(
      _token: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isTREXOwner(address,address)"(
      _token: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    modifyFee(
      _token1: string,
      _token2: string,
      _fee1: BigNumberish,
      _fee2: BigNumberish,
      _feeBase: BigNumberish,
      _fee1Wallet: string,
      _fee2Wallet: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "modifyFee(address,address,uint256,uint256,uint256,address,address)"(
      _token1: string,
      _token2: string,
      _fee1: BigNumberish,
      _fee2: BigNumberish,
      _feeBase: BigNumberish,
      _fee1Wallet: string,
      _fee2Wallet: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    takeDVDTransfer(
      _transferID: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "takeDVDTransfer(bytes32)"(
      _transferID: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    token1ToDeliver(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        counterpart: string;
        token: string;
        amount: BigNumber;
      }
    >;

    "token1ToDeliver(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        counterpart: string;
        token: string;
        amount: BigNumber;
      }
    >;

    token2ToDeliver(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        counterpart: string;
        token: string;
        amount: BigNumber;
      }
    >;

    "token2ToDeliver(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        counterpart: string;
        token: string;
        amount: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    txNonce(overrides?: CallOverrides): Promise<BigNumber>;

    "txNonce()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    DVDTransferCancelled(
      transferID: BytesLike | null
    ): TypedEventFilter<[string], { transferID: string }>;

    DVDTransferExecuted(
      transferID: BytesLike | null
    ): TypedEventFilter<[string], { transferID: string }>;

    DVDTransferInitiated(
      transferID: BytesLike | null,
      maker: null,
      token1: string | null,
      token1Amount: null,
      taker: null,
      token2: string | null,
      token2Amount: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, string, string, BigNumber],
      {
        transferID: string;
        maker: string;
        token1: string;
        token1Amount: BigNumber;
        taker: string;
        token2: string;
        token2Amount: BigNumber;
      }
    >;

    FeeModified(
      parity: BytesLike | null,
      token1: null,
      token2: null,
      fee1: null,
      fee2: null,
      feeBase: null,
      fee1Wallet: null,
      fee2Wallet: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber, string, string],
      {
        parity: string;
        token1: string;
        token2: string;
        fee1: BigNumber;
        fee2: BigNumber;
        feeBase: BigNumber;
        fee1Wallet: string;
        fee2Wallet: string;
      }
    >;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    calculateFee(
      _transferID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateFee(bytes32)"(
      _transferID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateParity(
      _token1: string,
      _token2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateParity(address,address)"(
      _token1: string,
      _token2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateTransferID(
      _nonce: BigNumberish,
      _maker: string,
      _token1: string,
      _token1Amount: BigNumberish,
      _taker: string,
      _token2: string,
      _token2Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateTransferID(uint256,address,address,uint256,address,address,uint256)"(
      _nonce: BigNumberish,
      _maker: string,
      _token1: string,
      _token1Amount: BigNumberish,
      _taker: string,
      _token2: string,
      _token2Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancelDVDTransfer(
      _transferID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "cancelDVDTransfer(bytes32)"(
      _transferID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fee(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "fee(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initiateDVDTransfer(
      _token1: string,
      _token1Amount: BigNumberish,
      _counterpart: string,
      _token2: string,
      _token2Amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initiateDVDTransfer(address,uint256,address,address,uint256)"(
      _token1: string,
      _token1Amount: BigNumberish,
      _counterpart: string,
      _token2: string,
      _token2Amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isTREX(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isTREX(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTREXAgent(
      _token: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isTREXAgent(address,address)"(
      _token: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTREXOwner(
      _token: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isTREXOwner(address,address)"(
      _token: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    modifyFee(
      _token1: string,
      _token2: string,
      _fee1: BigNumberish,
      _fee2: BigNumberish,
      _feeBase: BigNumberish,
      _fee1Wallet: string,
      _fee2Wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "modifyFee(address,address,uint256,uint256,uint256,address,address)"(
      _token1: string,
      _token2: string,
      _fee1: BigNumberish,
      _fee2: BigNumberish,
      _feeBase: BigNumberish,
      _fee1Wallet: string,
      _fee2Wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    takeDVDTransfer(
      _transferID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "takeDVDTransfer(bytes32)"(
      _transferID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token1ToDeliver(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "token1ToDeliver(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token2ToDeliver(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "token2ToDeliver(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    txNonce(overrides?: CallOverrides): Promise<BigNumber>;

    "txNonce()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateFee(
      _transferID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateFee(bytes32)"(
      _transferID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateParity(
      _token1: string,
      _token2: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateParity(address,address)"(
      _token1: string,
      _token2: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateTransferID(
      _nonce: BigNumberish,
      _maker: string,
      _token1: string,
      _token1Amount: BigNumberish,
      _taker: string,
      _token2: string,
      _token2Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateTransferID(uint256,address,address,uint256,address,address,uint256)"(
      _nonce: BigNumberish,
      _maker: string,
      _token1: string,
      _token1Amount: BigNumberish,
      _taker: string,
      _token2: string,
      _token2Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancelDVDTransfer(
      _transferID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "cancelDVDTransfer(bytes32)"(
      _transferID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fee(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fee(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initiateDVDTransfer(
      _token1: string,
      _token1Amount: BigNumberish,
      _counterpart: string,
      _token2: string,
      _token2Amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initiateDVDTransfer(address,uint256,address,address,uint256)"(
      _token1: string,
      _token1Amount: BigNumberish,
      _counterpart: string,
      _token2: string,
      _token2Amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isTREX(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isTREX(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTREXAgent(
      _token: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isTREXAgent(address,address)"(
      _token: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTREXOwner(
      _token: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isTREXOwner(address,address)"(
      _token: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    modifyFee(
      _token1: string,
      _token2: string,
      _fee1: BigNumberish,
      _fee2: BigNumberish,
      _feeBase: BigNumberish,
      _fee1Wallet: string,
      _fee2Wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "modifyFee(address,address,uint256,uint256,uint256,address,address)"(
      _token1: string,
      _token2: string,
      _fee1: BigNumberish,
      _fee2: BigNumberish,
      _feeBase: BigNumberish,
      _fee1Wallet: string,
      _fee2Wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    takeDVDTransfer(
      _transferID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "takeDVDTransfer(bytes32)"(
      _transferID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token1ToDeliver(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "token1ToDeliver(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token2ToDeliver(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "token2ToDeliver(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    txNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "txNonce()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
