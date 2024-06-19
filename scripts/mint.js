const { ethers } = require("hardhat");

async function main() {
  const DegenToken = await ethers.getContractFactory("DegenToken");
  const degenToken = await DegenToken.deploy();
  await degenToken.deployed();

  console.log("DegenToken deployed to:", degenToken.address);

  const owner = await degenToken.owner();
  console.log("Owner address:", owner.toString());

  const amountToMint = ethers.utils.parseEther("2000000");
  await degenToken.mint(owner, amountToMint);
  console.log("Minted 2 million Degen tokens to owner.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
