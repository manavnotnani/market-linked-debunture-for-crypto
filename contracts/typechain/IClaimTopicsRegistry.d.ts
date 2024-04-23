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

interface IClaimTopicsRegistryInterface extends ethers.utils.Interface {
  functions: {
    "addClaimTopic(uint256)": FunctionFragment;
    "getClaimTopics()": FunctionFragment;
    "removeClaimTopic(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addClaimTopic",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimTopics",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeClaimTopic",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addClaimTopic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClaimTopics",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeClaimTopic",
    data: BytesLike
  ): Result;

  events: {
    "ClaimTopicAdded(uint256)": EventFragment;
    "ClaimTopicRemoved(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimTopicAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimTopicRemoved"): EventFragment;
}

export class IClaimTopicsRegistry extends Contract {
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

  interface: IClaimTopicsRegistryInterface;

  functions: {
    addClaimTopic(
      _claimTopic: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addClaimTopic(uint256)"(
      _claimTopic: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getClaimTopics(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    "getClaimTopics()"(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    removeClaimTopic(
      _claimTopic: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeClaimTopic(uint256)"(
      _claimTopic: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addClaimTopic(
    _claimTopic: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addClaimTopic(uint256)"(
    _claimTopic: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getClaimTopics(overrides?: CallOverrides): Promise<BigNumber[]>;

  "getClaimTopics()"(overrides?: CallOverrides): Promise<BigNumber[]>;

  removeClaimTopic(
    _claimTopic: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeClaimTopic(uint256)"(
    _claimTopic: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addClaimTopic(
      _claimTopic: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addClaimTopic(uint256)"(
      _claimTopic: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getClaimTopics(overrides?: CallOverrides): Promise<BigNumber[]>;

    "getClaimTopics()"(overrides?: CallOverrides): Promise<BigNumber[]>;

    removeClaimTopic(
      _claimTopic: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeClaimTopic(uint256)"(
      _claimTopic: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ClaimTopicAdded(
      claimTopic: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { claimTopic: BigNumber }>;

    ClaimTopicRemoved(
      claimTopic: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { claimTopic: BigNumber }>;
  };

  estimateGas: {
    addClaimTopic(
      _claimTopic: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addClaimTopic(uint256)"(
      _claimTopic: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getClaimTopics(overrides?: CallOverrides): Promise<BigNumber>;

    "getClaimTopics()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeClaimTopic(
      _claimTopic: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeClaimTopic(uint256)"(
      _claimTopic: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addClaimTopic(
      _claimTopic: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addClaimTopic(uint256)"(
      _claimTopic: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getClaimTopics(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getClaimTopics()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeClaimTopic(
      _claimTopic: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeClaimTopic(uint256)"(
      _claimTopic: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
