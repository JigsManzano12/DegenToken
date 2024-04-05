const { ethers } = require("hardhat");

async function main() {
  // Get the DegenToken smart contract factory
  const DegenToken = await ethers.getContractFactory("DegenToken");

  // Deploy the contract
  const degenToken = await DegenToken.deploy();
  await degenToken.deployed();

  // Get the owner address
  const owner = await degenToken.owner();

  // Check the owner's balance before burning
  const ownerBalance = await degenToken.balanceOf(owner);
  console.log("Owner's Degen token balance before burn:", ownerBalance.toString());

  // Check if the owner has enough tokens to burn
  const amountToBurn = ethers.utils.parseEther("500"); // Burn 500 tokens
  if (ownerBalance.lt(amountToBurn)) {
    console.error("Error: Burn amount exceeds owner's balance");
    return;
  }

  // Burn tokens from the owner
  await degenToken.burn(amountToBurn);
  console.log("Burned 500 Degen tokens from owner.");

  // Check the owner's balance after burning
  const ownerBalanceAfterBurn = await degenToken.balanceOf(owner);
  console.log("Owner's Degen token balance after burn:", ownerBalanceAfterBurn.toString());
}

// Execute the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
