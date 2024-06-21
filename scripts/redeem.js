const { ethers } = require("hardhat");

async function main() {
  const DegenToken = await ethers.getContractFactory("DegenToken");
  const degenToken = await DegenToken.deploy();
  await degenToken.deployed();

  const userAddress = await degenToken.signer.getAddress();
 
  const swordPrices = {
    "Longclaw": await degenToken.swordPrices("Longclaw"),
    "Ice": await degenToken.swordPrices("Ice"),
    "Oathkeeper": await degenToken.swordPrices("Oathkeeper"),
    "Widow's Wail": await degenToken.swordPrices("Widow's Wail"),
    "Heartsbane": await degenToken.swordPrices("Heartsbane"),
    "Dawn": await degenToken.swordPrices("Dawn"),
    "Blackfyre": await degenToken.swordPrices("Blackfyre"),
    "Dark Sister": await degenToken.swordPrices("Dark Sister"),
    "Needle": await degenToken.swordPrices("Needle"),
    "Lightbringer": await degenToken.swordPrices("Lightbringer")
  };

  console.log("Sword Prices:", swordPrices);

  const amountToRedeem = ethers.utils.parseEther("220");
  await degenToken.redeem(amountToRedeem);

  const redeemedItem = await degenToken.getRedeemedItem(userAddress);

  console.log("Tokens redeemed successfully. You received:", redeemedItem);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error redeeming tokens:", error);
    process.exit(1);
  });
