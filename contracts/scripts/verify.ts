const hre = require("hardhat");

async function main() {

  // await hre.run("verify:verify", {
  //   //Deployed contract address
  //   address: "0xBDd42773555E87141a9E549e1Cf321c7496C12E8",
  //   //Pass arguments as string and comma seprated values
  //   constructorArguments: ["0x5e82D707EF9A86e0e8682b34Aa4421254bFA2cF4"],
  //   //Path of your main contract.
  //   contract: "contracts/Master2.sol:Master2",
  // });


  await hre.run("verify:verify", {
    //Deployed contract address
    address: "0x6216ced7F5052912eEbA0fFdFFc0C1dc1fb45801",
    //Pass arguments as string and comma seprated values
    constructorArguments: [""],
    //Path of your main contract.
    contract: "contracts/Master.sol:Master",
  });

  // await hre.run("verify:verify", {
  //   //Deployed contract address
  //   address: "0x5e82D707EF9A86e0e8682b34Aa4421254bFA2cF4",
  //   //Pass arguments as string and comma seprated values
  //   constructorArguments: [],
  //   //Path of your main contract.
  //   contract: "contracts/proxy/OwnedUpgradeabilityProxy.sol:OwnedUpgradeabilityProxy",
  // });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//npx hardhat run --network rinkeby  scripts/verify.ts
