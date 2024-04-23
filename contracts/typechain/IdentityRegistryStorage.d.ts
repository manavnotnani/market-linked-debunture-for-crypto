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

interface IdentityRegistryStorageInterface extends ethers.utils.Interface {
  functions: {
    "addAgent(address)": FunctionFragment;
    "addIdentityToStorage(address,address,uint16)": FunctionFragment;
    "bindIdentityRegistry(address)": FunctionFragment;
    "init()": FunctionFragment;
    "isAgent(address)": FunctionFragment;
    "linkedIdentityRegistries()": FunctionFragment;
    "modifyStoredIdentity(address,address)": FunctionFragment;
    "modifyStoredInvestorCountry(address,uint16)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeAgent(address)": FunctionFragment;
    "removeIdentityFromStorage(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "storedIdentity(address)": FunctionFragment;
    "storedInvestorCountry(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unbindIdentityRegistry(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addAgent", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addIdentityToStorage",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bindIdentityRegistry",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "init", values?: undefined): string;
  encodeFunctionData(functionFragment: "isAgent", values: [string]): string;
  encodeFunctionData(
    functionFragment: "linkedIdentityRegistries",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "modifyStoredIdentity",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "modifyStoredInvestorCountry",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "removeAgent", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeIdentityFromStorage",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "storedIdentity",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "storedInvestorCountry",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unbindIdentityRegistry",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addAgent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addIdentityToStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bindIdentityRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAgent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "linkedIdentityRegistries",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyStoredIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyStoredInvestorCountry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeIdentityFromStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storedIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storedInvestorCountry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unbindIdentityRegistry",
    data: BytesLike
  ): Result;

  events: {
    "AgentAdded(address)": EventFragment;
    "AgentRemoved(address)": EventFragment;
    "CountryModified(address,uint16)": EventFragment;
    "IdentityModified(address,address)": EventFragment;
    "IdentityRegistryBound(address)": EventFragment;
    "IdentityRegistryUnbound(address)": EventFragment;
    "IdentityStored(address,address)": EventFragment;
    "IdentityUnstored(address,address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AgentAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AgentRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CountryModified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IdentityModified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IdentityRegistryBound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IdentityRegistryUnbound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IdentityStored"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IdentityUnstored"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class IdentityRegistryStorage extends Contract {
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

  interface: IdentityRegistryStorageInterface;

  functions: {
    addAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addIdentityToStorage(
      _userAddress: string,
      _identity: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addIdentityToStorage(address,address,uint16)"(
      _userAddress: string,
      _identity: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bindIdentityRegistry(
      _identityRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "bindIdentityRegistry(address)"(
      _identityRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "init()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAgent(_agent: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    linkedIdentityRegistries(overrides?: CallOverrides): Promise<[string[]]>;

    "linkedIdentityRegistries()"(
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    modifyStoredIdentity(
      _userAddress: string,
      _identity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "modifyStoredIdentity(address,address)"(
      _userAddress: string,
      _identity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    modifyStoredInvestorCountry(
      _userAddress: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "modifyStoredInvestorCountry(address,uint16)"(
      _userAddress: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    removeAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeIdentityFromStorage(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeIdentityFromStorage(address)"(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    storedIdentity(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "storedIdentity(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    storedInvestorCountry(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "storedInvestorCountry(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unbindIdentityRegistry(
      _identityRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unbindIdentityRegistry(address)"(
      _identityRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addAgent(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addAgent(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addIdentityToStorage(
    _userAddress: string,
    _identity: string,
    _country: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addIdentityToStorage(address,address,uint16)"(
    _userAddress: string,
    _identity: string,
    _country: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bindIdentityRegistry(
    _identityRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "bindIdentityRegistry(address)"(
    _identityRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  init(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "init()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAgent(_agent: string, overrides?: CallOverrides): Promise<boolean>;

  "isAgent(address)"(
    _agent: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  linkedIdentityRegistries(overrides?: CallOverrides): Promise<string[]>;

  "linkedIdentityRegistries()"(overrides?: CallOverrides): Promise<string[]>;

  modifyStoredIdentity(
    _userAddress: string,
    _identity: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "modifyStoredIdentity(address,address)"(
    _userAddress: string,
    _identity: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  modifyStoredInvestorCountry(
    _userAddress: string,
    _country: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "modifyStoredInvestorCountry(address,uint16)"(
    _userAddress: string,
    _country: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  removeAgent(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeAgent(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeIdentityFromStorage(
    _userAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeIdentityFromStorage(address)"(
    _userAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  storedIdentity(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "storedIdentity(address)"(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  storedInvestorCountry(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<number>;

  "storedInvestorCountry(address)"(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<number>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unbindIdentityRegistry(
    _identityRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unbindIdentityRegistry(address)"(
    _identityRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAgent(_agent: string, overrides?: CallOverrides): Promise<void>;

    "addAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addIdentityToStorage(
      _userAddress: string,
      _identity: string,
      _country: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addIdentityToStorage(address,address,uint16)"(
      _userAddress: string,
      _identity: string,
      _country: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    bindIdentityRegistry(
      _identityRegistry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "bindIdentityRegistry(address)"(
      _identityRegistry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    init(overrides?: CallOverrides): Promise<void>;

    "init()"(overrides?: CallOverrides): Promise<void>;

    isAgent(_agent: string, overrides?: CallOverrides): Promise<boolean>;

    "isAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    linkedIdentityRegistries(overrides?: CallOverrides): Promise<string[]>;

    "linkedIdentityRegistries()"(overrides?: CallOverrides): Promise<string[]>;

    modifyStoredIdentity(
      _userAddress: string,
      _identity: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "modifyStoredIdentity(address,address)"(
      _userAddress: string,
      _identity: string,
      overrides?: CallOverrides
    ): Promise<void>;

    modifyStoredInvestorCountry(
      _userAddress: string,
      _country: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "modifyStoredInvestorCountry(address,uint16)"(
      _userAddress: string,
      _country: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    removeAgent(_agent: string, overrides?: CallOverrides): Promise<void>;

    "removeAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeIdentityFromStorage(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeIdentityFromStorage(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    storedIdentity(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "storedIdentity(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    storedInvestorCountry(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<number>;

    "storedInvestorCountry(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<number>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unbindIdentityRegistry(
      _identityRegistry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "unbindIdentityRegistry(address)"(
      _identityRegistry: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AgentAdded(
      _agent: string | null
    ): TypedEventFilter<[string], { _agent: string }>;

    AgentRemoved(
      _agent: string | null
    ): TypedEventFilter<[string], { _agent: string }>;

    CountryModified(
      investorAddress: string | null,
      country: BigNumberish | null
    ): TypedEventFilter<
      [string, number],
      { investorAddress: string; country: number }
    >;

    IdentityModified(
      oldIdentity: string | null,
      newIdentity: string | null
    ): TypedEventFilter<
      [string, string],
      { oldIdentity: string; newIdentity: string }
    >;

    IdentityRegistryBound(
      identityRegistry: string | null
    ): TypedEventFilter<[string], { identityRegistry: string }>;

    IdentityRegistryUnbound(
      identityRegistry: string | null
    ): TypedEventFilter<[string], { identityRegistry: string }>;

    IdentityStored(
      investorAddress: string | null,
      identity: string | null
    ): TypedEventFilter<
      [string, string],
      { investorAddress: string; identity: string }
    >;

    IdentityUnstored(
      investorAddress: string | null,
      identity: string | null
    ): TypedEventFilter<
      [string, string],
      { investorAddress: string; identity: string }
    >;

    Initialized(version: null): TypedEventFilter<[number], { version: number }>;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    addAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addIdentityToStorage(
      _userAddress: string,
      _identity: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addIdentityToStorage(address,address,uint16)"(
      _userAddress: string,
      _identity: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bindIdentityRegistry(
      _identityRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "bindIdentityRegistry(address)"(
      _identityRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "init()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAgent(_agent: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    linkedIdentityRegistries(overrides?: CallOverrides): Promise<BigNumber>;

    "linkedIdentityRegistries()"(overrides?: CallOverrides): Promise<BigNumber>;

    modifyStoredIdentity(
      _userAddress: string,
      _identity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "modifyStoredIdentity(address,address)"(
      _userAddress: string,
      _identity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    modifyStoredInvestorCountry(
      _userAddress: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "modifyStoredInvestorCountry(address,uint16)"(
      _userAddress: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeIdentityFromStorage(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeIdentityFromStorage(address)"(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    storedIdentity(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "storedIdentity(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    storedInvestorCountry(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "storedInvestorCountry(address)"(
      _userAddress: string,
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

    unbindIdentityRegistry(
      _identityRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "unbindIdentityRegistry(address)"(
      _identityRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addIdentityToStorage(
      _userAddress: string,
      _identity: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addIdentityToStorage(address,address,uint16)"(
      _userAddress: string,
      _identity: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bindIdentityRegistry(
      _identityRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "bindIdentityRegistry(address)"(
      _identityRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "init()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAgent(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    linkedIdentityRegistries(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "linkedIdentityRegistries()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    modifyStoredIdentity(
      _userAddress: string,
      _identity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "modifyStoredIdentity(address,address)"(
      _userAddress: string,
      _identity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    modifyStoredInvestorCountry(
      _userAddress: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "modifyStoredInvestorCountry(address,uint16)"(
      _userAddress: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeIdentityFromStorage(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeIdentityFromStorage(address)"(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    storedIdentity(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "storedIdentity(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    storedInvestorCountry(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "storedInvestorCountry(address)"(
      _userAddress: string,
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

    unbindIdentityRegistry(
      _identityRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "unbindIdentityRegistry(address)"(
      _identityRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
