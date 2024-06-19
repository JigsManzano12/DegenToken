const { ethers } = require("hardhat");

async function main() {
  const DegenToken = await ethers.getContractFactory("DegenToken");
  const degenToken = await DegenToken.deploy();
  await degenToken.deployed();

  const amountToRedeem = ethers.utils.parseEther("100");
  await degenToken.redeem(amountToRedeem);

  console.log("Tokens redeemed successfully.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error redeeming tokens:", error);
    process.exit(1);
  });
