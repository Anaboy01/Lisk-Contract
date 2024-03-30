const hre = require('hardhat');

async function main() {
    const StakeToken = await hre.ethers.getContractFactory("StakeToken");
    const stakeToken = await StakeToken.deploy(1000);
    await stakeToken.deployed();

    console.log("StakeToken deployed at:", stakeToken.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});