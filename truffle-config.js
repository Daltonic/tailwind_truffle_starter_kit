// require('babel-register')
// require('babel-polyfill')
require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
  // Configure networks (Localhost, Rinkeby, etc.)
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.11',
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
