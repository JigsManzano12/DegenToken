const { ethers } = require("hardhat");

async function main() {
  const DegenToken = await ethers.getContractFactory("DegenToken");
  const degenToken = await DegenToken.deploy();
  await degenToken.deployed();

  const owner = await degenToken.owner();

  const ownerBalance = await degenToken.balanceOf(owner);
  console.log("Owner's initial Degen token balance:", ownerBalance.toString());

  const amountToBurn = ethers.utils.parseEther("300");
  if (ownerBalance.lt(amountToBurn)) {
    console.error("Error: Insufficient balance to burn the specified amount");
    return;
  }

  await degenToken.burn(amountToBurn);
  console.log("Successfully burned 300 Degen tokens from owner's account.");

  const ownerBalanceAfterBurn = await degenToken.balanceOf(owner);
  console.log("Owner's Degen token balance after burning:", ownerBalanceAfterBurn.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("An error occurred while burning tokens:", error);
    process.exit(1);
  });
