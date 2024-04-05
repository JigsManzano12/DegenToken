const { ethers } = require("hardhat");

async function main() {
  // Get the DegenToken smart contract factory
  const DegenToken = await ethers.getContractFactory("DegenToken");

  // Deploy the contract
  const degenToken = await DegenToken.deploy();
  await degenToken.deployed();

  // Get the owner address
  const owner = await degenToken.owner();

  // Mint tokens to the owner if the owner's balance is insufficient
  const ownerBalance = await degenToken.balanceOf(owner);
  if (ownerBalance.lt(ethers.utils.parseEther("1000"))) {
    await degenToken.mint(owner, ethers.utils.parseEther("1000").sub(ownerBalance));
    console.log("Minted additional Degen tokens to owner:", owner);
  }

  // Transfer tokens to the owner's address
  const recipient = owner; // Set recipient address to the owner's address
  const amountToTransfer = ethers.utils.parseEther("1000"); // Transfer 1000 tokens
  await degenToken.transfer(recipient, amountToTransfer);
  console.log("Transferred 1000 Degen tokens to owner:", recipient);
}

// Execute the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
