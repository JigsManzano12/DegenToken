const { ethers } = require("hardhat");

async function main() {
  const DegenToken = await ethers.getContractFactory("DegenToken");
  const degenToken = await DegenToken.deploy();
  await degenToken.deployed();

  const owner = await degenToken.owner();
  const ownerBalance = await degenToken.balanceOf(owner);
  console.log("Owner's DegenToken balance:", ethers.utils.formatUnits(ownerBalance.toString(), "ether")); 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
