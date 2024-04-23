/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { OwnedUpgradeabilityProxy } from "../OwnedUpgradeabilityProxy";

export class OwnedUpgradeabilityProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OwnedUpgradeabilityProxy> {
    return super.deploy(overrides || {}) as Promise<OwnedUpgradeabilityProxy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OwnedUpgradeabilityProxy {
    return super.attach(address) as OwnedUpgradeabilityProxy;
  }
  connect(signer: Signer): OwnedUpgradeabilityProxy__factory {
    return super.connect(signer) as OwnedUpgradeabilityProxy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnedUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OwnedUpgradeabilityProxy;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "ProxyOwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "impl",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maintenance",
    outputs: [
      {
        internalType: "bool",
        name: "_maintenance",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyOwner",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_maintenance",
        type: "bool",
      },
    ],
    name: "setMaintenance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferProxyOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610039337f4d33a8b5e3e1d149d028da45e6961d0aa820dfa7bd417639c3c934c49b81783e55565b610754806100486000396000f3fe6080604052600436106100645760003560e01c8063025313a21461007b5780633659cfe6146100ad5780634f1ef286146100cd5780635c60da1b146100e0578063612f2f37146100f55780636c376cc514610115578063f1739cae1461013a57610073565b366100735761007161015a565b005b61007161015a565b34801561008757600080fd5b506100906101ff565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100b957600080fd5b506100716100c83660046104f0565b610212565b6100716100db366004610528565b610256565b3480156100ec57600080fd5b5061009061031a565b34801561010157600080fd5b506100716101103660046105e9565b61032d565b34801561012157600080fd5b5061012a610377565b60405190151581526020016100a4565b34801561014657600080fd5b506100716101553660046104f0565b61038a565b610162610377565b156101a85761016f6101ff565b6001600160a01b0316336001600160a01b0316146101a85760405162461bcd60e51b815260040161019f9061060b565b60405180910390fd5b60006101b261031a565b90506001600160a01b0381166101da5760405162461bcd60e51b815260040161019f9061064e565b60405136600082376000803683855af43d806000843e8180156101fb578184f35b8184fd5b6000805160206106ff8339815191525490565b61021a6101ff565b6001600160a01b0316336001600160a01b03161461024a5760405162461bcd60e51b815260040161019f9061060b565b61025381610449565b50565b61025e6101ff565b6001600160a01b0316336001600160a01b03161461028e5760405162461bcd60e51b815260040161019f9061060b565b61029782610212565b6000306001600160a01b031634836040516102b2919061068f565b60006040518083038185875af1925050503d80600081146102ef576040519150601f19603f3d011682016040523d82523d6000602084013e6102f4565b606091505b50509050806103155760405162461bcd60e51b815260040161019f9061064e565b505050565b6000805160206106df8339815191525490565b6103356101ff565b6001600160a01b0316336001600160a01b0316146103655760405162461bcd60e51b815260040161019f9061060b565b6000805160206106bf83398151915255565b6000805160206106bf8339815191525490565b6103926101ff565b6001600160a01b0316336001600160a01b0316146103c25760405162461bcd60e51b815260040161019f9061060b565b6001600160a01b0381166103e85760405162461bcd60e51b815260040161019f9061064e565b7f5a3e66efaa1e445ebd894728a69d6959842ea1e97bd79b892797106e270efcd96104116101ff565b604080516001600160a01b03928316815291841660208301520160405180910390a1610253816000805160206106ff83398151915255565b600061045361031a565b9050816001600160a01b0316816001600160a01b0316036104865760405162461bcd60e51b815260040161019f9061064e565b61049c826000805160206106df83398151915255565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a25050565b80356001600160a01b03811681146104eb57600080fd5b919050565b60006020828403121561050257600080fd5b61050b826104d4565b9392505050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561053b57600080fd5b610544836104d4565b915060208301356001600160401b038082111561056057600080fd5b818501915085601f83011261057457600080fd5b81358181111561058657610586610512565b604051601f8201601f19908116603f011681019083821181831017156105ae576105ae610512565b816040528281528860208487010111156105c757600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000602082840312156105fb57600080fd5b8135801515811461050b57600080fd5b60208082526023908201527f4f776e6564557067726164656162696c69747950726f78793a20464f524249446040820152622222a760e91b606082015260800190565b60208082526021908201527f4f776e6564557067726164656162696c69747950726f78793a20494e56414c496040820152601160fa1b606082015260800190565b6000825160005b818110156106b05760208186018101518583015201610696565b50600092019182525091905056fecb0dab1e6cc3c636dc4b1be2197f382380f2a9391da8f17a2b35e7f43e1d30f9613eb104735602a1469ce30942ddab8605d472e94a2bb3ce803d73ddf73e97c14d33a8b5e3e1d149d028da45e6961d0aa820dfa7bd417639c3c934c49b81783ea26469706673582212203fbc49cbf338cb5d35ee8cd4c7156b88ca7d78a47989395139eb15ff732f22a364736f6c63430008110033";