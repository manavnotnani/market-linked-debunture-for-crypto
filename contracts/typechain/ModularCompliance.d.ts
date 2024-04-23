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

interface ModularComplianceInterface extends ethers.utils.Interface {
  functions: {
    "addModule(address)": FunctionFragment;
    "bindToken(address)": FunctionFragment;
    "callModuleFunction(bytes,address)": FunctionFragment;
    "canTransfer(address,address,uint256)": FunctionFragment;
    "created(address,uint256)": FunctionFragment;
    "destroyed(address,uint256)": FunctionFragment;
    "getModules()": FunctionFragment;
    "getTokenBound()": FunctionFragment;
    "init()": FunctionFragment;
    "isModuleBound(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeModule(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferred(address,address,uint256)": FunctionFragment;
    "unbindToken(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addModule", values: [string]): string;
  encodeFunctionData(functionFragment: "bindToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "callModuleFunction",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "canTransfer",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "created",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "destroyed",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getModules",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenBound",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "init", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isModuleBound",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeModule",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferred",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unbindToken", values: [string]): string;

  decodeFunctionResult(functionFragment: "addModule", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bindToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "callModuleFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "created", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "destroyed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getModules", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTokenBound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isModuleBound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferred",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unbindToken",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "ModuleAdded(address)": EventFragment;
    "ModuleInteraction(address,bytes4)": EventFragment;
    "ModuleRemoved(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenBound(address)": EventFragment;
    "TokenUnbound(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ModuleAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ModuleInteraction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ModuleRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenBound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenUnbound"): EventFragment;
}

export class ModularCompliance extends Contract {
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

  interface: ModularComplianceInterface;

  functions: {
    addModule(
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addModule(address)"(
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bindToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "bindToken(address)"(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    callModuleFunction(
      callData: BytesLike,
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "callModuleFunction(bytes,address)"(
      callData: BytesLike,
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    canTransfer(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "canTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    created(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "created(address,uint256)"(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    destroyed(
      _from: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "destroyed(address,uint256)"(
      _from: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getModules(overrides?: CallOverrides): Promise<[string[]]>;

    "getModules()"(overrides?: CallOverrides): Promise<[string[]]>;

    getTokenBound(overrides?: CallOverrides): Promise<[string]>;

    "getTokenBound()"(overrides?: CallOverrides): Promise<[string]>;

    init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "init()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isModuleBound(
      _module: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isModuleBound(address)"(
      _module: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    removeModule(
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeModule(address)"(
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferred(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferred(address,address,uint256)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unbindToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unbindToken(address)"(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addModule(
    _module: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addModule(address)"(
    _module: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bindToken(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "bindToken(address)"(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callModuleFunction(
    callData: BytesLike,
    _module: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "callModuleFunction(bytes,address)"(
    callData: BytesLike,
    _module: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  canTransfer(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "canTransfer(address,address,uint256)"(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  created(
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "created(address,uint256)"(
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  destroyed(
    _from: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "destroyed(address,uint256)"(
    _from: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getModules(overrides?: CallOverrides): Promise<string[]>;

  "getModules()"(overrides?: CallOverrides): Promise<string[]>;

  getTokenBound(overrides?: CallOverrides): Promise<string>;

  "getTokenBound()"(overrides?: CallOverrides): Promise<string>;

  init(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "init()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isModuleBound(_module: string, overrides?: CallOverrides): Promise<boolean>;

  "isModuleBound(address)"(
    _module: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  removeModule(
    _module: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeModule(address)"(
    _module: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferred(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferred(address,address,uint256)"(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unbindToken(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unbindToken(address)"(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addModule(_module: string, overrides?: CallOverrides): Promise<void>;

    "addModule(address)"(
      _module: string,
      overrides?: CallOverrides
    ): Promise<void>;

    bindToken(_token: string, overrides?: CallOverrides): Promise<void>;

    "bindToken(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    callModuleFunction(
      callData: BytesLike,
      _module: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "callModuleFunction(bytes,address)"(
      callData: BytesLike,
      _module: string,
      overrides?: CallOverrides
    ): Promise<void>;

    canTransfer(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "canTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    created(
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "created(address,uint256)"(
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    destroyed(
      _from: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "destroyed(address,uint256)"(
      _from: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getModules(overrides?: CallOverrides): Promise<string[]>;

    "getModules()"(overrides?: CallOverrides): Promise<string[]>;

    getTokenBound(overrides?: CallOverrides): Promise<string>;

    "getTokenBound()"(overrides?: CallOverrides): Promise<string>;

    init(overrides?: CallOverrides): Promise<void>;

    "init()"(overrides?: CallOverrides): Promise<void>;

    isModuleBound(_module: string, overrides?: CallOverrides): Promise<boolean>;

    "isModuleBound(address)"(
      _module: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    removeModule(_module: string, overrides?: CallOverrides): Promise<void>;

    "removeModule(address)"(
      _module: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferred(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferred(address,address,uint256)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unbindToken(_token: string, overrides?: CallOverrides): Promise<void>;

    "unbindToken(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Initialized(version: null): TypedEventFilter<[number], { version: number }>;

    ModuleAdded(
      _module: string | null
    ): TypedEventFilter<[string], { _module: string }>;

    ModuleInteraction(
      target: string | null,
      selector: null
    ): TypedEventFilter<[string, string], { target: string; selector: string }>;

    ModuleRemoved(
      _module: string | null
    ): TypedEventFilter<[string], { _module: string }>;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    TokenBound(_token: null): TypedEventFilter<[string], { _token: string }>;

    TokenUnbound(_token: null): TypedEventFilter<[string], { _token: string }>;
  };

  estimateGas: {
    addModule(
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addModule(address)"(
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bindToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "bindToken(address)"(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    callModuleFunction(
      callData: BytesLike,
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "callModuleFunction(bytes,address)"(
      callData: BytesLike,
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    canTransfer(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    created(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "created(address,uint256)"(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    destroyed(
      _from: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "destroyed(address,uint256)"(
      _from: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getModules(overrides?: CallOverrides): Promise<BigNumber>;

    "getModules()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenBound(overrides?: CallOverrides): Promise<BigNumber>;

    "getTokenBound()"(overrides?: CallOverrides): Promise<BigNumber>;

    init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "init()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isModuleBound(
      _module: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isModuleBound(address)"(
      _module: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeModule(
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeModule(address)"(
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferred(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferred(address,address,uint256)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unbindToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "unbindToken(address)"(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addModule(
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addModule(address)"(
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bindToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "bindToken(address)"(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    callModuleFunction(
      callData: BytesLike,
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "callModuleFunction(bytes,address)"(
      callData: BytesLike,
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    canTransfer(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    created(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "created(address,uint256)"(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    destroyed(
      _from: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "destroyed(address,uint256)"(
      _from: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getModules(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getModules()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenBound(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTokenBound()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "init()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isModuleBound(
      _module: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isModuleBound(address)"(
      _module: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeModule(
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeModule(address)"(
      _module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferred(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferred(address,address,uint256)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unbindToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "unbindToken(address)"(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
