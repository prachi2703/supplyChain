const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
const infuraKey = "83b7838c779c40d6a705ea01dead41ef";


const mnemonic = fs.readFileSync("../.secret").toString().trim();
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // Rinkeby's id
      gas: 4612388,        // Rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  }
};