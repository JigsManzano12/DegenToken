const { ethers } = require("hardhat");

async function main() {
  // Get the DegenToken smart contract interface
  const DegenToken = await ethers.getContractFactory("DegenToken");

  // Get the deployed contract instance
  const degenToken = await DegenToken.deploy();
  await degenToken.deployed();

  // Redeem tokens (replace 100 with the actual amount)
  const amountToRedeem = ethers.utils.parseEther("100"); // Redeem 100 tokens
  await degenToken.redeem(amountToRedeem);

  console.log("Tokens redeemed successfully.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error redeeming tokens:", error);
    process.exit(1);
  });
