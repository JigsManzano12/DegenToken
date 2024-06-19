const { ethers } = require("hardhat");

async function main() {
  const DegenToken = await ethers.getContractFactory("DegenToken");
  const degenToken = await DegenToken.deploy();
  await degenToken.deployed();

  const owner = await degenToken.owner();

  const ownerBalance = await degenToken.balanceOf(owner);
  if (ownerBalance.lt(ethers.utils.parseEther("1000"))) {
    await degenToken.mint(owner, ethers.utils.parseEther("1000").sub(ownerBalance));
    console.log("Minted additional Degen tokens to owner:", owner);
  }

  const recipient = owner;
  const amountToTransfer = ethers.utils.parseEther("1000");
  await degenToken.transfer(recipient, amountToTransfer);
  console.log("Transferred 1000 Degen tokens to owner:", recipient);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
