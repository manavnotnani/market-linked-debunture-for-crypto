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
  TREXFactory,
  TREXFactory__factory,
  Token,
  Token__factory,
  Identity,
  Identity__factory,
  IdFactory,
  IdFactory__factory,
  DefaultCompliance,
  DefaultCompliance__factory,
  AgentManager,
  AgentManager__factory,
  Master,
  Master__factory,
  Master2,
  Master2__factory,
  // owne
  USDC,
  USDC__factory,
  OwnedUpgradeabilityProxy,
  OwnedUpgradeabilityProxy__factory,
  SupplyLimitModule,
  SupplyLimitModule__factory,
  CountryRestrictModule,
  CountryRestrictModule__factory,
  TimeTransfersLimitsModule,
  TimeTransfersLimitsModule__factory,
  MaxBalanceModule,
  MaxBalanceModule__factory,
  Dividend,
  Dividend__factory
} from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";
import { mineBlocks } from "../test1/utilities/utilities";
import { hasUncaughtExceptionCaptureCallback } from "process";
var BigNumber = require("big-number");
var bigInt = require("big-integer");

function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe.only("Public Sale", async () => {
  let claimTopicsRegistry: ClaimTopicsRegistry;
  let trustedIssuersRegistry: TrustedIssuersRegistry;
  let identityRegistryStorage: IdentityRegistryStorage;
  let identityRegistry: IdentityRegistry;
  let modularCompliance: ModularCompliance;
  let identity: Identity;
  let implementationAuthority: ImplementationAuthority;
  let usdc: USDC;
  let token: Token;
  let token1: Token;
  let idFactory: IdFactory;
  let tREXImplementationAuthority: TREXImplementationAuthority;
  let trexFactory: TREXFactory;
  let proxe: OwnedUpgradeabilityProxy;
  let master: Master;
  let master2: Master2;
  let supplylimit: SupplyLimitModule;
  let countryRestrictModule: CountryRestrictModule;
  let maxbalancetModule: MaxBalanceModule;
  let timeTransfersLimitsModule: TimeTransfersLimitsModule;
  let tokenDetails: any;
  let claimDetails: any;
  let limitvalues: any;
  let dividend: Dividend;
  let deployer: SignerWithAddress;
  let issuer1: SignerWithAddress;
  let adminAagent: SignerWithAddress;
  let extraUser: SignerWithAddress;
  let extraUser2: SignerWithAddress;
  let buyer: SignerWithAddress;
  let buyer2: SignerWithAddress
  let buyer3: SignerWithAddress
  let agent1: SignerWithAddress;
  let signers: SignerWithAddress[];

  const isInt = (n: any) => {
    return n % 1 === 0;
  };
  const convertWithDecimal = (value: any, decimal: any) => {
    if (value > 0) {
      if (isInt(value)) {
        value = parseInt(value);
        value = BigNumber(value).multiply(decimal);
      } else {
        value = value * decimal;
        value = toFixed(value);
        value = parseInt(value.toString().split(".")[0]);
        value = toFixed(value);
        value = BigNumber(value);
      }
      return value.toString();
    } else {
      return 0;
    }
  };

  const toFixed = (x: any) => {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split("e-")[1]);
      if (e) {
        x *= Math.pow(10, e - 1);
        x = "0." + new Array(e).join("0") + x.toString().substring(2);
      }
    } else {
      var e = parseInt(x.toString().split("+")[1]);
      if (e > 20) {
        e -= 20;
        x /= Math.pow(10, e);
        x += new Array(e + 1).join("0");
      }
    }
    return x;
  };

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

  beforeEach(async () => {
    signers = await ethers.getSigners();
    deployer = signers[0];
    issuer1 = signers[1];
    adminAagent = signers[2];
    buyer = signers[3];
    extraUser = signers[4];
    agent1 = signers[5];
    extraUser2 = signers[6];
    buyer2 = signers[7];
    buyer3 = signers[8];

    usdc = await new USDC__factory(deployer).deploy();

    await usdc.connect(deployer).mint(buyer.address, convertWithDecimal(100, 10 ** 18));
    await usdc.connect(deployer).mint(buyer2.address, convertWithDecimal(100, 10 ** 18));
    await usdc.connect(deployer).mint(buyer3.address, convertWithDecimal(100, 10 ** 18));
    // console.log("minted balance :>> ", await usdc.connect(buyer).balanceOf(buyer.address));

    claimTopicsRegistry = await new ClaimTopicsRegistry__factory(deployer).deploy();
    // console.log("claimTopicsRegistry :>> ", claimTopicsRegistry.address);

    trustedIssuersRegistry = await new TrustedIssuersRegistry__factory(deployer).deploy();
    // console.log("trustedIssuersRegistry :>> ", trustedIssuersRegistry.address);

    identityRegistryStorage = await new IdentityRegistryStorage__factory(deployer).deploy();
    // console.log("identityRegistryStorage :>> ", identityRegistryStorage.address);

    identityRegistry = await new IdentityRegistry__factory(deployer).deploy();
    // console.log("identityRegistry:>> ", identityRegistry.address);

    modularCompliance = await new ModularCompliance__factory(deployer).deploy();
    // console.log("modularCompliance :>> ", modularCompliance.address);

    token = await new Token__factory(deployer).deploy();
    // console.log("token :>> ", token.address);

    identity = await new Identity__factory(deployer).deploy(deployer.address, true);
    // console.log("identity :>> ", identity.address);

    dividend = await new Dividend__factory(deployer).deploy();
    console.log(' dividend.address :>> ', dividend.address);


    implementationAuthority = await new ImplementationAuthority__factory(deployer).deploy(identity.address);
    // console.log("IdentityImplementationAuthority :>> ", implementationAuthority.address);

    idFactory = await new IdFactory__factory(deployer).deploy(implementationAuthority.address);
    // console.log("idFactory :>> ", idFactory.address);

    tREXImplementationAuthority = await new TREXImplementationAuthority__factory(deployer).deploy(
      true,
      ethers.constants.AddressZero,
      ethers.constants.AddressZero,
    );
    // console.log('tREXImplementationAuthority :>> ', tREXImplementationAuthority.address);

    const versionStruct = {
      major: 4,
      minor: 0,
      patch: 0,
    };
    await sleep(3000);
    const contractsStruct = {
      tokenImplementation: token.address,
      ctrImplementation: claimTopicsRegistry.address,
      irImplementation: identityRegistry.address,
      irsImplementation: identityRegistryStorage.address,
      tirImplementation: trustedIssuersRegistry.address,
      mcImplementation: modularCompliance.address,
    };

    await tREXImplementationAuthority.connect(deployer).addAndUseTREXVersion(versionStruct, contractsStruct);
    console.log("tREXImplementationAuthority.address :>> ", tREXImplementationAuthority.address);

    supplylimit = await new SupplyLimitModule__factory(deployer).deploy();
    console.log("supplylimit.address :>> ", supplylimit.address);

    timeTransfersLimitsModule = await new TimeTransfersLimitsModule__factory(deployer).deploy();
    console.log("timeTransfersLimitsModule` :>> ", timeTransfersLimitsModule.address);

    countryRestrictModule = await new CountryRestrictModule__factory(deployer).deploy();
    console.log("countryRestrictModule.address :>> ", countryRestrictModule.address);

    maxbalancetModule = await new MaxBalanceModule__factory(deployer).deploy();
    console.log("countryRestrictModule.address :>> ", maxbalancetModule.address);

    proxe = await new OwnedUpgradeabilityProxy__factory(deployer).deploy();
    console.log("proxe :>> ", proxe.address);

    master2 = await new Master2__factory(deployer).deploy(proxe.address);
    console.log("master2.address :>> ", master2.address);

    master = await new Master__factory(deployer).deploy("");
    console.log("master.address :>> ", master.address, await master.connect(deployer).owner());

    // await master.connect(deployer).addAgent(adminAagent.address);

    console.log("OK :>> ");

    let initializeData = await master.interface.encodeFunctionData("initialize", [
      implementationAuthority.address,
      deployer.address,
      adminAagent.address,
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
    await proxe.connect(deployer).upgradeToAndCall(master.address, initializeData);

    console.log("proxe attached :>> ");

    master = await new Master__factory(deployer).attach(proxe.address);
    await sleep(3000);


    console.log("owner check :>> ", await master.isAgent(adminAagent.address));

    trexFactory = await new TREXFactory__factory(deployer).deploy(tREXImplementationAuthority.address, idFactory.address, master.address);
    console.log("trexFactory.address :>> ", trexFactory.address);

    await tREXImplementationAuthority.connect(deployer).setTREXFactory(trexFactory.address);

    await idFactory.connect(deployer).addTokenFactory(trexFactory.address, master.address);
    // console.log('ok :>> ');

    // defaultCompliance = await new DefaultCompliance__factory(deployer).deploy();
    // console.log('defaultCompliance :>> ', defaultCompliance.address);

    // ~~~~~~~~~~~~~~~~~~~~~~~~~🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //~~~~~~~~~~~~~~~~~~~~~~~~~~🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  });

  describe("Contract Deployed", async () => {
    it("checking trex factory owner", async () => {
      // let x = await trexFactory.connect(deployer).owner();
      // console.log("x :>> ", x);
    });

    it("checking trex factory deploytrexsuite", async () => {
      tokenDetails = {
        owner: issuer1.address,
        name: "first",
        decimals: 8,
        symbol: "hehe",
        irs: ethers.constants.AddressZero,
        ONCHAINID: ethers.constants.AddressZero,
        irAgents: [master.address],
        tokenAgents: [master.address],
        complianceModules: [
          /*supplylimit.address, timeTransfersLimitsModule.address*/
        ],
        complianceSettings: [],
        tokenOwner: master2.address,
        dividend: ethers.constants.AddressZero
      };

      claimDetails = {
        claimTopics: [],
        issuers: [],
        issuerClaims: [],
      };

      console.log("date.no----2222---", parseInt(((Date.now() + 100) / 1000).toString()));
      limitvalues = {
        limitTime: 10, //parseInt(((Date.now() + 100) / 1000).toString()),
        limitValue: convertWithDecimal(10000, 10 ** 18),
      };

      let modules = await modularCompliance.getModules();

      const param1: any = setTokenDetails(tokenDetails);
      const param2: any = setclaimDetails(claimDetails);
      const param3: any = setLimitDetails(limitvalues);


      console.log('object :>> ', await master.DVDND(), param3, param1);

      let tx = await master
        .connect(deployer)
        .deployProject(
          [
            convertWithDecimal(1, 10 ** 18),
            convertWithDecimal(100000000000000, 10 ** 18),
            convertWithDecimal(3, 10 ** 17),
            91,
            convertWithDecimal(1000000000000, 10 ** 18),
          ],
          [91, 12, 11],
          ["hgdhjdkd", "0x00"],
          agent1.address,
          param3,
          param1,
          param2,
        );



      let details = await master.propertyData1(0)
      console.log('details=-=-=-= :>> ', details);

      let receipt = await tx.wait();
      let transactions: any = receipt.events?.filter((x: any) => {
        return x.event == "deployed";
      });
      let event = transactions?.at(0)?.args;
      console.log("y------- :>> ", event, "767988768907=========");


      await usdc.connect(buyer).approve(master.address, convertWithDecimal(1000000000, 10 ** 18));
      console.log("agent1.address :>> ", agent1.address);
      await master.connect(agent1).deployIdentityBind([buyer.address], [event.projectId], ["wqefzdxd"], [88], ["dfsaihc"], ["sdutgu"]);

      console.log("123 :>> ", 123);
      await sleep(3000);
      let usdcAMOUNT = await master2.USDCCalculation(0, convertWithDecimal(1000, 10 ** 18));
      console.log("usdcAMOUNT", usdcAMOUNT);
      await sleep(3000);
      let txn = await master.connect(buyer).buyShare(convertWithDecimal(2, 10 ** 18), convertWithDecimal(1000, 10 ** 18), 0, "dfsggfgfx", 91);
      let receipt1 = await txn.wait();
      let transactions1: any = receipt1.events?.filter((x: any) => {
        return x.event == "buy";
      });
      let event1 = transactions1?.at(0)?.args;
      console.log("y-buyShare------ :>> ", event1, "767988768907=========");


      console.log('balance of issuer1   usdc :>> ', await usdc.balanceOf(issuer1.address));
      await master.connect(agent1).mintTokens([buyer.address], [event.projectId], [event1.buyCounter]);
      console.log('balance of issuer1   usdc 111 :>> ', await usdc.balanceOf(issuer1.address));

    });


    it("checking trex factory yuse case for mint deploytrexsuite", async () => {
      tokenDetails = {
        owner: issuer1.address,
        name: "first",
        decimals: 8,
        symbol: "hehe",
        irs: ethers.constants.AddressZero,
        ONCHAINID: ethers.constants.AddressZero,
        irAgents: [master.address],
        tokenAgents: [master.address],
        complianceModules: [
          /*supplylimit.address, timeTransfersLimitsModule.address*/
        ],
        complianceSettings: [],
      };

      claimDetails = {
        claimTopics: [],
        issuers: [],
        issuerClaims: [],
      };

      console.log("date.now---=-===-=", parseInt(((Date.now() + 100) / 1000).toString()));
      limitvalues = {
        limitTime: 10, //parseInt(((Date.now() + 100) / 1000).toString()),
        limitValue: convertWithDecimal(10000, 10 ** 18),
      };

      let modules = await modularCompliance.getModules();

      const param1: any = setTokenDetails(tokenDetails);
      const param2: any = setclaimDetails(claimDetails);
      const param3: any = setLimitDetails(limitvalues);



      console.log('issuer1.address.deployer.address :>> ', issuer1.address, deployer.address);
      let tx = await master
        .connect(deployer)
        .deployProject(
          [
            convertWithDecimal(1, 10 ** 18),
            convertWithDecimal(100, 10 ** 18),
            convertWithDecimal(3, 10 ** 17),
            91,
            convertWithDecimal(20, 10 ** 18),
          ],
          [91, 12, 11],
          ["hgdhjdkd", "0x00"],
          agent1.address,
          param3,
          param1,
          param2,
        );





      let receipt = await tx.wait();
      let transactions: any = receipt.events?.filter((x: any) => {
        return x.event == "deployed";
      });
      let event = transactions?.at(0)?.args;
      // console.log("y------- :>> ", event, "767988768907=========");


      await usdc.connect(buyer).approve(master.address, convertWithDecimal(1000000000, 10 ** 18));
      console.log("agent1.address :>> ", agent1.address);
      await master.connect(agent1).deployIdentityBind([buyer.address], [event.projectId], ["wqefzdxd"], [88], ["dfsaihc"], ["sdutgu"]);

      console.log("123 :>> ", 123);
      await sleep(3000);
      let usdcAMOUNT = await master2.USDCCalculation(1, convertWithDecimal(20, 10 ** 18));
      // let usdcReal = usdcAMOUNT.value/convertWithDecimal(1,10**18);
      console.log("usdcAMOUNT", usdcAMOUNT);

      await sleep(3000);
      let txn = await master.connect(buyer).buyShare(convertWithDecimal(3, 10 ** 18), convertWithDecimal(10, 10 ** 18), 1, "dfsggfgfx", 91);

      let receipt1 = await txn.wait();
      let transactions1: any = receipt1.events?.filter((x: any) => {
        return x.event == "buy";
      });
      let event1 = transactions1?.at(0)?.args;
      // console.log("y-buyShare------ :>> ", event1, "767988768907=========");

      let txn2 = await master.connect(buyer).buyShare(convertWithDecimal(3, 10 ** 18), convertWithDecimal(10, 10 ** 18), 1, "dfsggfgfx", 91);

      let receipt2 = await txn2.wait();
      let transactions2: any = receipt2.events?.filter((x: any) => {
        return x.event == "buy";
      });
      let event2 = transactions2?.at(0)?.args;
      console.log('event2 :>> ', event2);
      // console.log('balance of issuer1   usdc :>> ', await usdc.balanceOf(issuer1.address));
      await master.connect(agent1).mintTokens([buyer.address], [event.projectId], [event1.buyCounter]);
      // console.log('balance of issuer1   usdc 111 :>> ', await usdc.balanceOf(issuer1.address));


      await master.connect(agent1).mintTokens([buyer.address], [event.projectId], [event2.buyCounter]);

    });




    it.only("checking dividend flow including mint and all", async () => {
      tokenDetails = {
        owner: issuer1.address,
        name: "first",
        decimals: 8,
        symbol: "hehe",
        irs: ethers.constants.AddressZero,
        ONCHAINID: ethers.constants.AddressZero,
        irAgents: [master.address],
        tokenAgents: [master2.address],
        complianceModules: [
          /*supplylimit.address, timeTransfersLimitsModule.address*/
        ],
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
        limitTime: 10, //parseInt(((Date.now() + 100) / 1000).toString()),
        limitValue: convertWithDecimal(10000, 10 ** 18),
      };

      let modules = await modularCompliance.getModules();

      const param1: any = setTokenDetails(tokenDetails);
      const param2: any = setclaimDetails(claimDetails);
      const param3: any = setLimitDetails(limitvalues);


      console.log('master.address :>> ', master.address);

      console.log('object :>> ', await master.DVDND(), param3, param1);

      let tx = await master
        .connect(deployer)
        .deployProject(
          [
            convertWithDecimal(1, 10 ** 18),
            convertWithDecimal(100, 10 ** 18),
            convertWithDecimal(1, 10 ** 18),
            91,
            convertWithDecimal(50, 10 ** 18),
          ],
          [91, 12, 11],
          ["hgdhjdkd", "0x00"],
          agent1.address,
          param3,
          param1,
          param2,
        );



      let details = await master.propertyData1(0)
      console.log('details=-=-=-= :>> ', details);

      let receipt = await tx.wait();
      let transactions: any = receipt.events?.filter((x: any) => {
        return x.event == "deployed";
      });
      let event = transactions?.at(0)?.args;
      console.log("y------- :>> ", event, "767988768907=========");


      await usdc.connect(buyer).approve(master.address, convertWithDecimal(1000000000, 10 ** 18));
      console.log("agent1.address :>> ", agent1.address);
      await master.connect(agent1).deployIdentityBind([buyer.address], [event.projectId], ["wqefzdxd"], [88], ["dfsaihc"], ["sdutgu"]);

      console.log("123 :>> ", 123);
      await sleep(3000);
      let usdcAMOUNT = await master2.USDCCalculation(1, convertWithDecimal(50, 10 ** 18));
      console.log("usdcAMOUNT", usdcAMOUNT);
      await sleep(3000);


      let pId = event.projectId




      // ~~~~~~~~~~~~~~~~~~~~~~~~~🥸🥸🥸🥸🥸🥸🥸🥸🥸    BUYER 1       🥸🥸🥸🥸🥸🥸🥸~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      let txn = await master.connect(buyer).buyShare(convertWithDecimal(50, 10 ** 18), convertWithDecimal(50, 10 ** 18), 1, "dfsggfgfx", 91);
      let receipt1 = await txn.wait();
      let transactions1: any = receipt1.events?.filter((x: any) => {
        return x.event == "buy";
      });
      let event1 = transactions1?.at(0)?.args;
      // console.log("y-buyShare------ :>> ", event1, "767988768907=========");
      await master2.connect(agent1).mintTokens([buyer.address], [pId], [event1.buyCounter]);
      token1 = await new Token__factory(deployer).attach(event.propertyData1.token);
      console.log('balcnceof buyeer :>> ', await token1.balanceOf(buyer.address));





      // ~~~~~~~~~~~~~~~~~~~~~~~~~🥸🥸🥸🥸🥸🥸🥸🥸🥸    BUYER 2     🥸🥸🥸🥸🥸🥸🥸~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      await usdc.connect(buyer2).approve(master.address, convertWithDecimal(1000000000, 10 ** 18));
      console.log("agent1.address :>> ", agent1.address);
      await master.connect(agent1).deployIdentityBind([buyer2.address], [event.projectId], ["wqeuud"], [88], ["dfsaihc"], ["sdutgu"]);

      let txn2 = await master.connect(buyer2).buyShare(convertWithDecimal(50, 10 ** 18), convertWithDecimal(50, 10 ** 18), 1, "dfsggfgfx", 91);
      let receipt2 = await txn2.wait();
      let transactions2: any = receipt2.events?.filter((x: any) => {
        return x.event == "buy";
      });
      let event2 = transactions2?.at(0)?.args;
      // console.log("y-buyShare------ :>> ", event2, "767988768907=========");
      console.log('agent1.address :>> ', agent1.address);
      await master2.connect(agent1).rejectBuy([buyer2.address], [pId], [event2.buyCounter]);
      token1 = await new Token__factory(deployer).attach(event.propertyData1.token);
      console.log('balcnceof buyeer 2:>> ', await token1.balanceOf(buyer2.address));


      // ~~~~~~~~~~~~~~~~~~~~~~~~~🥸🥸🥸🥸🥸🥸🥸🥸🥸    BUYER 3       🥸🥸🥸🥸🥸🥸🥸~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      // await usdc.connect(buyer3).approve(master.address, convertWithDecimal(1000000000, 10 ** 18));
      // console.log("agent1.address :>> ", agent1.address);
      // await master.connect(agent1).deployIdentityBind([buyer3.address], [event.projectId], ["wqeu9xd"], [88], ["dfsaihc"], ["sdutgu"]);

      // let txn3 = await master.connect(buyer3).buyShare(convertWithDecimal(50, 10 ** 18), convertWithDecimal(50, 10 ** 18), 1, "dfsggfgfx", 91);
      // let receipt3 = await txn3.wait();
      // let transactions3: any = receipt3.events?.filter((x: any) => {
      //   return x.event == "buy";
      // });
      // let event3 = transactions3?.at(0)?.args;
      // // console.log("y-buyShare------ :>> ", event2, "767988768907=========");


      // await master2.connect(agent1).mintTokens([buyer3.address], [pId], [event3.buyCounter]);

      // // token1 = await new Token__factory(deployer).attach(event.propertyData1.token);
      // console.log('balcnceof buyeer 2:>> ', await token1.balanceOf(buyer3.address));



      await usdc.connect(deployer).approve(master.address, convertWithDecimal(1000000000, 10 ** 18));
      await token1.connect(buyer).transfer(buyer2.address, convertWithDecimal(10, 10 ** 18));

      // let dividendAddress = await master.propertyData1(1)
      // dividend = await new Dividend__factory(deployer).attach(dividendAddress.dividend)
      // await master.connect(deployer).depositDividendRewards(convertWithDecimal(100, 10 ** 18), 1);


      // console.log('buyer usdc balance :>> ', await usdc.balanceOf(buyer.address));
      // console.log('dividend usdc balance :>> ', await usdc.balanceOf(dividend.address));


      // await master.connect(buyer).claimDividend(1);

      // console.log('buyer usdc balance 2222:>> ', await usdc.balanceOf(buyer.address));

    });



    it("checking dividend flow including mint and all before dividend claim", async () => {
      tokenDetails = {
        owner: issuer1.address,
        name: "first",
        decimals: 8,
        symbol: "hehe",
        irs: ethers.constants.AddressZero,
        ONCHAINID: ethers.constants.AddressZero,
        irAgents: [master.address],
        tokenAgents: [master2.address],
        complianceModules: [
          /*supplylimit.address, timeTransfersLimitsModule.address*/
        ],
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
        limitTime: 0, //parseInt(((Date.now() + 100) / 1000).toString()),
        limitValue: convertWithDecimal(10000, 10 ** 18),
      };

      let modules = await modularCompliance.getModules();

      const param1: any = setTokenDetails(tokenDetails);
      const param2: any = setclaimDetails(claimDetails);
      const param3: any = setLimitDetails(limitvalues);


      console.log('master.address :>> ', master.address);

      console.log('object :>> ', await master.DVDND(), param3, param1);

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
          [],
          ["hgdhjdkd", "0x00"],
          agent1.address,
          param3,
          param1,
          param2,
        );



      let details = await master.propertyData1(0)
      // console.log('details=-=-=-= :>> ', details);

      let receipt = await tx.wait();
      let transactions: any = receipt.events?.filter((x: any) => {
        return x.event == "deployed";
      });
      let event = transactions?.at(0)?.args;
      // console.log("y------- :>> ", event, "767988768907=========");


      await usdc.connect(buyer).approve(master.address, convertWithDecimal(1000000000, 10 ** 18));
      console.log("agent1.address :>> ", agent1.address);
      await master.connect(agent1).deployIdentityBind([buyer.address], [event.projectId], ["wqefzdxd"], [88], ["dfsaihc"], ["sdutgu"]);

      console.log("123 :>> ", 123);
      await sleep(3000);
      let usdcAMOUNT = await master2.USDCCalculation(1, convertWithDecimal(50, 10 ** 18));
      console.log("usdcAMOUNT", usdcAMOUNT);
      await sleep(3000);


      let pId = event.projectId




      // ~~~~~~~~~~~~~~~~~~~~~~~~~🥸🥸🥸🥸🥸🥸🥸🥸🥸    BUYER 1       🥸🥸🥸🥸🥸🥸🥸~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      let txn = await master.connect(buyer).buyShare(convertWithDecimal(50, 10 ** 18), convertWithDecimal(50, 10 ** 18), 1, "dfsggfgfx", 91);
      let receipt1 = await txn.wait();
      let transactions1: any = receipt1.events?.filter((x: any) => {
        return x.event == "buy";
      });
      let event1 = transactions1?.at(0)?.args;
      // console.log("y-buyShare------ :>> ", event1, "767988768907=========");
      await master2.connect(agent1).mintTokens([buyer.address], [pId], [event1.buyCounter]);
      token1 = await new Token__factory(deployer).attach(event.propertyData1.token);
      console.log('balcnceof buyeer :>> ', await token1.balanceOf(buyer.address));





      // ~~~~~~~~~~~~~~~~~~~~~~~~~🥸🥸🥸🥸🥸🥸🥸🥸🥸    BUYER 2     🥸🥸🥸🥸🥸🥸🥸~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      await usdc.connect(buyer2).approve(master.address, convertWithDecimal(1000000000, 10 ** 18));
      console.log("agent1.address :>> ", agent1.address);
      await master.connect(agent1).deployIdentityBind([buyer2.address], [event.projectId], ["wqeuud"], [88], ["dfsaihc"], ["sdutgu"]);

      let txn2 = await master.connect(buyer2).buyShare(convertWithDecimal(50, 10 ** 18), convertWithDecimal(50, 10 ** 18), 1, "dfsggfgfx", 91);
      let receipt2 = await txn2.wait();
      let transactions2: any = receipt2.events?.filter((x: any) => {
        return x.event == "buy";
      });
      let event2 = transactions2?.at(0)?.args;
      // console.log("y-buyShare------ :>> ", event2, "767988768907=========");
      await master2.connect(agent1).mintTokens([buyer2.address], [pId], [event2.buyCounter]);
      token1 = await new Token__factory(deployer).attach(event.propertyData1.token);
      console.log('balcnceof buyeer 2:>> ', await token1.balanceOf(buyer2.address));


      await master2.connect(agent1).freezeTokens([buyer.address, buyer2.address], [convertWithDecimal(20, 10 ** 18), convertWithDecimal(30, 10 ** 18)], [1, 1])


      // ~~~~~~~~~~~~~~~~~~~~~~~~~🥸🥸🥸🥸🥸🥸🥸🥸🥸    BUYER 3       🥸🥸🥸🥸🥸🥸🥸~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      // await usdc.connect(buyer3).approve(master.address, convertWithDecimal(1000000000, 10 ** 18));
      // console.log("agent1.address :>> ", agent1.address);
      // await master.connect(agent1).deployIdentityBind([buyer3.address], [event.projectId], ["wqeu9xd"], [88], ["dfsaihc"], ["sdutgu"]);

      // let txn3 = await master.connect(buyer3).buyShare(convertWithDecimal(50, 10 ** 18), convertWithDecimal(50, 10 ** 18), 1, "dfsggfgfx", 91);
      // let receipt3 = await txn3.wait();
      // let transactions3: any = receipt3.events?.filter((x: any) => {
      //   return x.event == "buy";
      // });
      // let event3 = transactions3?.at(0)?.args;
      // // console.log("y-buyShare------ :>> ", event2, "767988768907=========");


      // await master2.connect(agent1).mintTokens([buyer3.address], [pId], [event3.buyCounter]);

      // // token1 = await new Token__factory(deployer).attach(event.propertyData1.token);
      // console.log('balcnceof buyeer 2:>> ', await token1.balanceOf(buyer3.address));

      console.log("🥸🥸🥸🥸🥸🥸🥸🥸🥸    BUYER132      🥸🥸🥸🥸🥸🥸🥸");

      // await usdc.connect(deployer).approve(master.address, convertWithDecimal(1000000000, 10 ** 18));


      // console.log("erc20.address :>> ", await usdc.balanceOf(deployer.address));
      // await usdc.connect(deployer).mint(deployer.address, convertWithDecimal(100, 10 ** 18))

      // let dividendAddress = await master.propertyData1(1)
      // dividend = await new Dividend__factory(deployer).attach(dividendAddress.dividend)
      // await master.connect(deployer).depositDividendRewards(convertWithDecimal(100, 10 ** 18), 1);


      // console.log('buyer usdc balance :>> ', await usdc.balanceOf(buyer.address));
      // console.log('dividend usdc balance :>> ', await usdc.balanceOf(dividend.address));


      // token = await new Token__factory(buyer).attach(dividendAddress.token)

      // await token.connect(buyer).transfer(buyer2.address, convertWithDecimal(25, 10 ** 18))
      // console.log('dividend.address :>> ', dividend.address);
      // // await master.connect(buyer).claimDividend(1);
      // console.log('buyer1 pending rewards :>> ', await dividend.calculateTokenewards(buyer.address));
      // console.log('buyer2 pending rewards :>> ', await dividend.calculateTokenewards(buyer2.address));
      // console.log('buyer3 pending rewards :>> ', await dividend.calculateTokenewards(buyer3.address));


      // console.log('buyer usdc balance 2222:>> ', await token.balanceOf(buyer.address));
      // console.log('buyer2 token balance 2222:>> ', await token.balanceOf(buyer2.address));

      // await master.connect(deployer).depositDividendRewards(convertWithDecimal(100, 10 ** 18), 1);


      // console.log('buyer1 pending rewards :>> ', await dividend.calculateTokenewards(buyer.address));
      // console.log('buyer2 pending rewards :>> ', await dividend.calculateTokenewards(buyer2.address));
      // console.log('buyer3 pending rewards :>> ', await dividend.calculateTokenewards(buyer3.address));
    });
  });
});
