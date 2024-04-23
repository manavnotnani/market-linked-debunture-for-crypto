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

interface IIdentityRegistryStorageLegacyInterface
  extends ethers.utils.Interface {
  functions: {
    "addIdentityToStorage(address,address,uint16)": FunctionFragment;
    "bindIdentityRegistry(address)": FunctionFragment;
    "linkedIdentityRegistries()": FunctionFragment;
    "modifyStoredIdentity(address,address)": FunctionFragment;
    "modifyStoredInvestorCountry(address,uint16)": FunctionFragment;
    "removeIdentityFromStorage(address)": FunctionFragment;
    "storedIdentity(address)": FunctionFragment;
    "storedInvestorCountry(address)": FunctionFragment;
    "transferOwnershipOnIdentityRegistryStorage(address)": FunctionFragment;
    "unbindIdentityRegistry(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addIdentityToStorage",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bindIdentityRegistry",
    values: [string]
  ): string;
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
  encodeFunctionData(
    functionFragment: "removeIdentityFromStorage",
    values: [string]
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
    functionFragment: "transferOwnershipOnIdentityRegistryStorage",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unbindIdentityRegistry",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addIdentityToStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bindIdentityRegistry",
    data: BytesLike
  ): Result;
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
  decodeFunctionResult(
    functionFragment: "removeIdentityFromStorage",
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
    functionFragment: "transferOwnershipOnIdentityRegistryStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unbindIdentityRegistry",
    data: BytesLike
  ): Result;

  events: {
    "CountryModified(address,uint16)": EventFragment;
    "IdentityModified(address,address)": EventFragment;
    "IdentityRegistryBound(address)": EventFragment;
    "IdentityRegistryUnbound(address)": EventFragment;
    "IdentityStored(address,address)": EventFragment;
    "IdentityUnstored(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CountryModified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IdentityModified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IdentityRegistryBound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IdentityRegistryUnbound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IdentityStored"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IdentityUnstored"): EventFragment;
}

export class IIdentityRegistryStorageLegacy extends Contract {
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

  interface: IIdentityRegistryStorageLegacyInterface;

  functions: {
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

    removeIdentityFromStorage(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeIdentityFromStorage(address)"(
      _userAddress: string,
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

    transferOwnershipOnIdentityRegistryStorage(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnershipOnIdentityRegistryStorage(address)"(
      _newOwner: string,
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

  removeIdentityFromStorage(
    _userAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeIdentityFromStorage(address)"(
    _userAddress: string,
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

  transferOwnershipOnIdentityRegistryStorage(
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnershipOnIdentityRegistryStorage(address)"(
    _newOwner: string,
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

    removeIdentityFromStorage(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeIdentityFromStorage(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

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

    transferOwnershipOnIdentityRegistryStorage(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnershipOnIdentityRegistryStorage(address)"(
      _newOwner: string,
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
  };

  estimateGas: {
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

    removeIdentityFromStorage(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeIdentityFromStorage(address)"(
      _userAddress: string,
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

    transferOwnershipOnIdentityRegistryStorage(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnershipOnIdentityRegistryStorage(address)"(
      _newOwner: string,
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

    removeIdentityFromStorage(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeIdentityFromStorage(address)"(
      _userAddress: string,
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

    transferOwnershipOnIdentityRegistryStorage(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnershipOnIdentityRegistryStorage(address)"(
      _newOwner: string,
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