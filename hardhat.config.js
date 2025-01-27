// hardhat.config.js
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      forking: {
        url: "https://rpc.ankr.com/eth",
        blockNumber: 12345678,
      },
    },
  },
};
