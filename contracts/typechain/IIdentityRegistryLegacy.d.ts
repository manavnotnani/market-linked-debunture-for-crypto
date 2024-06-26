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

interface IIdentityRegistryLegacyInterface extends ethers.utils.Interface {
  functions: {
    "addAgentOnIdentityRegistryContract(address)": FunctionFragment;
    "batchRegisterIdentity(address[],address[],uint16[])": FunctionFragment;
    "contains(address)": FunctionFragment;
    "deleteIdentity(address)": FunctionFragment;
    "identity(address)": FunctionFragment;
    "identityStorage()": FunctionFragment;
    "investorCountry(address)": FunctionFragment;
    "isVerified(address)": FunctionFragment;
    "issuersRegistry()": FunctionFragment;
    "registerIdentity(address,address,uint16)": FunctionFragment;
    "removeAgentOnIdentityRegistryContract(address)": FunctionFragment;
    "setClaimTopicsRegistry(address)": FunctionFragment;
    "setIdentityRegistryStorage(address)": FunctionFragment;
    "setTrustedIssuersRegistry(address)": FunctionFragment;
    "topicsRegistry()": FunctionFragment;
    "transferOwnershipOnIdentityRegistryContract(address)": FunctionFragment;
    "updateCountry(address,uint16)": FunctionFragment;
    "updateIdentity(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addAgentOnIdentityRegistryContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "batchRegisterIdentity",
    values: [string[], string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "contains", values: [string]): string;
  encodeFunctionData(
    functionFragment: "deleteIdentity",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "identity", values: [string]): string;
  encodeFunctionData(
    functionFragment: "identityStorage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "investorCountry",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isVerified", values: [string]): string;
  encodeFunctionData(
    functionFragment: "issuersRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerIdentity",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAgentOnIdentityRegistryContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimTopicsRegistry",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setIdentityRegistryStorage",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTrustedIssuersRegistry",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "topicsRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnershipOnIdentityRegistryContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCountry",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateIdentity",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAgentOnIdentityRegistryContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchRegisterIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deleteIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "identity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "identityStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "investorCountry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isVerified", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "issuersRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAgentOnIdentityRegistryContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setClaimTopicsRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIdentityRegistryStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedIssuersRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "topicsRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnershipOnIdentityRegistryContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCountry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateIdentity",
    data: BytesLike
  ): Result;

  events: {
    "ClaimTopicsRegistrySet(address)": EventFragment;
    "CountryUpdated(address,uint16)": EventFragment;
    "IdentityRegistered(address,address)": EventFragment;
    "IdentityRemoved(address,address)": EventFragment;
    "IdentityStorageSet(address)": EventFragment;
    "IdentityUpdated(address,address)": EventFragment;
    "TrustedIssuersRegistrySet(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimTopicsRegistrySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CountryUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IdentityRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IdentityRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IdentityStorageSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IdentityUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TrustedIssuersRegistrySet"): EventFragment;
}

export class IIdentityRegistryLegacy extends Contract {
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

  interface: IIdentityRegistryLegacyInterface;

  functions: {
    addAgentOnIdentityRegistryContract(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addAgentOnIdentityRegistryContract(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchRegisterIdentity(
      _userAddresses: string[],
      _identities: string[],
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "batchRegisterIdentity(address[],address[],uint16[])"(
      _userAddresses: string[],
      _identities: string[],
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    contains(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "contains(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    deleteIdentity(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "deleteIdentity(address)"(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    identity(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "identity(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    identityStorage(overrides?: CallOverrides): Promise<[string]>;

    "identityStorage()"(overrides?: CallOverrides): Promise<[string]>;

    investorCountry(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "investorCountry(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    isVerified(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isVerified(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    issuersRegistry(overrides?: CallOverrides): Promise<[string]>;

    "issuersRegistry()"(overrides?: CallOverrides): Promise<[string]>;

    registerIdentity(
      _userAddress: string,
      _identity: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "registerIdentity(address,address,uint16)"(
      _userAddress: string,
      _identity: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeAgentOnIdentityRegistryContract(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeAgentOnIdentityRegistryContract(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setClaimTopicsRegistry(
      _claimTopicsRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setClaimTopicsRegistry(address)"(
      _claimTopicsRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setIdentityRegistryStorage(
      _identityRegistryStorage: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setIdentityRegistryStorage(address)"(
      _identityRegistryStorage: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTrustedIssuersRegistry(
      _trustedIssuersRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setTrustedIssuersRegistry(address)"(
      _trustedIssuersRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    topicsRegistry(overrides?: CallOverrides): Promise<[string]>;

    "topicsRegistry()"(overrides?: CallOverrides): Promise<[string]>;

    transferOwnershipOnIdentityRegistryContract(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnershipOnIdentityRegistryContract(address)"(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateCountry(
      _userAddress: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateCountry(address,uint16)"(
      _userAddress: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateIdentity(
      _userAddress: string,
      _identity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateIdentity(address,address)"(
      _userAddress: string,
      _identity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addAgentOnIdentityRegistryContract(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addAgentOnIdentityRegistryContract(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchRegisterIdentity(
    _userAddresses: string[],
    _identities: string[],
    _countries: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "batchRegisterIdentity(address[],address[],uint16[])"(
    _userAddresses: string[],
    _identities: string[],
    _countries: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  contains(_userAddress: string, overrides?: CallOverrides): Promise<boolean>;

  "contains(address)"(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  deleteIdentity(
    _userAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "deleteIdentity(address)"(
    _userAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  identity(_userAddress: string, overrides?: CallOverrides): Promise<string>;

  "identity(address)"(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  identityStorage(overrides?: CallOverrides): Promise<string>;

  "identityStorage()"(overrides?: CallOverrides): Promise<string>;

  investorCountry(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<number>;

  "investorCountry(address)"(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<number>;

  isVerified(_userAddress: string, overrides?: CallOverrides): Promise<boolean>;

  "isVerified(address)"(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  issuersRegistry(overrides?: CallOverrides): Promise<string>;

  "issuersRegistry()"(overrides?: CallOverrides): Promise<string>;

  registerIdentity(
    _userAddress: string,
    _identity: string,
    _country: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "registerIdentity(address,address,uint16)"(
    _userAddress: string,
    _identity: string,
    _country: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeAgentOnIdentityRegistryContract(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeAgentOnIdentityRegistryContract(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setClaimTopicsRegistry(
    _claimTopicsRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setClaimTopicsRegistry(address)"(
    _claimTopicsRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setIdentityRegistryStorage(
    _identityRegistryStorage: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setIdentityRegistryStorage(address)"(
    _identityRegistryStorage: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTrustedIssuersRegistry(
    _trustedIssuersRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setTrustedIssuersRegistry(address)"(
    _trustedIssuersRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  topicsRegistry(overrides?: CallOverrides): Promise<string>;

  "topicsRegistry()"(overrides?: CallOverrides): Promise<string>;

  transferOwnershipOnIdentityRegistryContract(
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnershipOnIdentityRegistryContract(address)"(
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateCountry(
    _userAddress: string,
    _country: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateCountry(address,uint16)"(
    _userAddress: string,
    _country: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateIdentity(
    _userAddress: string,
    _identity: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateIdentity(address,address)"(
    _userAddress: string,
    _identity: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAgentOnIdentityRegistryContract(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addAgentOnIdentityRegistryContract(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    batchRegisterIdentity(
      _userAddresses: string[],
      _identities: string[],
      _countries: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "batchRegisterIdentity(address[],address[],uint16[])"(
      _userAddresses: string[],
      _identities: string[],
      _countries: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    contains(_userAddress: string, overrides?: CallOverrides): Promise<boolean>;

    "contains(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deleteIdentity(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "deleteIdentity(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    identity(_userAddress: string, overrides?: CallOverrides): Promise<string>;

    "identity(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    identityStorage(overrides?: CallOverrides): Promise<string>;

    "identityStorage()"(overrides?: CallOverrides): Promise<string>;

    investorCountry(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<number>;

    "investorCountry(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<number>;

    isVerified(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isVerified(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    issuersRegistry(overrides?: CallOverrides): Promise<string>;

    "issuersRegistry()"(overrides?: CallOverrides): Promise<string>;

    registerIdentity(
      _userAddress: string,
      _identity: string,
      _country: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "registerIdentity(address,address,uint16)"(
      _userAddress: string,
      _identity: string,
      _country: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removeAgentOnIdentityRegistryContract(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeAgentOnIdentityRegistryContract(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setClaimTopicsRegistry(
      _claimTopicsRegistry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setClaimTopicsRegistry(address)"(
      _claimTopicsRegistry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setIdentityRegistryStorage(
      _identityRegistryStorage: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setIdentityRegistryStorage(address)"(
      _identityRegistryStorage: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTrustedIssuersRegistry(
      _trustedIssuersRegistry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setTrustedIssuersRegistry(address)"(
      _trustedIssuersRegistry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    topicsRegistry(overrides?: CallOverrides): Promise<string>;

    "topicsRegistry()"(overrides?: CallOverrides): Promise<string>;

    transferOwnershipOnIdentityRegistryContract(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnershipOnIdentityRegistryContract(address)"(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateCountry(
      _userAddress: string,
      _country: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateCountry(address,uint16)"(
      _userAddress: string,
      _country: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateIdentity(
      _userAddress: string,
      _identity: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateIdentity(address,address)"(
      _userAddress: string,
      _identity: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ClaimTopicsRegistrySet(
      claimTopicsRegistry: string | null
    ): TypedEventFilter<[string], { claimTopicsRegistry: string }>;

    CountryUpdated(
      investorAddress: string | null,
      country: BigNumberish | null
    ): TypedEventFilter<
      [string, number],
      { investorAddress: string; country: number }
    >;

    IdentityRegistered(
      investorAddress: string | null,
      identity: string | null
    ): TypedEventFilter<
      [string, string],
      { investorAddress: string; identity: string }
    >;

    IdentityRemoved(
      investorAddress: string | null,
      identity: string | null
    ): TypedEventFilter<
      [string, string],
      { investorAddress: string; identity: string }
    >;

    IdentityStorageSet(
      identityStorage: string | null
    ): TypedEventFilter<[string], { identityStorage: string }>;

    IdentityUpdated(
      oldIdentity: string | null,
      newIdentity: string | null
    ): TypedEventFilter<
      [string, string],
      { oldIdentity: string; newIdentity: string }
    >;

    TrustedIssuersRegistrySet(
      trustedIssuersRegistry: string | null
    ): TypedEventFilter<[string], { trustedIssuersRegistry: string }>;
  };

  estimateGas: {
    addAgentOnIdentityRegistryContract(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addAgentOnIdentityRegistryContract(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchRegisterIdentity(
      _userAddresses: string[],
      _identities: string[],
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "batchRegisterIdentity(address[],address[],uint16[])"(
      _userAddresses: string[],
      _identities: string[],
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    contains(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "contains(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deleteIdentity(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "deleteIdentity(address)"(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    identity(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "identity(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    identityStorage(overrides?: CallOverrides): Promise<BigNumber>;

    "identityStorage()"(overrides?: CallOverrides): Promise<BigNumber>;

    investorCountry(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "investorCountry(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isVerified(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isVerified(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    issuersRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    "issuersRegistry()"(overrides?: CallOverrides): Promise<BigNumber>;

    registerIdentity(
      _userAddress: string,
      _identity: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "registerIdentity(address,address,uint16)"(
      _userAddress: string,
      _identity: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeAgentOnIdentityRegistryContract(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeAgentOnIdentityRegistryContract(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setClaimTopicsRegistry(
      _claimTopicsRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setClaimTopicsRegistry(address)"(
      _claimTopicsRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setIdentityRegistryStorage(
      _identityRegistryStorage: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setIdentityRegistryStorage(address)"(
      _identityRegistryStorage: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTrustedIssuersRegistry(
      _trustedIssuersRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setTrustedIssuersRegistry(address)"(
      _trustedIssuersRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    topicsRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    "topicsRegistry()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnershipOnIdentityRegistryContract(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnershipOnIdentityRegistryContract(address)"(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateCountry(
      _userAddress: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateCountry(address,uint16)"(
      _userAddress: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateIdentity(
      _userAddress: string,
      _identity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateIdentity(address,address)"(
      _userAddress: string,
      _identity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAgentOnIdentityRegistryContract(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addAgentOnIdentityRegistryContract(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchRegisterIdentity(
      _userAddresses: string[],
      _identities: string[],
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "batchRegisterIdentity(address[],address[],uint16[])"(
      _userAddresses: string[],
      _identities: string[],
      _countries: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    contains(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "contains(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deleteIdentity(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "deleteIdentity(address)"(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    identity(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "identity(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    identityStorage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "identityStorage()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    investorCountry(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "investorCountry(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isVerified(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isVerified(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    issuersRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "issuersRegistry()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerIdentity(
      _userAddress: string,
      _identity: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "registerIdentity(address,address,uint16)"(
      _userAddress: string,
      _identity: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeAgentOnIdentityRegistryContract(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeAgentOnIdentityRegistryContract(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setClaimTopicsRegistry(
      _claimTopicsRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setClaimTopicsRegistry(address)"(
      _claimTopicsRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setIdentityRegistryStorage(
      _identityRegistryStorage: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setIdentityRegistryStorage(address)"(
      _identityRegistryStorage: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTrustedIssuersRegistry(
      _trustedIssuersRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setTrustedIssuersRegistry(address)"(
      _trustedIssuersRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    topicsRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "topicsRegistry()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnershipOnIdentityRegistryContract(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnershipOnIdentityRegistryContract(address)"(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateCountry(
      _userAddress: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateCountry(address,uint16)"(
      _userAddress: string,
      _country: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateIdentity(
      _userAddress: string,
      _identity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateIdentity(address,address)"(
      _userAddress: string,
      _identity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
