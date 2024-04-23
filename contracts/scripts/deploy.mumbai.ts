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


function generateRandomString() {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset[randomIndex];
  }

  return randomString;
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

  // // usdc = await new USDC__factory(deployer).deploy();
  usdc = await new USDC__factory(deployer).attach("0x10140476AA52daa9725B467D3fe55AF273fC5218");
  await usdc.deployed();

  // console.log("erc20.address :>> ", usdc.address);
  // await usdc.connect(deployer).mint(deployer.address, convertWithDecimal(100000000000, 10 ** 18))

  // claimTopicsRegistry = await new ClaimTopicsRegistry__factory(deployer).deploy();
  // claimTopicsRegistry = await new ClaimTopicsRegistry__factory(deployer).attach("0x1828BAB56C92e5764976b76a37e435C886Bcb3e2");
  // console.log("claimTopicsRegistry :>> ", claimTopicsRegistry.address);
  // await sleep(5000);

  // // trustedIssuersRegistry = await new TrustedIssuersRegistry__factory(deployer).deploy();
  // trustedIssuersRegistry = await new TrustedIssuersRegistry__factory(deployer).attach("0x3899f0E4223b85F15D349D6c8572fa9284274344");
  // console.log("trustedIssuersRegistry :>> ", trustedIssuersRegistry.address);
  // await sleep(5000);

  // // identityRegistryStorage = await new IdentityRegistryStorage__factory(deployer).deploy();
  // identityRegistryStorage = await new IdentityRegistryStorage__factory(deployer).attach("0xbad0f7c470b654aA6180eE4A3536aE943Df8ae4b");
  // console.log("identityRegistryStorage :>> ", identityRegistryStorage.address);
  // await sleep(5000);

  // // identityRegistry = await new IdentityRegistry__factory(deployer).deploy();
  // identityRegistry = await new IdentityRegistry__factory(deployer).attach("0x744313423097937217e35cE6e92A65A41c658068");
  // console.log("identityRegistry:>> ", identityRegistry.address);
  // await sleep(5000);

  // // modularCompliance = await new ModularCompliance__factory(deployer).deploy();
  // modularCompliance = await new ModularCompliance__factory(deployer).attach("0xC3502dB7fe9643143a5E20A026253614f0454AB6");
  // console.log("modularCompliance :>> ", modularCompliance.address);
  // await sleep(5000);

  // token = await new Token__factory(deployer).deploy();
  // // token = await new Token__factory(deployer).attach("0x2965B971B9a37F742Ea857A56a37d8A89e0D5E9C");
  // console.log("token :>> ", token.address);
  // await sleep(5000);

  // identity = await new Identity__factory(deployer).deploy(deployer.address, true);
  // // identity = await new Identity__factory(deployer).attach("0x7a1CE751E87460488F4c3C4d8F154a45Fa975e63");
  // console.log("identity :>> ", identity.address);
  // await sleep(5000);

  // dividend = await new Dividend__factory(deployer).deploy();
  // // dividend = await new Dividend__factory(deployer).attach("0x45f0c2110c28Bf37Ae70FF6b867412D18458FE24")
  // console.log(' dividend.address :>> ', dividend.address);


  // implementationAuthority = await new ImplementationAuthority__factory(deployer).deploy(identity.address);
  // // implementationAuthority = await new ImplementationAuthority__factory(deployer).attach("0x35a2F4811e0e2486be0267c640690509f7e31df8");
  // await implementationAuthority.deployed();
  // console.log("IdentityImplementationAuthority :>> ", implementationAuthority.address);
  // await sleep(5000);

  // idFactory = await new IdFactory__factory(deployer).deploy(implementationAuthority.address);
  // // idFactory = await new IdFactory__factory(deployer).attach("0x9550Ec820a14a2DaD1433de4FC84fd953558d1F6");
  // await idFactory.deployed();
  // console.log("idFactory :>> ", idFactory.address);
  // await sleep(5000);

  // tREXImplementationAuthority = await new TREXImplementationAuthority__factory(deployer).deploy(
  //   true,
  //   ethers.constants.AddressZero,
  //   ethers.constants.AddressZero,
  // );
  // // tREXImplementationAuthority = await new TREXImplementationAuthority__factory(deployer).attach("0xcF4209BF765006095446f2585E3CC810664A07b8");
  // console.log("tREXImplementationAuthority :>> ", tREXImplementationAuthority.address);

  // const versionStruct = {
  //   major: 4,
  //   minor: 0,
  //   patch: 0,
  // };
  // console.log("start :>> ");
  // await sleep(3000);
  // console.log("stop :>> ");

  // const contractsStruct = {
  //   tokenImplementation: token.address,
  //   ctrImplementation: claimTopicsRegistry.address,
  //   irImplementation: identityRegistry.address,
  //   irsImplementation: identityRegistryStorage.address,
  //   mcImplementation: modularCompliance.address,
  //   tirImplementation: trustedIssuersRegistry.address,
  // };

  // console.log("contractsStruct :>> ", contractsStruct);

  // await tREXImplementationAuthority.connect(deployer).addAndUseTREXVersion(versionStruct, contractsStruct);
  // console.log("tREXImplementationAuthority.address :>> ", tREXImplementationAuthority.address);
  // await sleep(5000);

  // supplylimit = await new SupplyLimitModule__factory(deployer).deploy();
  // console.log("supplylimit.address :>> ", supplylimit.address);

  // timeTransfersLimitsModule = await new TimeTransfersLimitsModule__factory(deployer).deploy();
  // console.log("timeTransfersLimitsModule` :>> ", timeTransfersLimitsModule.address);

  // countryRestrictModule = await new CountryRestrictModule__factory(deployer).deploy();
  // console.log("countryRestrictModule.address :>> ", countryRestrictModule.address);

  // maxbalancetModule = await new MaxBalanceModule__factory(deployer).deploy();
  // console.log("countryRestrictModule.address :>> ", maxbalancetModule.address);

  // proxe = await new OwnedUpgradeabilityProxy__factory(deployer).deploy();
  // // proxe = await new OwnedUpgradeabilityProxy__factory(deployer).attach("0x0dabC785682E3710c0Fa0B57823a03CC067F6caA");
  // console.log("proxe :>> ", proxe.address);
  // await sleep(5000);

  // let contract = await proxe.deployed();

  // let blockNumber = await (await contract.provider.getTransactionReceipt(proxe.deployTransaction.hash)).blockNumber;

  // master = await new Master__factory(deployer).deploy("");
  // console.log("master.address :>> ", master.address /*"master-block-number", blockNumber*/);
  // await sleep(5000);

  // master2 = await new Master2__factory(deployer).deploy(proxe.address);
  master2 = await new Master2__factory(deployer).attach("0xdDf1FEF3bB18B4a5b9237692Cd8744f825BE0E73")
  // await sleep(5000);

  // let initializeData = await master.interface.encodeFunctionData("initialize", [
  //   implementationAuthority.address,
  //   deployer.address,
  //   deployer.address,
  //   usdc.address,
  //   idFactory.address,
  //   supplylimit.address,
  //   countryRestrictModule.address,
  //   maxbalancetModule.address,
  //   timeTransfersLimitsModule.address,
  //   dividend.address,
  //   master2.address,
  //   "https://black-relieved-pinniped-831.mypinata.cloud/ipfs/QmWAFjsdd2ivLjBYZSSv87yr6iqo18BP9X2JiSy5D7yMxP",
  // ]);
  // console.log("intialize data :>> ");
  // await sleep(5000);

  // await proxe.connect(deployer).upgradeToAndCall(master.address, initializeData);
  // // await proxe.connect(deployer).upgradeTo(master.address)

  // console.log("proxe attached :>> ", proxe.address);
  // await sleep(5000);

  // master = await new Master__factory(deployer).attach(proxe.address);
  master = await new Master__factory(deployer).attach("0x68542534B491e9D2b0BA07139786583efaa754Ae");

  // console.log("master-proxeeee :>> ", master.address, "master-block-number", blockNumber);

  // await sleep(5000);



  // let blockNumber2 = await (await contract.provider.getTransactionReceipt(master2.deployTransaction.hash)).blockNumber;
  // console.log("master2---------- :>> ", master2.address, "master2-block-number", blockNumber2);

  // console.log("usdc.address=-=-=-=- :>> ", usdc.address);

  // await sleep(10000);
  // trexFactory = await new TREXFactory__factory(deployer).deploy(tREXImplementationAuthority.address, idFactory.address, master.address);
  // // trexFactory = await new TREXFactory__factory(deployer).attach('0x5b71b08AB609E63019d1AD6a529217d640b9b161');
  // console.log("trexFactory.address :>> ", trexFactory.address);

  // await sleep(10000);

  // await tREXImplementationAuthority.connect(deployer).setTREXFactory(trexFactory.address);
  console.log("1 :>> ", 1);
  // await idFactory.connect(deployer).addTokenFactory(trexFactory.address, master.address);
  // await sleep(5000);

  console.log("2 :>> ", 2);
  defaultCompliance = await new DefaultCompliance__factory(deployer).deploy();
  tokenDetails = {
    owner: deployer.address,
    name: "first",
    decimals: 8,
    symbol: "hehe",
    irs: ethers.constants.AddressZero,
    ONCHAINID: ethers.constants.AddressZero,
    irAgents: [master.address],
    tokenAgents: [master2.address],
    complianceModules: [],
    complianceSettings: [],
    tokenOwner: master2.address,
    dividend: ethers.constants.AddressZero
  };

  claimDetails = {
    claimTopics: [],
    issuers: [],
    issuerClaims: [],
  };

  limitvalues = {
    limitTime: 100,
    limitValue: convertWithDecimal(10000, 10 ** 18),
  };

  // let modules = await modularCompliance.getModules();

  const param1: any = setTokenDetails(tokenDetails);
  console.log("1 :>> ", param1);
  const param2: any = setclaimDetails(claimDetails);
  console.log("2 :>> ", param2);
  const param3: any = setLimitDetails(limitvalues);
  console.log("3 :>> ", param3);

  console.log("await master.owner() :>> ", await master.owner(), "yffkyufkug", deployer.address);

  let projectno1: any = await master.projects();
  console.log("projectnoertyyyyyyyyyyy :>> ", projectno1);

  let usercount1 = await master.userBuyCounters(deployer.address, projectno1);

  let usertoken1 = await master.userBlnc(deployer.address, projectno1, usercount1);

  console.log("2 :>> ", usercount1, usertoken1);
  let str = generateRandomString()
  let str2 = generateRandomString()
  let str3 = generateRandomString()
  let str4 = generateRandomString()
  let tx = await master
    .connect(deployer)
    .deployProject(
      [
        convertWithDecimal(1, 10 ** 18),
        convertWithDecimal(100, 10 ** 18),
        convertWithDecimal(1, 10 ** 18),
        91,
        convertWithDecimal(100, 10 ** 18),
      ],
      [91, 12, 11],
      [str, "0x00"],
      deployer.address,
      param3,
      param1,
      param2,
    );

  let receipt = await tx.wait();
  let transactions: any = receipt.events?.filter((x) => {
    return x.event == "deployed";
  });
  let event = transactions?.at(0)?.args;
  console.log("y------- :>> ", event);

  await usdc.connect(deployer).mint(deployer.address, convertWithDecimal(1000000000, 10 ** 18));
  await sleep(3000);

  await usdc.connect(deployer).approve(master.address, convertWithDecimal(1000000000, 10 ** 18));
  await sleep(5000);
  console.log('event.projectId :>> ', event.projectId);


  await master.connect(deployer).deployIdentityBind([deployer.address], [event.projectId], [str2], [88], [str3], [str4]);
  await sleep(3000);

  console.log("1 :>> ", 1, await usdc.allowance(deployer.address, master.address));
  // await sleep(3000);

  let txn2 = await master.connect(deployer).buyShare(convertWithDecimal(100, 10 ** 18), convertWithDecimal(100, 10 ** 18), event.projectId, "NonCustodial", 91);
  let receipt2 = await txn2.wait();
  let transactions2: any = receipt2.events?.filter((x: any) => {
    return x.event == "buy";
  });
  let event2 = transactions2?.at(0)?.args;

  await master2.connect(deployer).mintTokens([deployer.address], [event.projectId], [event2.buyCounter]);
  await sleep(6000);

  let data = await master.propertyData2(event.projectId)
  console.log('data :>> ', data);
  await master.connect(deployer).depositDividendRewards(convertWithDecimal(100, 10 ** 18), event.projectId);

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
