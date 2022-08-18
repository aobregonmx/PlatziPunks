require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const RINKEBY_RPC_URL = process.env.INFURA;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    rinkeby: {
      url:`https://rinkeby.infura.io/v3/${RINKEBY_RPC_URL}`,
      accounts:[PRIVATE_KEY]
    }
  }
};
