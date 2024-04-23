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

interface IModuleInterface extends ethers.utils.Interface {
  functions: {
    "bindCompliance(address)": FunctionFragment;
    "canComplianceBind(address)": FunctionFragment;
    "isComplianceBound(address)": FunctionFragment;
    "isPlugAndPlay()": FunctionFragment;
    "moduleBurnAction(address,uint256)": FunctionFragment;
    "moduleCheck(address,address,uint256,address)": FunctionFragment;
    "moduleMintAction(address,uint256)": FunctionFragment;
    "moduleTransferAction(address,address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "unbindCompliance(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "bindCompliance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "canComplianceBind",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isComplianceBound",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isPlugAndPlay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "moduleBurnAction",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "moduleCheck",
    values: [string, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "moduleMintAction",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "moduleTransferAction",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unbindCompliance",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "bindCompliance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canComplianceBind",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isComplianceBound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPlugAndPlay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moduleBurnAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moduleCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moduleMintAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moduleTransferAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unbindCompliance",
    data: BytesLike
  ): Result;

  events: {
    "ComplianceBound(address)": EventFragment;
    "ComplianceUnbound(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ComplianceBound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ComplianceUnbound"): EventFragment;
}

export class IModule extends Contract {
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

  interface: IModuleInterface;

  functions: {
    bindCompliance(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "bindCompliance(address)"(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    canComplianceBind(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "canComplianceBind(address)"(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isComplianceBound(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isComplianceBound(address)"(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isPlugAndPlay(overrides?: CallOverrides): Promise<[boolean]>;

    "isPlugAndPlay()"(overrides?: CallOverrides): Promise<[boolean]>;

    moduleBurnAction(
      _from: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "moduleBurnAction(address,uint256)"(
      _from: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    moduleCheck(
      _from: string,
      _to: string,
      _value: BigNumberish,
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "moduleCheck(address,address,uint256,address)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    moduleMintAction(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "moduleMintAction(address,uint256)"(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    moduleTransferAction(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "moduleTransferAction(address,address,uint256)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string] & { _name: string }>;

    "name()"(overrides?: CallOverrides): Promise<[string] & { _name: string }>;

    unbindCompliance(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unbindCompliance(address)"(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bindCompliance(
    _compliance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "bindCompliance(address)"(
    _compliance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  canComplianceBind(
    _compliance: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "canComplianceBind(address)"(
    _compliance: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isComplianceBound(
    _compliance: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isComplianceBound(address)"(
    _compliance: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isPlugAndPlay(overrides?: CallOverrides): Promise<boolean>;

  "isPlugAndPlay()"(overrides?: CallOverrides): Promise<boolean>;

  moduleBurnAction(
    _from: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "moduleBurnAction(address,uint256)"(
    _from: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  moduleCheck(
    _from: string,
    _to: string,
    _value: BigNumberish,
    _compliance: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "moduleCheck(address,address,uint256,address)"(
    _from: string,
    _to: string,
    _value: BigNumberish,
    _compliance: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  moduleMintAction(
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "moduleMintAction(address,uint256)"(
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  moduleTransferAction(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "moduleTransferAction(address,address,uint256)"(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  unbindCompliance(
    _compliance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unbindCompliance(address)"(
    _compliance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bindCompliance(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "bindCompliance(address)"(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    canComplianceBind(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "canComplianceBind(address)"(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isComplianceBound(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isComplianceBound(address)"(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isPlugAndPlay(overrides?: CallOverrides): Promise<boolean>;

    "isPlugAndPlay()"(overrides?: CallOverrides): Promise<boolean>;

    moduleBurnAction(
      _from: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "moduleBurnAction(address,uint256)"(
      _from: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    moduleCheck(
      _from: string,
      _to: string,
      _value: BigNumberish,
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "moduleCheck(address,address,uint256,address)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    moduleMintAction(
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "moduleMintAction(address,uint256)"(
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    moduleTransferAction(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "moduleTransferAction(address,address,uint256)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    unbindCompliance(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "unbindCompliance(address)"(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ComplianceBound(
      _compliance: string | null
    ): TypedEventFilter<[string], { _compliance: string }>;

    ComplianceUnbound(
      _compliance: string | null
    ): TypedEventFilter<[string], { _compliance: string }>;
  };

  estimateGas: {
    bindCompliance(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "bindCompliance(address)"(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    canComplianceBind(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canComplianceBind(address)"(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isComplianceBound(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isComplianceBound(address)"(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPlugAndPlay(overrides?: CallOverrides): Promise<BigNumber>;

    "isPlugAndPlay()"(overrides?: CallOverrides): Promise<BigNumber>;

    moduleBurnAction(
      _from: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "moduleBurnAction(address,uint256)"(
      _from: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    moduleCheck(
      _from: string,
      _to: string,
      _value: BigNumberish,
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "moduleCheck(address,address,uint256,address)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    moduleMintAction(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "moduleMintAction(address,uint256)"(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    moduleTransferAction(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "moduleTransferAction(address,address,uint256)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    unbindCompliance(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "unbindCompliance(address)"(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bindCompliance(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "bindCompliance(address)"(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    canComplianceBind(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canComplianceBind(address)"(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isComplianceBound(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isComplianceBound(address)"(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPlugAndPlay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isPlugAndPlay()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    moduleBurnAction(
      _from: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "moduleBurnAction(address,uint256)"(
      _from: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    moduleCheck(
      _from: string,
      _to: string,
      _value: BigNumberish,
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "moduleCheck(address,address,uint256,address)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    moduleMintAction(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "moduleMintAction(address,uint256)"(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    moduleTransferAction(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "moduleTransferAction(address,address,uint256)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unbindCompliance(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "unbindCompliance(address)"(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}