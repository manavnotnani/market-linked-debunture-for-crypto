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
  Master2,
  Master2__factory,
  USDC,
  USDC__factory,
  SupplyLimitModule,
  SupplyLimitModule__factory,
  CountryRestrictModule,
  CountryRestrictModule__factory,
  TimeTransfersLimitsModule,
  TimeTransfersLimitsModule__factory,
  MaxBalanceModule,
  MaxBalanceModule__factory,
  OwnedUpgradeabilityProxy,
  OwnedUpgradeabilityProxy__factory,
  Dividend,
  Dividend__factory
} from "../typechain";
import { convertWithDecimal } from "../test1/utilities/utilities";

let claimTopicsRegistry: ClaimTopicsRegistry;
let trustedIssuersRegistry: TrustedIssuersRegistry;
let identityRegistryStorage: IdentityRegistryStorage;
let identityRegistry: IdentityRegistry;
let modularCompliance: ModularCompliance;
let tokenDetails: any;
let claimDetails: any;
let limitvalues: any;
let usdc: USDC;
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
let master2: Master2;
let supplylimit: SupplyLimitModule;
let countryRestrictModule: CountryRestrictModule;
let maxbalancetModule: MaxBalanceModule;
let timeTransfersLimitsModule: TimeTransfersLimitsModule;
let dividend: Dividend;
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
    data.tokenOwner,
    data.dividend
  ];
}

function setclaimDetails(data: any) {
  return [data.claimTopics, data.issuers, data.issuerClaims];
}
function setLimitDetails(data: any) {
  return [data.limitTime, data.limitValue];
}
async function main() {
  signers = await ethers.getSigners();
  deployer = signers[0];
  agent = signers[1];
  function sleep(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // usdc = await new USDC__factory(deployer).deploy();
  usdc = await new USDC__factory(deployer).attach("0x457899940019c59b52a32eed0851d57712578538");
  await usdc.deployed();

  console.log("erc20.address :>> ", usdc.address);
  await usdc.connect(deployer).mint(deployer.address, convertWithDecimal(100000000000, 10 ** 18))

  // claimTopicsRegistry = await new ClaimTopicsRegistry__factory(deployer).deploy();
  claimTopicsRegistry = await new ClaimTopicsRegistry__factory(deployer).attach("0x7d45833e2e17D108cB5137D07a83Dd75d18d140B");
  console.log("claimTopicsRegistry :>> ", claimTopicsRegistry.address);
  await sleep(5000);

  // trustedIssuersRegistry = await new TrustedIssuersRegistry__factory(deployer).deploy();
  trustedIssuersRegistry = await new TrustedIssuersRegistry__factory(deployer).attach("0x25455c88c9B4D8EA68Bf037bEf3f60De09AdD0dd");
  console.log("trustedIssuersRegistry :>> ", trustedIssuersRegistry.address);
  await sleep(5000);

  // identityRegistryStorage = await new IdentityRegistryStorage__factory(deployer).deploy();
  identityRegistryStorage = await new IdentityRegistryStorage__factory(deployer).attach("0xBA7A4068E9959B3548FF5a1D9EFA52d1776B5181");
  console.log("identityRegistryStorage :>> ", identityRegistryStorage.address);
  await sleep(5000);

  // identityRegistry = await new IdentityRegistry__factory(deployer).deploy();
  identityRegistry = await new IdentityRegistry__factory(deployer).attach("0x6419443BB44F0f42C635d2CF66B1A1BB7aBfc091");
  console.log("identityRegistry:>> ", identityRegistry.address);
  await sleep(5000);

  // modularCompliance = await new ModularCompliance__factory(deployer).deploy();
  modularCompliance = await new ModularCompliance__factory(deployer).attach("0x4FaAcD5aAb35A0FBc56ffbcD6b724347267C2c9e");
  console.log("modularCompliance :>> ", modularCompliance.address);
  await sleep(5000);

  // token = await new Token__factory(deployer).deploy();
  token = await new Token__factory(deployer).attach("0x1F05775F7798A1E5CD598468fb13A6658Fd81A41");
  console.log("token :>> ", token.address);
  await sleep(5000);

  // identity = await new Identity__factory(deployer).deploy(deployer.address, true);
  identity = await new Identity__factory(deployer).attach("0x71d2A2c0FF1D40bd1CAb60170795318B8c368B4b");
  console.log("identity :>> ", identity.address);
  await sleep(5000);

  // dividend = await new Dividend__factory(deployer).deploy();
  dividend = await new Dividend__factory(deployer).attach("0x45f0c2110c28Bf37Ae70FF6b867412D18458FE24")
  console.log(' dividend.address :>> ', dividend.address);


  implementationAuthority = await new ImplementationAuthority__factory(deployer).deploy(identity.address);
  // implementationAuthority = await new ImplementationAuthority__factory(deployer).attach("0x35a2F4811e0e2486be0267c640690509f7e31df8");
  await implementationAuthority.deployed();
  console.log("IdentityImplementationAuthority :>> ", implementationAuthority.address);
  await sleep(5000);

  idFactory = await new IdFactory__factory(deployer).deploy(implementationAuthority.address);
  // idFactory = await new IdFactory__factory(deployer).attach("0x9550Ec820a14a2DaD1433de4FC84fd953558d1F6");
  await idFactory.deployed();
  console.log("idFactory :>> ", idFactory.address);
  await sleep(5000);

  tREXImplementationAuthority = await new TREXImplementationAuthority__factory(deployer).deploy(
    true,
    ethers.constants.AddressZero,
    ethers.constants.AddressZero,
  );
  // tREXImplementationAuthority = await new TREXImplementationAuthority__factory(deployer).attach("0xcF4209BF765006095446f2585E3CC810664A07b8");
  console.log("tREXImplementationAuthority :>> ", tREXImplementationAuthority.address);

  const versionStruct = {
    major: 4,
    minor: 0,
    patch: 0,
  };
  console.log("start :>> ");
  await sleep(3000);
  console.log("stop :>> ");

  const contractsStruct = {
    tokenImplementation: token.address,
    ctrImplementation: claimTopicsRegistry.address,
    irImplementation: identityRegistry.address,
    irsImplementation: identityRegistryStorage.address,
    mcImplementation: modularCompliance.address,
    tirImplementation: trustedIssuersRegistry.address,
  };

  console.log("contractsStruct :>> ", contractsStruct);
  

  await tREXImplementationAuthority.connect(deployer).addAndUseTREXVersion(versionStruct, contractsStruct);
  console.log("tREXImplementationAuthority.address :>> ", tREXImplementationAuthority.address);
  await sleep(5000);

  supplylimit = await new SupplyLimitModule__factory(deployer).deploy();
  console.log("supplylimit.address :>> ", supplylimit.address);

  timeTransfersLimitsModule = await new TimeTransfersLimitsModule__factory(deployer).deploy();
  console.log("timeTransfersLimitsModule` :>> ", timeTransfersLimitsModule.address);

  countryRestrictModule = await new CountryRestrictModule__factory(deployer).deploy();
  console.log("countryRestrictModule.address :>> ", countryRestrictModule.address);

  maxbalancetModule = await new MaxBalanceModule__factory(deployer).deploy();
  console.log("countryRestrictModule.address :>> ", maxbalancetModule.address);

  proxe = await new OwnedUpgradeabilityProxy__factory(deployer).deploy();
  // proxe = await new OwnedUpgradeabilityProxy__factory(deployer).attach("0x5e82D707EF9A86e0e8682b34Aa4421254bFA2cF4");
  // console.log("proxe :>> ", proxe.address);
  // await sleep(5000);

  let contract = await proxe.deployed();

  let blockNumber = await (await contract.provider.getTransactionReceipt(proxe.deployTransaction.hash)).blockNumber;

  master = await new Master__factory(deployer).deploy("");
  console.log("master.address :>> ", master.address /*"master-block-number", blockNumber*/);
  await sleep(5000);
  // await master.connect(deployer).addAgent(user2.address);
  master2 = await new Master2__factory(deployer).deploy(proxe.address);
  await sleep(5000);

  let initializeData = await master.interface.encodeFunctionData("initialize", [
    implementationAuthority.address,
    deployer.address,
    deployer.address,
    usdc.address,
    idFactory.address,
    supplylimit.address,
    countryRestrictModule.address,
    maxbalancetModule.address,
    timeTransfersLimitsModule.address,
    dividend.address,
    master2.address,
    "https://black-relieved-pinniped-831.mypinata.cloud/ipfs/QmWAFjsdd2ivLjBYZSSv87yr6iqo18BP9X2JiSy5D7yMxP",
  ]);
  console.log("intialize data :>> ");
  await sleep(5000);

  await proxe.connect(deployer).upgradeToAndCall(master.address, initializeData);
  // await proxe.connect(deployer).upgradeTo(master.address)

  console.log("proxe attached :>> ", proxe.address);
  await sleep(5000);

  master = await new Master__factory(deployer).attach(proxe.address);

  console.log("master-proxeeee :>> ", master.address, "master-block-number", blockNumber);

  await sleep(5000);



  let blockNumber2 = await (await contract.provider.getTransactionReceipt(master2.deployTransaction.hash)).blockNumber;
  console.log("master2---------- :>> ", master2.address, "master2-block-number", blockNumber2);

  console.log("usdc.address=-=-=-=- :>> ", usdc.address);

  await sleep(10000);
  trexFactory = await new TREXFactory__factory(deployer).deploy(tREXImplementationAuthority.address, idFactory.address, master.address);
  // trexFactory = await new TREXFactory__factory(deployer).attach('0x5b71b08AB609E63019d1AD6a529217d640b9b161');
  console.log("trexFactory.address :>> ", trexFactory.address);

  await sleep(10000);

  await tREXImplementationAuthority.connect(deployer).setTREXFactory(trexFactory.address);
  console.log("1 :>> ", 1);
  await idFactory.connect(deployer).addTokenFactory(trexFactory.address, master.address);
  await sleep(5000);

  // console.log("2 :>> ", 2);
  // defaultCompliance = await new DefaultCompliance__factory(deployer).deploy();
  // tokenDetails = {
  //   owner: deployer.address,
  //   name: "first",
  //   decimals: 8,
  //   symbol: "hehe",
  //   irs: ethers.constants.AddressZero,
  //   ONCHAINID: ethers.constants.AddressZero,
  //   irAgents: [master.address],
  //   tokenAgents: [master2.address],
  //   complianceModules: [],
  //   complianceSettings: [],
  //   tokenOwner: master2.address,
  //   dividend:ethers.constants.AddressZero
  // };

  // claimDetails = {
  //   claimTopics: [],
  //   issuers: [],
  //   issuerClaims: [],
  // };

  // limitvalues = {
  //   limitTime: 100,
  //   limitValue: convertWithDecimal(10000, 10 ** 18),
  // };

  // // let modules = await modularCompliance.getModules();

  // const param1: any = setTokenDetails(tokenDetails);
  // console.log("1 :>> ", param1);
  // const param2: any = setclaimDetails(claimDetails);
  // console.log("2 :>> ", param2);
  // const param3: any = setLimitDetails(limitvalues);
  // console.log("3 :>> ", param3);

  // console.log("await master.owner() :>> ", await master.owner(), "yffkyufkug", deployer.address);

  // let projectno1: any = await master.projects();
  // console.log("projectnoertyyyyyyyyyyy :>> ", projectno1);

  // let usercount1 = await master.userBuyCounters(deployer.address, projectno1);

  // let usertoken1 = await master.userBlnc(deployer.address, projectno1, usercount1);

  // console.log("2 :>> ", usercount1, usertoken1);

  // let tx = await master
  //   .connect(deployer)
  //   .deployProject(
  //     [
  //       convertWithDecimal(1, 10 ** 18),
  //       convertWithDecimal(100, 10 ** 18),
  //       convertWithDecimal(1, 10 ** 18),
  //       91,
  //       convertWithDecimal(100, 10 ** 18),
  //     ],
  //     [91, 12, 11],
  //     ["hgdhjdkd", "0x00"],
  //     deployer.address,
  //     param3,
  //     param1,
  //     param2,
  //   );

  // let receipt = await tx.wait();
  // let transactions: any = receipt.events?.filter((x) => {
  //   return x.event == "deployed";
  // });
  // let event = transactions?.at(0)?.args;

  // console.log("y------- :>> ", event);

  // await usdc.connect(deployer).mint(deployer.address, convertWithDecimal(1000000000, 10 ** 18));
  // await sleep(3000);

  // await usdc.connect(deployer).approve(master.address, convertWithDecimal(1000000000, 10 ** 18));
  // await sleep(5000);
  // let usdcAmount = await master2.USDCCalculation(0, convertWithDecimal(100, 10 ** 18));

  // console.log("usdfccalculation -------", usdcAmount);
  // await sleep(3000);

  // await master.connect(deployer).deployIdentityBind([deployer.address], [0], ["wqefzdxd"], [88], ["dfsaihc"], ["sdutgu"]);
  // await sleep(3000);

  // console.log("1 :>> ", 1, await usdc.allowance(deployer.address, master.address));
  // await sleep(3000);

  // await master.connect(deployer).buyShare(usdcAmount, convertWithDecimal(100, 10 ** 18), 0, "NonCustodial");

  // let projectno: any = await master.projects();
  // console.log("projectno :>> ", projectno);

  // let y = await master.connect(deployer).buyShare(usdcAmount, convertWithDecimal(100, 10 ** 18), projectno - 1, "NonCustodial");
  // let receipt1 = await y.wait();
  // let transactions1: any = receipt1.events?.filter((x) => {
  //   return x.event == "buy";
  // });
  // let event1 = transactions1?.at(0)?.args;

  // console.log("zzzzzzzzzz------- :>> ", event1);

  // console.log("2 :>> ", 2);

  // await master.connect(deployer).mintTokens([deployer.address], [0], [0]);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
