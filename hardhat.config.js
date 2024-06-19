require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const FORK_FUJI = false;
const FORK_MAINNET = false;
let forkingData;

if (FORK_MAINNET) {
  forkingData = { url: "https://api.avax.network/ext/bc/C/rpc" };
} else if (FORK_FUJI) {
  forkingData = { url: "https://api.avax-test.network/ext/bc/C/rpc" };
}

module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      gasPrice: 225000000000,
      chainId: forkingData ? undefined : 43112,
      forking: forkingData,
      ens: false
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: []
    },
    mainnet: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: []
    }
  },
  etherscan: {
    apiKey: process.env.SNOWTRACE_API_KEY
  }
};
