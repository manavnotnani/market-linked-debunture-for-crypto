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

interface ApproveTransferInterface extends ethers.utils.Interface {
  functions: {
    "addAgent(address)": FunctionFragment;
    "addTokenAgent(address)": FunctionFragment;
    "approveAndTransfer(address,address,uint256)": FunctionFragment;
    "approveTransfer(address,address,uint256)": FunctionFragment;
    "bindToken(address)": FunctionFragment;
    "canTransfer(address,address,uint256)": FunctionFragment;
    "complianceCheckOnApproveTransfer(address,address,uint256)": FunctionFragment;
    "created(address,uint256)": FunctionFragment;
    "destroyed(address,uint256)": FunctionFragment;
    "isAgent(address)": FunctionFragment;
    "isTokenAgent(address)": FunctionFragment;
    "isTokenBound(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeAgent(address)": FunctionFragment;
    "removeApproval(address,address,uint256)": FunctionFragment;
    "removeTokenAgent(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "tokenBound()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferred(address,address,uint256)": FunctionFragment;
    "unbindToken(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addAgent", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addTokenAgent",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "approveAndTransfer",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approveTransfer",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "bindToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "canTransfer",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "complianceCheckOnApproveTransfer",
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
  encodeFunctionData(functionFragment: "isAgent", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isTokenAgent",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isTokenBound",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "removeAgent", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeApproval",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeTokenAgent",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenBound",
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

  decodeFunctionResult(functionFragment: "addAgent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addTokenAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveAndTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bindToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "canTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "complianceCheckOnApproveTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "created", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "destroyed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAgent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTokenAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTokenBound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeTokenAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenBound", data: BytesLike): Result;
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
    "AgentAdded(address)": EventFragment;
    "AgentRemoved(address)": EventFragment;
    "ApprovalRemoved(address,address,uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenAgentAdded(address)": EventFragment;
    "TokenAgentRemoved(address)": EventFragment;
    "TokenBound(address)": EventFragment;
    "TokenUnbound(address)": EventFragment;
    "TransferApproved(address,address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AgentAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AgentRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenAgentAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenAgentRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenBound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenUnbound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferApproved"): EventFragment;
}

export class ApproveTransfer extends Contract {
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

  interface: ApproveTransferInterface;

  functions: {
    addAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addTokenAgent(
      _agentAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addTokenAgent(address)"(
      _agentAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveAndTransfer(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "approveAndTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveTransfer(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "approveTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
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

    canTransfer(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "canTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    complianceCheckOnApproveTransfer(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "complianceCheckOnApproveTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    created(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "created(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    destroyed(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "destroyed(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAgent(_agent: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTokenAgent(
      _agentAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isTokenAgent(address)"(
      _agentAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTokenBound(_token: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isTokenBound(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

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

    removeApproval(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeApproval(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeTokenAgent(
      _agentAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeTokenAgent(address)"(
      _agentAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenBound(overrides?: CallOverrides): Promise<[string]>;

    "tokenBound()"(overrides?: CallOverrides): Promise<[string]>;

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
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferred(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
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

  addAgent(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addAgent(address)"(
    _agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addTokenAgent(
    _agentAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addTokenAgent(address)"(
    _agentAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveAndTransfer(
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "approveAndTransfer(address,address,uint256)"(
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveTransfer(
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "approveTransfer(address,address,uint256)"(
    _from: string,
    _to: string,
    _amount: BigNumberish,
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

  canTransfer(
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "canTransfer(address,address,uint256)"(
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  complianceCheckOnApproveTransfer(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "complianceCheckOnApproveTransfer(address,address,uint256)"(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  created(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "created(address,uint256)"(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  destroyed(
    _from: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "destroyed(address,uint256)"(
    _from: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAgent(_agent: string, overrides?: CallOverrides): Promise<boolean>;

  "isAgent(address)"(
    _agent: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTokenAgent(
    _agentAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isTokenAgent(address)"(
    _agentAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTokenBound(_token: string, overrides?: CallOverrides): Promise<boolean>;

  "isTokenBound(address)"(
    _token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

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

  removeApproval(
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeApproval(address,address,uint256)"(
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeTokenAgent(
    _agentAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeTokenAgent(address)"(
    _agentAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenBound(overrides?: CallOverrides): Promise<string>;

  "tokenBound()"(overrides?: CallOverrides): Promise<string>;

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
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferred(address,address,uint256)"(
    _from: string,
    _to: string,
    _amount: BigNumberish,
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
    addAgent(_agent: string, overrides?: CallOverrides): Promise<void>;

    "addAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addTokenAgent(
      _agentAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addTokenAgent(address)"(
      _agentAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    approveAndTransfer(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "approveAndTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    approveTransfer(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "approveTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    bindToken(_token: string, overrides?: CallOverrides): Promise<void>;

    "bindToken(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    canTransfer(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "canTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    complianceCheckOnApproveTransfer(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "complianceCheckOnApproveTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    created(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "created(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    destroyed(
      _from: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "destroyed(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isAgent(_agent: string, overrides?: CallOverrides): Promise<boolean>;

    "isAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTokenAgent(
      _agentAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isTokenAgent(address)"(
      _agentAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTokenBound(_token: string, overrides?: CallOverrides): Promise<boolean>;

    "isTokenBound(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    removeAgent(_agent: string, overrides?: CallOverrides): Promise<void>;

    "removeAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeApproval(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeApproval(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removeTokenAgent(
      _agentAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeTokenAgent(address)"(
      _agentAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    tokenBound(overrides?: CallOverrides): Promise<string>;

    "tokenBound()"(overrides?: CallOverrides): Promise<string>;

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
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferred(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unbindToken(_token: string, overrides?: CallOverrides): Promise<void>;

    "unbindToken(address)"(
      _token: string,
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

    ApprovalRemoved(
      _from: null,
      _to: null,
      _amount: null,
      _token: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      { _from: string; _to: string; _amount: BigNumber; _token: string }
    >;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    TokenAgentAdded(
      _agentAddress: null
    ): TypedEventFilter<[string], { _agentAddress: string }>;

    TokenAgentRemoved(
      _agentAddress: null
    ): TypedEventFilter<[string], { _agentAddress: string }>;

    TokenBound(_token: null): TypedEventFilter<[string], { _token: string }>;

    TokenUnbound(_token: null): TypedEventFilter<[string], { _token: string }>;

    TransferApproved(
      _from: null,
      _to: null,
      _amount: null,
      _token: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      { _from: string; _to: string; _amount: BigNumber; _token: string }
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

    addTokenAgent(
      _agentAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addTokenAgent(address)"(
      _agentAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveAndTransfer(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "approveAndTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveTransfer(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "approveTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
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

    canTransfer(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    complianceCheckOnApproveTransfer(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "complianceCheckOnApproveTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    created(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "created(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    destroyed(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "destroyed(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAgent(_agent: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isAgent(address)"(
      _agent: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTokenAgent(
      _agentAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isTokenAgent(address)"(
      _agentAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTokenBound(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isTokenBound(address)"(
      _token: string,
      overrides?: CallOverrides
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

    removeApproval(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeApproval(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeTokenAgent(
      _agentAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeTokenAgent(address)"(
      _agentAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenBound(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenBound()"(overrides?: CallOverrides): Promise<BigNumber>;

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
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferred(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
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
    addAgent(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addAgent(address)"(
      _agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addTokenAgent(
      _agentAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addTokenAgent(address)"(
      _agentAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveAndTransfer(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "approveAndTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveTransfer(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "approveTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
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

    canTransfer(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    complianceCheckOnApproveTransfer(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "complianceCheckOnApproveTransfer(address,address,uint256)"(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    created(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "created(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    destroyed(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "destroyed(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
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

    isTokenAgent(
      _agentAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isTokenAgent(address)"(
      _agentAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTokenBound(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isTokenBound(address)"(
      _token: string,
      overrides?: CallOverrides
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

    removeApproval(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeApproval(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeTokenAgent(
      _agentAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeTokenAgent(address)"(
      _agentAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenBound(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tokenBound()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferred(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
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
