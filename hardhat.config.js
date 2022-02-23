/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle")
 require("@nomiclabs/hardhat-truffle5");
 require("@nomiclabs/hardhat-etherscan");
  // require("solidity-coverage");
  
  // require('hardhat-spdx-license-identifier');
  // require("hardhat-gas-reporter");
  const CONFIG = require("../BEES-NFT/scripts/credentials.json");
  
  module.exports = {
      solidity: {
          compilers: [
              {
                  version: "0.8.4",
                  settings: {
                      optimizer: {
                          enabled: true,
                          runs: 1000,
                      },
                  },
              },
              {
                 version: "0.7.0",
                 settings: {
                     optimizer: {
                         enabled: true,
                         runs: 1000,
                     },
                 },
             },
          ],
      },
      spdxLicenseIdentifier: {
          overwrite: true,
          runOnCompile: true,
      },
      // gasReporter: {
      //     currency: 'USD',
      //     gasPrice: 1
      // },
      defaultNetwork: "hardhat",
      mocha: {
          timeout: 1000000000000,
      },
  
      networks: {
     //      hardhat: {
     //          blockGasLimit: 10000000000000,
     //          allowUnlimitedContractSize: true,
     //          timeout: 1000000000000,
     //          accounts: {
     //              accountsBalance: "10000000000000000000000000000000000",
     //              count: 20,
     //          },
     //      },
     //      bscMainnet: {
     //         url: `https://bsc-dataseed.binance.org/`,
     //         accounts: [CONFIG.wallet.PKEY],
     //         gasPrice: 30000000000,
     //     },
     //      bscTestnet: {
     //          url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
     //          accounts: [CONFIG.wallet.PKEY],
     //          gasPrice: 30000000000,
     //      },
         rinkeby: {
             url: CONFIG["RINKEBY"]["URL"],
             accounts: [CONFIG["RINKEBY"]["PKEY"]],
         },
      },
      etherscan: {
          apiKey: "6WXM3S7GRG2CYWZ61EIAIJR8AVUM8NSW47"
      }, 
  
      contractSizer: {
          alphaSort: false,
          runOnCompile: true,
          disambiguatePaths: false,
      }
  };
  