require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition-ethers");
import('hardhat/config.js').HardhatUserConfig 

module.exports = {
  solidity: "0.8.27",
  networks: {
    hardhat: {
      forking: {
        url: "https://mainnet.infura.io/v3/0a17be4969ed49c295ead2b7a3e0adfe",
      }
    },
   amoy: {
      url: 'https://polygon-amoy.infura.io/v3/0a17be4969ed49c295ead2b7a3e0adfe',
      accounts: [`0x8c14e0d7c2e38c2d8656a7220a9b0acf96daa2cb3bab05ae5481779f8a4c9ed3`],
   }
  }
};
