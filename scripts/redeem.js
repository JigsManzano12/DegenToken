const { ethers } = require("hardhat");

async function main() {
  const DegenToken = await ethers.getContractFactory("DegenToken");
  const degenToken = await DegenToken.deploy();
  await degenToken.deployed();

  const swords = [
    "Longclaw",
    "Ice",
    "Oathkeeper",
    "Widow's Wail",
    "Heartsbane",
    "Dawn",
    "Blackfyre",
    "Dark Sister",
    "Needle",
    "Lightbringer"
  ];

  const randomSword = swords[Math.floor(Math.random() * swords.length)];

  async function redeemTokenForSword(tokenAmount, sword) {
    console.log(`Attempting to redeem ${ethers.utils.formatEther(tokenAmount)} tokens for ${sword}...`);
    await degenToken.redeem(tokenAmount);
    console.log(`Successfully redeemed ${ethers.utils.formatEther(tokenAmount)} tokens for ${sword}.`);
  }

  const amountToRedeem = ethers.utils.parseEther("100");
  await redeemTokenForSword(amountToRedeem, randomSword);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error redeeming tokens:", error);
    process.exit(1);
  });
