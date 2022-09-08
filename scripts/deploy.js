const { ethers } = require("hardhat");

// Deploy es una funcion asincrona
const deploy = async () => {
    // Get private keys
    // getSigners()
    // Deployer is an object that allows us to deploy smart contract with the network config
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with the account: ", deployer.address);
    const PlatziPunks = await ethers.getContractFactory("PlatziPunks");
    const deployed = await PlatziPunks.deploy(10000);

    console.log("PlatziPunks has been deployed at: ", deployed.address)
}

deploy()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });