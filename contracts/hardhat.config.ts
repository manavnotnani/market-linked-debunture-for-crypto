import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-contract-sizer";
import dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/types";

dotenv.config();
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

export default {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      // accounts: [process.env.RINKYBY_PRIVATE_KEY],
      accounts: {
        mnemonic: process.env.TESTNET_MNEMONIC,
      },
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.TESTNET_PRIVATE_KEY],
      // accounts: {
      //   mnemonic: process.env.TESTNET_MNEMONIC,
      // },
    },
    mumbai: {
      url: `https://ancient-serene-owl.matic-testnet.quiknode.pro/7b4b383e4aba43e1d300cca6ccf099c44aaa0b06/`,
      accounts: [process.env.TESTNET_PRIVATE_KEY],
      // accounts: {
      //   mnemonic: process.env.TESTNET_MNEMONIC,
      // },
    },
    gather: {
      url: "https://testnet.gather.network",
      chainId: 356256156,
      accounts: [process.env.TESTNET_PRIVATE_KEY],
      // accounts: {
      //   mnemonic: "isolate fish scrub step venture extra pledge movie bleak address ocean include",
      // },
    },
    ethereum: {
      url: `https://mainnet.infura.io/v3/126645b7f17e4ee4bd2fee3847ebee5d`,
      // accounts: [process.env.TESTNET_PRIVATE_KEY],
      accounts: {
        mnemonic: process.env.TESTNET_MNEMONIC,
      },
    },
    testnet: {
      url: "https://bsc-testnet.blockpi.network/v1/rpc/348d6a5d4703d8170aeb305c9a3167ffe6c07b78",
      chainId: 97,
      accounts: [process.env.TESTNET_PRIVATE_KEY],
      gasLimit: 1000000000, // Adjust gas limit as needed
      // accounts: {
      //   mnemonic: process.env.TESTNET_MNEMONIC,
      // },
    },
    hardhat: {
      accounts: {
        mnemonic: process.env.TESTNET_MNEMONIC,
        count: 1500,
      },
      chainId: 1337,
    },
    BinanceMainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: {
        mnemonic: process.env.TESTNET_MNEMONIC,
      },
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_FOR_BSC,
    // apiKey: process.env.API_MUMBAI,
  },

  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
    viaIR: true,
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
    // paths: ['contracts/*', 'node_modules/@onchain-id/solidity/contracts/factory/IdFactory.sol'],
  },

  gasReporter: {
    enabled: false,
  },
  mocha: {
    timeout: 2000000,
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: false,
    strict: true,
  },
};
