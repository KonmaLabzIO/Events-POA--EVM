require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",
  paths:{
    sources: "./blockchain/contracts",
    tests: "./blockchain/tests",
    cache: "./blockchain/cache",
    artifacts: "./blockchain/artifacts",
  },
  networks:{
    mumbai:{
      url: process.env.MUMBAI_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },
    bsctestnet:{
      url: process.env.BSCTESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
