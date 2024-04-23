// //npx hardhat run --network testnet scripts/deploy.ts
const { ethers, upgrades } = require("hardhat");
const hre = require("hardhat");
import OnchainID from "@onchain-id/solidity";
// const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
import { BigNumber, Contract, Signer } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  ClaimTopicsRegistry,
  ClaimTopicsRegistry__factory,
  TrustedIssuersRegistry,
  TrustedIssuersRegistry__factory,
  IdentityRegistryStorage,
  IdentityRegistryStorage__factory,
  IdentityRegistry,
  IdentityRegistry__factory,
  ModularCompliance,
  ModularCompliance__factory,
  ImplementationAuthority,
  ImplementationAuthority__factory,
  TREXImplementationAuthority,
  TREXImplementationAuthority__factory,
  Token,
  Token__factory,
  Identity,
  Identity__factory,
  TokenProxy,
  TokenProxy__factory,
  TREXFactory,
  TREXFactory__factory,
  ClaimTopicsRegistryProxy,
  ClaimTopicsRegistryProxy__factory,
  TrustedIssuersRegistryProxy,
  TrustedIssuersRegistryProxy__factory,
  IdentityRegistryStorageProxy,
  IdentityRegistryStorageProxy__factory,
  IdFactory,
  IdFactory__factory,
  DefaultCompliance,
  DefaultCompliance__factory,
  IdentityRegistryProxy,
  IdentityRegistryProxy__factory,
  IdentityProxy,
  IdentityProxy__factory,
  AgentManager,
  AgentManager__factory,
  Master,
  Master__factory,
  USDC,
  USDC__factory,
  OwnedUpgradeabilityProxy,
  OwnedUpgradeabilityProxy__factory,
} from "../typechain";
import { convertWithDecimal } from "../test1/utilities/utilities";

let claimTopicsRegistry: ClaimTopicsRegistry;
let trustedIssuersRegistry: TrustedIssuersRegistry;
let identityRegistryStorage: IdentityRegistryStorage;
let identityRegistry: IdentityRegistry;
let modularCompliance: ModularCompliance;
let tokenDetails: any;
let claimDetails: any;
let busd: ERC20;
let identity: Identity;
let implementationAuthority: ImplementationAuthority;
let tREXImplementationAuthority: TREXImplementationAuthority;
let token: Token;
let trexFactory: TREXFactory;
let proxe: OwnedUpgradeabilityProxy;
let claimTopicsRegistryProxy: ClaimTopicsRegistryProxy;
let trustedIssuersProxy: TrustedIssuersRegistryProxy;
let identityRegistryStorageProxy: IdentityRegistryStorageProxy;
let idFactory: IdFactory;
let defaultCompliance: DefaultCompliance;
let identityRegistryProxy: IdentityRegistryProxy;
let identityProxy: IdentityProxy;
let tokenProxy: TokenProxy;
let master: Master;
let agentManager: AgentManager;
let deployer: SignerWithAddress;
let agent: SignerWithAddress;
let signers: SignerWithAddress[];

function setTokenDetails(data: any) {
  return [
    data.owner,
    data.name,
    data.symbol,
    data.decimals,
    data.irs,
    data.ONCHAINID,
    data.irAgents,
    data.tokenAgents,
    data.complianceModules,
    data.complianceSettings,
  ];
}

function setclaimDetails(data: any) {
  return [data.claimTopics, data.issuers, data.issuerClaims];
}

async function main() {
  signers = await ethers.getSigners();
  deployer = signers[0];
  agent = signers[1];
  function sleep(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  proxe = await new OwnedUpgradeabilityProxy__factory(deployer).attach("0x7Eb3a67Ef9F0D1Af41FC927d253CDf4F9F0a0937");
  console.log("proxe :>> ", proxe.address);
  await sleep(5000);

  master = await new Master__factory(deployer).deploy("");
  console.log("master.address :>> ", master.address /*"master-block-number", blockNumber*/);
  await sleep(5000);

  // await master.connect(deployer).addAgent(user2.address);

  console.log("OK :>> ");

  // await proxe.connect(deployer).upgradeToAndCall(master.address, initializeData);
  await proxe.connect(deployer).upgradeTo(master.address);

  console.log("proxe attached :>> ", proxe.address);
  await sleep(5000);

  master = await new Master__factory(deployer).attach(proxe.address);

  //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//
  console.log("master-proxeeee :>> ", master.address /*,"master-block-number", blockNumber*/);

  await sleep(5000);
  trexFactory = await new TREXFactory__factory(deployer).deploy(
    "0xd4C626AD1E4DA5617DDD1076F3e4a33cb4417256",
    "0xd3328b403F788Eb5106517a51cc01154DeBbd406",
    master.address,
  );
  // trexFactory = await new TREXFactory__factory(deployer).attach('0x5b71b08AB609E63019d1AD6a529217d640b9b161');
  console.log("trexFactory.address :>> ", trexFactory.address);

  await sleep(10000);

  await tREXImplementationAuthority.connect(deployer).setTREXFactory(trexFactory.address);
  console.log("1 :>> ", 1);
  await idFactory.connect(deployer).addTokenFactory(trexFactory.address, master.address);
  await sleep(5000);

  console.log("2 :>> ", 2);

  tokenDetails = {
    owner: "0xc174B99dF4BF65fD614741b10475C1C098e3a7eA",
    name: "first",
    decimals: 8,
    symbol: "hehe",
    irs: "0x0000000000000000000000000000000000000000",
    ONCHAINID: "0x0000000000000000000000000000000000000000",
    irAgents: ["0xc174B99dF4BF65fD614741b10475C1C098e3a7eA"],
    tokenAgents: ["0xc174B99dF4BF65fD614741b10475C1C098e3a7eA"],
    complianceModules: [],
    complianceSettings: [],
  };

  claimDetails = {
    claimTopics: [],
    issuers: [],
    issuerClaims: [],
  };

  const param1: any = setTokenDetails(tokenDetails);
  console.log("2 :>> ", 2);
  const param2: any = setclaimDetails(claimDetails);

  console.log("await master.owner() :>> ", await master.owner(), "yffkyufkug", deployer.address);

  let tx = await master
    .connect(deployer)
    .deployProject(
      "reyr",
      75778,
      param1,
      param2,
      convertWithDecimal(100, 10 ** 18),
      200,
      91,
      convertWithDecimal(765, 10 ** 8),
      "0x00E7CC555Aa4B1741eFa9179563E7c7Bb9d4a81e",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
    );

  let receipt = await tx.wait();
  let transactions: any = receipt.events?.filter((x) => {
    return x.event == "deployed";
  });

  console.log("y------- :>> ", transactions);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
