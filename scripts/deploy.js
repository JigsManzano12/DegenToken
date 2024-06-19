const { ethers } = require("hardhat");

async function main() {
  const YourToken = await ethers.getContractFactory("DegenToken"); 
  const yourToken = await YourToken.deploy();
  await yourToken.deployed();

  console.log("YourToken deployed to:", yourToken.address);

  const owner = await yourToken.owner();
  console.log("Owner address:", owner.toString());

  const amountToMint = ethers.utils.parseEther("1000000");
  await yourToken.mint(owner, amountToMint);
  console.log("Minted 1 million YourToken tokens to owner.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
