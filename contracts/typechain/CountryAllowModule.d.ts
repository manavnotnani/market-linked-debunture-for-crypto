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

interface CountryAllowModuleInterface extends ethers.utils.Interface {
  functions: {
    "addAllowedCountry(uint16)": FunctionFragment;
    "batchAllowCountries(uint16[])": FunctionFragment;
    "batchDisallowCountries(uint16[])": FunctionFragment;
    "bindCompliance(address)": FunctionFragment;
    "canComplianceBind(address)": FunctionFragment;
    "isComplianceBound(address)": FunctionFragment;
    "isCountryAllowed(address,uint16)": FunctionFragment;
    "isPlugAndPlay()": FunctionFragment;
    "moduleBurnAction(address,uint256)": FunctionFragment;
    "moduleCheck(address,address,uint256,address)": FunctionFragment;
    "moduleMintAction(address,uint256)": FunctionFragment;
    "moduleTransferAction(address,address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "removeAllowedCountry(uint16)": FunctionFragment;
    "unbindCompliance(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addAllowedCountry",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchAllowCountries",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchDisallowCountries",
    values: [BigNumberish[]]
  ): string;
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
    functionFragment: "isCountryAllowed",
    values: [string, BigNumberish]
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
    functionFragment: "removeAllowedCountry",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unbindCompliance",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAllowedCountry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchAllowCountries",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchDisallowCountries",
    data: BytesLike
  ): Result;
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
    functionFragment: "isCountryAllowed",
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
    functionFragment: "removeAllowedCountry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unbindCompliance",
    data: BytesLike
  ): Result;

  events: {
    "ComplianceBound(address)": EventFragment;
    "ComplianceUnbound(address)": EventFragment;
    "CountryAllowed(address,uint16)": EventFragment;
    "CountryUnallowed(address,uint16)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ComplianceBound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ComplianceUnbound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CountryAllowed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CountryUnallowed"): EventFragment;
}

export class CountryAllowModule extends Contract {
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

  interface: CountryAllowModuleInterface;

  functions: {
    addAllowedCountry(
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addAllowedCountry(uint16)"(
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchAllowCountries(
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "batchAllowCountries(uint16[])"(
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchDisallowCountries(
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "batchDisallowCountries(uint16[])"(
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bindCompliance(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "bindCompliance(address)"(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    canComplianceBind(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "canComplianceBind(address)"(
      arg0: string,
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

    isCountryAllowed(
      _compliance: string,
      _country: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isCountryAllowed(address,uint16)"(
      _compliance: string,
      _country: BigNumberish,
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
      arg0: string,
      _to: string,
      arg2: BigNumberish,
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "moduleCheck(address,address,uint256,address)"(
      arg0: string,
      _to: string,
      arg2: BigNumberish,
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

    removeAllowedCountry(
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeAllowedCountry(uint16)"(
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unbindCompliance(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unbindCompliance(address)"(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addAllowedCountry(
    _country: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addAllowedCountry(uint16)"(
    _country: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchAllowCountries(
    _countries: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "batchAllowCountries(uint16[])"(
    _countries: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchDisallowCountries(
    _countries: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "batchDisallowCountries(uint16[])"(
    _countries: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bindCompliance(
    _compliance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "bindCompliance(address)"(
    _compliance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  canComplianceBind(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "canComplianceBind(address)"(
    arg0: string,
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

  isCountryAllowed(
    _compliance: string,
    _country: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isCountryAllowed(address,uint16)"(
    _compliance: string,
    _country: BigNumberish,
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
    arg0: string,
    _to: string,
    arg2: BigNumberish,
    _compliance: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "moduleCheck(address,address,uint256,address)"(
    arg0: string,
    _to: string,
    arg2: BigNumberish,
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

  removeAllowedCountry(
    _country: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeAllowedCountry(uint16)"(
    _country: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unbindCompliance(
    _compliance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unbindCompliance(address)"(
    _compliance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAllowedCountry(
      _country: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addAllowedCountry(uint16)"(
      _country: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    batchAllowCountries(
      _countries: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "batchAllowCountries(uint16[])"(
      _countries: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    batchDisallowCountries(
      _countries: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "batchDisallowCountries(uint16[])"(
      _countries: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    bindCompliance(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "bindCompliance(address)"(
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    canComplianceBind(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "canComplianceBind(address)"(
      arg0: string,
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

    isCountryAllowed(
      _compliance: string,
      _country: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isCountryAllowed(address,uint16)"(
      _compliance: string,
      _country: BigNumberish,
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
      arg0: string,
      _to: string,
      arg2: BigNumberish,
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "moduleCheck(address,address,uint256,address)"(
      arg0: string,
      _to: string,
      arg2: BigNumberish,
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

    removeAllowedCountry(
      _country: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeAllowedCountry(uint16)"(
      _country: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

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

    CountryAllowed(
      _compliance: null,
      _country: null
    ): TypedEventFilter<
      [string, number],
      { _compliance: string; _country: number }
    >;

    CountryUnallowed(
      _compliance: null,
      _country: null
    ): TypedEventFilter<
      [string, number],
      { _compliance: string; _country: number }
    >;
  };

  estimateGas: {
    addAllowedCountry(
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addAllowedCountry(uint16)"(
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchAllowCountries(
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "batchAllowCountries(uint16[])"(
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchDisallowCountries(
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "batchDisallowCountries(uint16[])"(
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bindCompliance(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "bindCompliance(address)"(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    canComplianceBind(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canComplianceBind(address)"(
      arg0: string,
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

    isCountryAllowed(
      _compliance: string,
      _country: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isCountryAllowed(address,uint16)"(
      _compliance: string,
      _country: BigNumberish,
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
      arg0: string,
      _to: string,
      arg2: BigNumberish,
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "moduleCheck(address,address,uint256,address)"(
      arg0: string,
      _to: string,
      arg2: BigNumberish,
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

    removeAllowedCountry(
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeAllowedCountry(uint16)"(
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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
    addAllowedCountry(
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addAllowedCountry(uint16)"(
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchAllowCountries(
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "batchAllowCountries(uint16[])"(
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchDisallowCountries(
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "batchDisallowCountries(uint16[])"(
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bindCompliance(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "bindCompliance(address)"(
      _compliance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    canComplianceBind(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canComplianceBind(address)"(
      arg0: string,
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

    isCountryAllowed(
      _compliance: string,
      _country: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isCountryAllowed(address,uint16)"(
      _compliance: string,
      _country: BigNumberish,
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
      arg0: string,
      _to: string,
      arg2: BigNumberish,
      _compliance: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "moduleCheck(address,address,uint256,address)"(
      arg0: string,
      _to: string,
      arg2: BigNumberish,
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

    removeAllowedCountry(
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeAllowedCountry(uint16)"(
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

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