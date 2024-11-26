require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = "fe22e08c4c07b0542221677f3af0d9450525cef20a15b2b65754262375fe8e03";

module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    bnbTestnet: {
      url: `https://bsc-testnet-rpc.publicnode.com`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};