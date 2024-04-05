const { ethers } = require("hardhat");

async function main() {
  // Get the DegenToken smart contract factory
  const DegenToken = await ethers.getContractFactory("DegenToken");

  // Deploy the contract
  const degenToken = await DegenToken.deploy();
  await degenToken.deployed();

  // Display the contract address
  console.log("DegenToken deployed to:", degenToken.address);

  // Get the owner address
  const owner = await degenToken.owner();
  console.log("Owner address:", owner.toString());

  // Mint tokens to the owner
  const amountToMint = ethers.utils.parseEther("1000000"); // Mint 1 million tokens
  await degenToken.mint(owner, amountToMint);
  console.log("Minted 1 million Degen tokens to owner.");
}

// Execute the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

module.exports = main; // Export the main function
