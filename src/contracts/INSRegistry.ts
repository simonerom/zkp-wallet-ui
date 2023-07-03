/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface INSRegistryInterface extends utils.Interface {
  functions: {
    "isApprovedForAll(address,address)": FunctionFragment;
    "owner(bytes32)": FunctionFragment;
    "recordExists(bytes32)": FunctionFragment;
    "resolver(bytes32)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setOwner(bytes32,address)": FunctionFragment;
    "setRecord(bytes32,address,address,uint64)": FunctionFragment;
    "setResolver(bytes32,address)": FunctionFragment;
    "setSubnodeOwner(bytes32,bytes32,address)": FunctionFragment;
    "setSubnodeRecord(bytes32,bytes32,address,address,uint64)": FunctionFragment;
    "setTTL(bytes32,uint64)": FunctionFragment;
    "ttl(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "isApprovedForAll"
      | "owner"
      | "recordExists"
      | "resolver"
      | "setApprovalForAll"
      | "setOwner"
      | "setRecord"
      | "setResolver"
      | "setSubnodeOwner"
      | "setSubnodeRecord"
      | "setTTL"
      | "ttl"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "owner",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "recordExists",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "resolver",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRecord",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setResolver",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSubnodeOwner",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setSubnodeRecord",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setTTL",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "ttl",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recordExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "resolver", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setRecord", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setResolver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSubnodeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSubnodeRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setTTL", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ttl", data: BytesLike): Result;

  events: {
    "ApprovalForAll(address,address,bool)": EventFragment;
    "NewOwner(bytes32,bytes32,address)": EventFragment;
    "NewResolver(bytes32,address)": EventFragment;
    "NewTTL(bytes32,uint64)": EventFragment;
    "Transfer(bytes32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewResolver"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewTTL"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalForAllEventObject {
  owner: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface NewOwnerEventObject {
  node: string;
  label: string;
  owner: string;
}
export type NewOwnerEvent = TypedEvent<
  [string, string, string],
  NewOwnerEventObject
>;

export type NewOwnerEventFilter = TypedEventFilter<NewOwnerEvent>;

export interface NewResolverEventObject {
  node: string;
  resolver: string;
}
export type NewResolverEvent = TypedEvent<
  [string, string],
  NewResolverEventObject
>;

export type NewResolverEventFilter = TypedEventFilter<NewResolverEvent>;

export interface NewTTLEventObject {
  node: string;
  ttl: BigNumber;
}
export type NewTTLEvent = TypedEvent<[string, BigNumber], NewTTLEventObject>;

export type NewTTLEventFilter = TypedEventFilter<NewTTLEvent>;

export interface TransferEventObject {
  node: string;
  owner: string;
}
export type TransferEvent = TypedEvent<[string, string], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface INSRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: INSRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    isApprovedForAll(
      _owner: PromiseOrValue<string>,
      _operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    recordExists(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    resolver(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      _node: PromiseOrValue<BytesLike>,
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRecord(
      _node: PromiseOrValue<BytesLike>,
      _owner: PromiseOrValue<string>,
      _resolver: PromiseOrValue<string>,
      _ttl: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setResolver(
      _node: PromiseOrValue<BytesLike>,
      _resolver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSubnodeOwner(
      _node: PromiseOrValue<BytesLike>,
      _label: PromiseOrValue<BytesLike>,
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSubnodeRecord(
      _node: PromiseOrValue<BytesLike>,
      _label: PromiseOrValue<BytesLike>,
      _owner: PromiseOrValue<string>,
      _resolver: PromiseOrValue<string>,
      _ttl: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTTL(
      _node: PromiseOrValue<BytesLike>,
      _ttl: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ttl(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  isApprovedForAll(
    _owner: PromiseOrValue<string>,
    _operator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(
    node: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  recordExists(
    node: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  resolver(
    node: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  setApprovalForAll(
    operator: PromiseOrValue<string>,
    approved: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    _node: PromiseOrValue<BytesLike>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRecord(
    _node: PromiseOrValue<BytesLike>,
    _owner: PromiseOrValue<string>,
    _resolver: PromiseOrValue<string>,
    _ttl: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setResolver(
    _node: PromiseOrValue<BytesLike>,
    _resolver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSubnodeOwner(
    _node: PromiseOrValue<BytesLike>,
    _label: PromiseOrValue<BytesLike>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSubnodeRecord(
    _node: PromiseOrValue<BytesLike>,
    _label: PromiseOrValue<BytesLike>,
    _owner: PromiseOrValue<string>,
    _resolver: PromiseOrValue<string>,
    _ttl: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTTL(
    _node: PromiseOrValue<BytesLike>,
    _ttl: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ttl(
    node: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    isApprovedForAll(
      _owner: PromiseOrValue<string>,
      _operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    recordExists(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    resolver(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(
      _node: PromiseOrValue<BytesLike>,
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRecord(
      _node: PromiseOrValue<BytesLike>,
      _owner: PromiseOrValue<string>,
      _resolver: PromiseOrValue<string>,
      _ttl: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setResolver(
      _node: PromiseOrValue<BytesLike>,
      _resolver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSubnodeOwner(
      _node: PromiseOrValue<BytesLike>,
      _label: PromiseOrValue<BytesLike>,
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    setSubnodeRecord(
      _node: PromiseOrValue<BytesLike>,
      _label: PromiseOrValue<BytesLike>,
      _owner: PromiseOrValue<string>,
      _resolver: PromiseOrValue<string>,
      _ttl: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTTL(
      _node: PromiseOrValue<BytesLike>,
      _ttl: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    ttl(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "ApprovalForAll(address,address,bool)"(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "NewOwner(bytes32,bytes32,address)"(
      node?: PromiseOrValue<BytesLike> | null,
      label?: PromiseOrValue<BytesLike> | null,
      owner?: null
    ): NewOwnerEventFilter;
    NewOwner(
      node?: PromiseOrValue<BytesLike> | null,
      label?: PromiseOrValue<BytesLike> | null,
      owner?: null
    ): NewOwnerEventFilter;

    "NewResolver(bytes32,address)"(
      node?: PromiseOrValue<BytesLike> | null,
      resolver?: null
    ): NewResolverEventFilter;
    NewResolver(
      node?: PromiseOrValue<BytesLike> | null,
      resolver?: null
    ): NewResolverEventFilter;

    "NewTTL(bytes32,uint64)"(
      node?: PromiseOrValue<BytesLike> | null,
      ttl?: null
    ): NewTTLEventFilter;
    NewTTL(
      node?: PromiseOrValue<BytesLike> | null,
      ttl?: null
    ): NewTTLEventFilter;

    "Transfer(bytes32,address)"(
      node?: PromiseOrValue<BytesLike> | null,
      owner?: null
    ): TransferEventFilter;
    Transfer(
      node?: PromiseOrValue<BytesLike> | null,
      owner?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    isApprovedForAll(
      _owner: PromiseOrValue<string>,
      _operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recordExists(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolver(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOwner(
      _node: PromiseOrValue<BytesLike>,
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRecord(
      _node: PromiseOrValue<BytesLike>,
      _owner: PromiseOrValue<string>,
      _resolver: PromiseOrValue<string>,
      _ttl: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setResolver(
      _node: PromiseOrValue<BytesLike>,
      _resolver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSubnodeOwner(
      _node: PromiseOrValue<BytesLike>,
      _label: PromiseOrValue<BytesLike>,
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSubnodeRecord(
      _node: PromiseOrValue<BytesLike>,
      _label: PromiseOrValue<BytesLike>,
      _owner: PromiseOrValue<string>,
      _resolver: PromiseOrValue<string>,
      _ttl: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTTL(
      _node: PromiseOrValue<BytesLike>,
      _ttl: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ttl(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isApprovedForAll(
      _owner: PromiseOrValue<string>,
      _operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recordExists(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolver(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      _node: PromiseOrValue<BytesLike>,
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRecord(
      _node: PromiseOrValue<BytesLike>,
      _owner: PromiseOrValue<string>,
      _resolver: PromiseOrValue<string>,
      _ttl: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setResolver(
      _node: PromiseOrValue<BytesLike>,
      _resolver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSubnodeOwner(
      _node: PromiseOrValue<BytesLike>,
      _label: PromiseOrValue<BytesLike>,
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSubnodeRecord(
      _node: PromiseOrValue<BytesLike>,
      _label: PromiseOrValue<BytesLike>,
      _owner: PromiseOrValue<string>,
      _resolver: PromiseOrValue<string>,
      _ttl: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTTL(
      _node: PromiseOrValue<BytesLike>,
      _ttl: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ttl(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
