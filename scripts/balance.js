const { ethers } = require("hardhat");

async function main() {
  // Get the DegenToken smart contract factory
  const DegenToken = await ethers.getContractFactory("DegenToken");

  // Deploy the contract
  const degenToken = await DegenToken.deploy();
  await degenToken.deployed();

  // Get the owner address
  const owner = await degenToken.owner();

  // Fetch and display the owner's Degen token balance
  const ownerBalance = await degenToken.balanceOf(owner);
  console.log("Owner's Degen token balance:", ownerBalance.toString());
}

// Execute the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
