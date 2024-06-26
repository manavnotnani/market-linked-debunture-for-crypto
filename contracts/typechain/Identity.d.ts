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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IdentityInterface extends ethers.utils.Interface {
  functions: {
    "addClaim(uint256,uint256,address,bytes,bytes,string)": FunctionFragment;
    "addKey(bytes32,uint256,uint256)": FunctionFragment;
    "approve(uint256,bool)": FunctionFragment;
    "execute(address,uint256,bytes)": FunctionFragment;
    "getClaim(bytes32)": FunctionFragment;
    "getClaimIdsByTopic(uint256)": FunctionFragment;
    "getKey(bytes32)": FunctionFragment;
    "getKeyPurposes(bytes32)": FunctionFragment;
    "getKeysByPurpose(uint256)": FunctionFragment;
    "getRecoveredAddress(bytes,bytes32)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isClaimValid(address,uint256,bytes,bytes)": FunctionFragment;
    "keyHasPurpose(bytes32,uint256)": FunctionFragment;
    "removeClaim(bytes32)": FunctionFragment;
    "removeKey(bytes32,uint256)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addClaim",
    values: [BigNumberish, BigNumberish, string, BytesLike, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addKey",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getClaim", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getClaimIdsByTopic",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getKey", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getKeyPurposes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getKeysByPurpose",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRecoveredAddress",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isClaimValid",
    values: [string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "keyHasPurpose",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeClaim",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeKey",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "addClaim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addKey", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getClaim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getClaimIdsByTopic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getKey", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getKeyPurposes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getKeysByPurpose",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecoveredAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isClaimValid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "keyHasPurpose",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "removeKey", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "Approved(uint256,bool)": EventFragment;
    "ClaimAdded(bytes32,uint256,uint256,address,bytes,bytes,string)": EventFragment;
    "ClaimChanged(bytes32,uint256,uint256,address,bytes,bytes,string)": EventFragment;
    "ClaimRemoved(bytes32,uint256,uint256,address,bytes,bytes,string)": EventFragment;
    "Executed(uint256,address,uint256,bytes)": EventFragment;
    "ExecutionFailed(uint256,address,uint256,bytes)": EventFragment;
    "ExecutionRequested(uint256,address,uint256,bytes)": EventFragment;
    "KeyAdded(bytes32,uint256,uint256)": EventFragment;
    "KeyRemoved(bytes32,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutionFailed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutionRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "KeyAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "KeyRemoved"): EventFragment;
}

export class Identity extends Contract {
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

  interface: IdentityInterface;

  functions: {
    addClaim(
      _topic: BigNumberish,
      _scheme: BigNumberish,
      _issuer: string,
      _signature: BytesLike,
      _data: BytesLike,
      _uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addClaim(uint256,uint256,address,bytes,bytes,string)"(
      _topic: BigNumberish,
      _scheme: BigNumberish,
      _issuer: string,
      _signature: BytesLike,
      _data: BytesLike,
      _uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addKey(
      _key: BytesLike,
      _purpose: BigNumberish,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addKey(bytes32,uint256,uint256)"(
      _key: BytesLike,
      _purpose: BigNumberish,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approve(
      _id: BigNumberish,
      _approve: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "approve(uint256,bool)"(
      _id: BigNumberish,
      _approve: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execute(
      _to: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "execute(address,uint256,bytes)"(
      _to: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getClaim(
      _claimId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string, string, string] & {
        topic: BigNumber;
        scheme: BigNumber;
        issuer: string;
        signature: string;
        data: string;
        uri: string;
      }
    >;

    "getClaim(bytes32)"(
      _claimId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string, string, string] & {
        topic: BigNumber;
        scheme: BigNumber;
        issuer: string;
        signature: string;
        data: string;
        uri: string;
      }
    >;

    getClaimIdsByTopic(
      _topic: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]] & { claimIds: string[] }>;

    "getClaimIdsByTopic(uint256)"(
      _topic: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]] & { claimIds: string[] }>;

    getKey(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber, string] & {
        purposes: BigNumber[];
        keyType: BigNumber;
        key: string;
      }
    >;

    "getKey(bytes32)"(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber, string] & {
        purposes: BigNumber[];
        keyType: BigNumber;
        key: string;
      }
    >;

    getKeyPurposes(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { _purposes: BigNumber[] }>;

    "getKeyPurposes(bytes32)"(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { _purposes: BigNumber[] }>;

    getKeysByPurpose(
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]] & { keys: string[] }>;

    "getKeysByPurpose(uint256)"(
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]] & { keys: string[] }>;

    getRecoveredAddress(
      sig: BytesLike,
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { addr: string }>;

    "getRecoveredAddress(bytes,bytes32)"(
      sig: BytesLike,
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { addr: string }>;

    initialize(
      initialManagementKey: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      initialManagementKey: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isClaimValid(
      _identity: string,
      claimTopic: BigNumberish,
      sig: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { claimValid: boolean }>;

    "isClaimValid(address,uint256,bytes,bytes)"(
      _identity: string,
      claimTopic: BigNumberish,
      sig: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { claimValid: boolean }>;

    keyHasPurpose(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean] & { result: boolean }>;

    "keyHasPurpose(bytes32,uint256)"(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean] & { result: boolean }>;

    removeClaim(
      _claimId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeClaim(bytes32)"(
      _claimId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeKey(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeKey(bytes32,uint256)"(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[string]>;

    "version()"(overrides?: CallOverrides): Promise<[string]>;
  };

  addClaim(
    _topic: BigNumberish,
    _scheme: BigNumberish,
    _issuer: string,
    _signature: BytesLike,
    _data: BytesLike,
    _uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addClaim(uint256,uint256,address,bytes,bytes,string)"(
    _topic: BigNumberish,
    _scheme: BigNumberish,
    _issuer: string,
    _signature: BytesLike,
    _data: BytesLike,
    _uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addKey(
    _key: BytesLike,
    _purpose: BigNumberish,
    _type: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addKey(bytes32,uint256,uint256)"(
    _key: BytesLike,
    _purpose: BigNumberish,
    _type: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approve(
    _id: BigNumberish,
    _approve: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "approve(uint256,bool)"(
    _id: BigNumberish,
    _approve: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execute(
    _to: string,
    _value: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "execute(address,uint256,bytes)"(
    _to: string,
    _value: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getClaim(
    _claimId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, string, string, string] & {
      topic: BigNumber;
      scheme: BigNumber;
      issuer: string;
      signature: string;
      data: string;
      uri: string;
    }
  >;

  "getClaim(bytes32)"(
    _claimId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, string, string, string] & {
      topic: BigNumber;
      scheme: BigNumber;
      issuer: string;
      signature: string;
      data: string;
      uri: string;
    }
  >;

  getClaimIdsByTopic(
    _topic: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "getClaimIdsByTopic(uint256)"(
    _topic: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getKey(
    _key: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], BigNumber, string] & {
      purposes: BigNumber[];
      keyType: BigNumber;
      key: string;
    }
  >;

  "getKey(bytes32)"(
    _key: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], BigNumber, string] & {
      purposes: BigNumber[];
      keyType: BigNumber;
      key: string;
    }
  >;

  getKeyPurposes(
    _key: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getKeyPurposes(bytes32)"(
    _key: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getKeysByPurpose(
    _purpose: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "getKeysByPurpose(uint256)"(
    _purpose: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getRecoveredAddress(
    sig: BytesLike,
    dataHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "getRecoveredAddress(bytes,bytes32)"(
    sig: BytesLike,
    dataHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    initialManagementKey: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    initialManagementKey: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isClaimValid(
    _identity: string,
    claimTopic: BigNumberish,
    sig: BytesLike,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isClaimValid(address,uint256,bytes,bytes)"(
    _identity: string,
    claimTopic: BigNumberish,
    sig: BytesLike,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  keyHasPurpose(
    _key: BytesLike,
    _purpose: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "keyHasPurpose(bytes32,uint256)"(
    _key: BytesLike,
    _purpose: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeClaim(
    _claimId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeClaim(bytes32)"(
    _claimId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeKey(
    _key: BytesLike,
    _purpose: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeKey(bytes32,uint256)"(
    _key: BytesLike,
    _purpose: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<string>;

  "version()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addClaim(
      _topic: BigNumberish,
      _scheme: BigNumberish,
      _issuer: string,
      _signature: BytesLike,
      _data: BytesLike,
      _uri: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "addClaim(uint256,uint256,address,bytes,bytes,string)"(
      _topic: BigNumberish,
      _scheme: BigNumberish,
      _issuer: string,
      _signature: BytesLike,
      _data: BytesLike,
      _uri: string,
      overrides?: CallOverrides
    ): Promise<string>;

    addKey(
      _key: BytesLike,
      _purpose: BigNumberish,
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "addKey(bytes32,uint256,uint256)"(
      _key: BytesLike,
      _purpose: BigNumberish,
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    approve(
      _id: BigNumberish,
      _approve: boolean,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(uint256,bool)"(
      _id: BigNumberish,
      _approve: boolean,
      overrides?: CallOverrides
    ): Promise<boolean>;

    execute(
      _to: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "execute(address,uint256,bytes)"(
      _to: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getClaim(
      _claimId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string, string, string] & {
        topic: BigNumber;
        scheme: BigNumber;
        issuer: string;
        signature: string;
        data: string;
        uri: string;
      }
    >;

    "getClaim(bytes32)"(
      _claimId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string, string, string] & {
        topic: BigNumber;
        scheme: BigNumber;
        issuer: string;
        signature: string;
        data: string;
        uri: string;
      }
    >;

    getClaimIdsByTopic(
      _topic: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "getClaimIdsByTopic(uint256)"(
      _topic: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getKey(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber, string] & {
        purposes: BigNumber[];
        keyType: BigNumber;
        key: string;
      }
    >;

    "getKey(bytes32)"(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber, string] & {
        purposes: BigNumber[];
        keyType: BigNumber;
        key: string;
      }
    >;

    getKeyPurposes(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getKeyPurposes(bytes32)"(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getKeysByPurpose(
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "getKeysByPurpose(uint256)"(
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getRecoveredAddress(
      sig: BytesLike,
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "getRecoveredAddress(bytes,bytes32)"(
      sig: BytesLike,
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      initialManagementKey: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address)"(
      initialManagementKey: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isClaimValid(
      _identity: string,
      claimTopic: BigNumberish,
      sig: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isClaimValid(address,uint256,bytes,bytes)"(
      _identity: string,
      claimTopic: BigNumberish,
      sig: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    keyHasPurpose(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "keyHasPurpose(bytes32,uint256)"(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeClaim(
      _claimId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "removeClaim(bytes32)"(
      _claimId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeKey(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "removeKey(bytes32,uint256)"(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    version(overrides?: CallOverrides): Promise<string>;

    "version()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    Approved(
      executionId: BigNumberish | null,
      approved: null
    ): TypedEventFilter<
      [BigNumber, boolean],
      { executionId: BigNumber; approved: boolean }
    >;

    ClaimAdded(
      claimId: BytesLike | null,
      topic: BigNumberish | null,
      scheme: null,
      issuer: string | null,
      signature: null,
      data: null,
      uri: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string, string, string, string],
      {
        claimId: string;
        topic: BigNumber;
        scheme: BigNumber;
        issuer: string;
        signature: string;
        data: string;
        uri: string;
      }
    >;

    ClaimChanged(
      claimId: BytesLike | null,
      topic: BigNumberish | null,
      scheme: null,
      issuer: string | null,
      signature: null,
      data: null,
      uri: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string, string, string, string],
      {
        claimId: string;
        topic: BigNumber;
        scheme: BigNumber;
        issuer: string;
        signature: string;
        data: string;
        uri: string;
      }
    >;

    ClaimRemoved(
      claimId: BytesLike | null,
      topic: BigNumberish | null,
      scheme: null,
      issuer: string | null,
      signature: null,
      data: null,
      uri: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string, string, string, string],
      {
        claimId: string;
        topic: BigNumber;
        scheme: BigNumber;
        issuer: string;
        signature: string;
        data: string;
        uri: string;
      }
    >;

    Executed(
      executionId: BigNumberish | null,
      to: string | null,
      value: BigNumberish | null,
      data: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, string],
      { executionId: BigNumber; to: string; value: BigNumber; data: string }
    >;

    ExecutionFailed(
      executionId: BigNumberish | null,
      to: string | null,
      value: BigNumberish | null,
      data: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, string],
      { executionId: BigNumber; to: string; value: BigNumber; data: string }
    >;

    ExecutionRequested(
      executionId: BigNumberish | null,
      to: string | null,
      value: BigNumberish | null,
      data: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, string],
      { executionId: BigNumber; to: string; value: BigNumber; data: string }
    >;

    KeyAdded(
      key: BytesLike | null,
      purpose: BigNumberish | null,
      keyType: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { key: string; purpose: BigNumber; keyType: BigNumber }
    >;

    KeyRemoved(
      key: BytesLike | null,
      purpose: BigNumberish | null,
      keyType: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { key: string; purpose: BigNumber; keyType: BigNumber }
    >;
  };

  estimateGas: {
    addClaim(
      _topic: BigNumberish,
      _scheme: BigNumberish,
      _issuer: string,
      _signature: BytesLike,
      _data: BytesLike,
      _uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addClaim(uint256,uint256,address,bytes,bytes,string)"(
      _topic: BigNumberish,
      _scheme: BigNumberish,
      _issuer: string,
      _signature: BytesLike,
      _data: BytesLike,
      _uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addKey(
      _key: BytesLike,
      _purpose: BigNumberish,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addKey(bytes32,uint256,uint256)"(
      _key: BytesLike,
      _purpose: BigNumberish,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approve(
      _id: BigNumberish,
      _approve: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "approve(uint256,bool)"(
      _id: BigNumberish,
      _approve: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execute(
      _to: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "execute(address,uint256,bytes)"(
      _to: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getClaim(
      _claimId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getClaim(bytes32)"(
      _claimId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getClaimIdsByTopic(
      _topic: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getClaimIdsByTopic(uint256)"(
      _topic: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getKey(_key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "getKey(bytes32)"(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getKeyPurposes(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getKeyPurposes(bytes32)"(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getKeysByPurpose(
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getKeysByPurpose(uint256)"(
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRecoveredAddress(
      sig: BytesLike,
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRecoveredAddress(bytes,bytes32)"(
      sig: BytesLike,
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      initialManagementKey: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(address)"(
      initialManagementKey: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isClaimValid(
      _identity: string,
      claimTopic: BigNumberish,
      sig: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isClaimValid(address,uint256,bytes,bytes)"(
      _identity: string,
      claimTopic: BigNumberish,
      sig: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    keyHasPurpose(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "keyHasPurpose(bytes32,uint256)"(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeClaim(
      _claimId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeClaim(bytes32)"(
      _claimId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeKey(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeKey(bytes32,uint256)"(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    "version()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addClaim(
      _topic: BigNumberish,
      _scheme: BigNumberish,
      _issuer: string,
      _signature: BytesLike,
      _data: BytesLike,
      _uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addClaim(uint256,uint256,address,bytes,bytes,string)"(
      _topic: BigNumberish,
      _scheme: BigNumberish,
      _issuer: string,
      _signature: BytesLike,
      _data: BytesLike,
      _uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addKey(
      _key: BytesLike,
      _purpose: BigNumberish,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addKey(bytes32,uint256,uint256)"(
      _key: BytesLike,
      _purpose: BigNumberish,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approve(
      _id: BigNumberish,
      _approve: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "approve(uint256,bool)"(
      _id: BigNumberish,
      _approve: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execute(
      _to: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "execute(address,uint256,bytes)"(
      _to: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getClaim(
      _claimId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getClaim(bytes32)"(
      _claimId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getClaimIdsByTopic(
      _topic: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getClaimIdsByTopic(uint256)"(
      _topic: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getKey(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getKey(bytes32)"(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getKeyPurposes(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getKeyPurposes(bytes32)"(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getKeysByPurpose(
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getKeysByPurpose(uint256)"(
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRecoveredAddress(
      sig: BytesLike,
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRecoveredAddress(bytes,bytes32)"(
      sig: BytesLike,
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      initialManagementKey: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      initialManagementKey: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isClaimValid(
      _identity: string,
      claimTopic: BigNumberish,
      sig: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isClaimValid(address,uint256,bytes,bytes)"(
      _identity: string,
      claimTopic: BigNumberish,
      sig: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    keyHasPurpose(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "keyHasPurpose(bytes32,uint256)"(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeClaim(
      _claimId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeClaim(bytes32)"(
      _claimId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeKey(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeKey(bytes32,uint256)"(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "version()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
