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

interface AgentRolesUpgradeableInterface extends ethers.utils.Interface {
  functions: {
    "addAgentAdmin(address)": FunctionFragment;
    "addComplianceAgent(address)": FunctionFragment;
    "addFreezer(address)": FunctionFragment;
    "addRecoveryAgent(address)": FunctionFragment;
    "addSupplyModifier(address)": FunctionFragment;
    "addTransferManager(address)": FunctionFragment;
    "addWhiteListManager(address)": FunctionFragment;
    "isAgentAdmin(address)": FunctionFragment;
    "isComplianceAgent(address)": FunctionFragment;
    "isFreezer(address)": FunctionFragment;
    "isRecoveryAgent(address)": FunctionFragment;
    "isSupplyModifier(address)": FunctionFragment;
    "isTransferManager(address)": FunctionFragment;
    "isWhiteListManager(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeAgentAdmin(address)": FunctionFragment;
    "removeComplianceAgent(address)": FunctionFragment;
    "removeFreezer(address)": FunctionFragment;
    "removeRecoveryAgent(address)": FunctionFragment;
    "removeSupplyModifier(address)": FunctionFragment;
    "removeTransferManager(address)": FunctionFragment;
    "removeWhiteListManager(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addAgentAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addComplianceAgent",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "addFreezer", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addRecoveryAgent",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addSupplyModifier",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addTransferManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addWhiteListManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isAgentAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isComplianceAgent",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isFreezer", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isRecoveryAgent",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isSupplyModifier",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isTransferManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhiteListManager",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeAgentAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeComplianceAgent",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFreezer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeRecoveryAgent",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeSupplyModifier",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeTransferManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeWhiteListManager",
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

  decodeFunctionResult(
    functionFragment: "addAgentAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addComplianceAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addFreezer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addRecoveryAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addSupplyModifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addTransferManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addWhiteListManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAgentAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isComplianceAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isFreezer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isRecoveryAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSupplyModifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTransferManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhiteListManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAgentAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeComplianceAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFreezer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeRecoveryAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeSupplyModifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeTransferManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeWhiteListManager",
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

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RoleAdded(address,string)": EventFragment;
    "RoleRemoved(address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRemoved"): EventFragment;
}

export class AgentRolesUpgradeable extends Contract {
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

  interface: AgentRolesUpgradeableInterface;

  functions: {
    addAgentAdmin(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addAgentAdmin(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addComplianceAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addComplianceAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addFreezer(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addFreezer(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addRecoveryAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addRecoveryAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addSupplyModifier(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addSupplyModifier(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addTransferManager(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addTransferManager(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addWhiteListManager(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addWhiteListManager(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAgentAdmin(_agent: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isAgentAdmin(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isComplianceAgent(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isComplianceAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isFreezer(_agent: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isFreezer(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isRecoveryAgent(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isRecoveryAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isSupplyModifier(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isSupplyModifier(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTransferManager(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isTransferManager(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isWhiteListManager(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isWhiteListManager(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    removeAgentAdmin(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeAgentAdmin(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeComplianceAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeComplianceAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeFreezer(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeFreezer(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeRecoveryAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeRecoveryAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeSupplyModifier(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeSupplyModifier(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeTransferManager(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeTransferManager(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeWhiteListManager(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeWhiteListManager(address)"(
      _agent: string,
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
  };

  addAgentAdmin(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addAgentAdmin(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addComplianceAgent(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addComplianceAgent(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addFreezer(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addFreezer(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addRecoveryAgent(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addRecoveryAgent(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addSupplyModifier(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addSupplyModifier(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addTransferManager(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addTransferManager(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addWhiteListManager(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addWhiteListManager(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAgentAdmin(_agent: string, overrides?: CallOverrides): Promise<boolean>;

  "isAgentAdmin(address)"(
    _agent: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isComplianceAgent(
    _agent: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isComplianceAgent(address)"(
    _agent: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isFreezer(_agent: string, overrides?: CallOverrides): Promise<boolean>;

  "isFreezer(address)"(
    _agent: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isRecoveryAgent(_agent: string, overrides?: CallOverrides): Promise<boolean>;

  "isRecoveryAgent(address)"(
    _agent: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isSupplyModifier(_agent: string, overrides?: CallOverrides): Promise<boolean>;

  "isSupplyModifier(address)"(
    _agent: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTransferManager(
    _agent: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isTransferManager(address)"(
    _agent: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isWhiteListManager(
    _agent: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isWhiteListManager(address)"(
    _agent: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  removeAgentAdmin(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeAgentAdmin(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeComplianceAgent(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeComplianceAgent(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeFreezer(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeFreezer(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeRecoveryAgent(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeRecoveryAgent(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeSupplyModifier(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeSupplyModifier(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeTransferManager(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeTransferManager(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeWhiteListManager(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeWhiteListManager(address)"(
    _agent: string,
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

  callStatic: {
    addAgentAdmin(_agent: string, overrides?: CallOverrides): Promise<void>;

    "addAgentAdmin(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addComplianceAgent(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addComplianceAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addFreezer(_agent: string, overrides?: CallOverrides): Promise<void>;

    "addFreezer(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addRecoveryAgent(_agent: string, overrides?: CallOverrides): Promise<void>;

    "addRecoveryAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addSupplyModifier(_agent: string, overrides?: CallOverrides): Promise<void>;

    "addSupplyModifier(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addTransferManager(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addTransferManager(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addWhiteListManager(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addWhiteListManager(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isAgentAdmin(_agent: string, overrides?: CallOverrides): Promise<boolean>;

    "isAgentAdmin(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isComplianceAgent(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isComplianceAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isFreezer(_agent: string, overrides?: CallOverrides): Promise<boolean>;

    "isFreezer(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isRecoveryAgent(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isRecoveryAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isSupplyModifier(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isSupplyModifier(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTransferManager(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isTransferManager(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isWhiteListManager(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isWhiteListManager(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    removeAgentAdmin(_agent: string, overrides?: CallOverrides): Promise<void>;

    "removeAgentAdmin(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeComplianceAgent(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeComplianceAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeFreezer(_agent: string, overrides?: CallOverrides): Promise<void>;

    "removeFreezer(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeRecoveryAgent(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeRecoveryAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeSupplyModifier(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeSupplyModifier(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeTransferManager(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeTransferManager(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeWhiteListManager(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeWhiteListManager(address)"(
      _agent: string,
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
  };

  filters: {
    Initialized(version: null): TypedEventFilter<[number], { version: number }>;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    RoleAdded(
      _agent: string | null,
      _role: null
    ): TypedEventFilter<[string, string], { _agent: string; _role: string }>;

    RoleRemoved(
      _agent: string | null,
      _role: null
    ): TypedEventFilter<[string, string], { _agent: string; _role: string }>;
  };

  estimateGas: {
    addAgentAdmin(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addAgentAdmin(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addComplianceAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addComplianceAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addFreezer(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addFreezer(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addRecoveryAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addRecoveryAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addSupplyModifier(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addSupplyModifier(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addTransferManager(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addTransferManager(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addWhiteListManager(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addWhiteListManager(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAgentAdmin(_agent: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isAgentAdmin(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isComplianceAgent(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isComplianceAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isFreezer(_agent: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isFreezer(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isRecoveryAgent(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isRecoveryAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSupplyModifier(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isSupplyModifier(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTransferManager(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isTransferManager(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isWhiteListManager(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isWhiteListManager(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeAgentAdmin(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeAgentAdmin(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeComplianceAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeComplianceAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeFreezer(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeFreezer(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeRecoveryAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeRecoveryAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeSupplyModifier(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeSupplyModifier(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeTransferManager(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeTransferManager(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeWhiteListManager(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeWhiteListManager(address)"(
      _agent: string,
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
  };

  populateTransaction: {
    addAgentAdmin(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addAgentAdmin(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addComplianceAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addComplianceAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addFreezer(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addFreezer(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addRecoveryAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addRecoveryAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addSupplyModifier(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addSupplyModifier(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addTransferManager(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addTransferManager(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addWhiteListManager(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addWhiteListManager(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAgentAdmin(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAgentAdmin(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isComplianceAgent(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isComplianceAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isFreezer(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isFreezer(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isRecoveryAgent(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isRecoveryAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSupplyModifier(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isSupplyModifier(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTransferManager(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isTransferManager(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isWhiteListManager(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isWhiteListManager(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAgentAdmin(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeAgentAdmin(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeComplianceAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeComplianceAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeFreezer(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeFreezer(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeRecoveryAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeRecoveryAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeSupplyModifier(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeSupplyModifier(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeTransferManager(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeTransferManager(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeWhiteListManager(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeWhiteListManager(address)"(
      _agent: string,
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
  };
}
