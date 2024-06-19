# Degen Gaming Token

The Degen Gaming Token is an ERC-20 token deployed on the Avalanche blockchain for Degen Gaming, a prominent game studio. It acts as a reward system for players to earn and trade tokens for in-game rewards, aiming to enhance player loyalty and retention through smooth transactions, economical fees, and rapid processing.

## Features

- **Reward System**: Earn tokens for achievements and activities in Degen Gaming's games.
- **In-game Transactions**: Exchange tokens for in-game items and rewards.
- **Enhanced Player Engagement**: Boosts engagement and retention with tangible rewards.


## Getting Started

### Installing

To use the Degen Gaming Token, you don't need to download anything as it's deployed on the Avalanche blockchain. 
However, you may need to interact with the token using a compatible wallet or through smart contracts.

### Executing program

To interact with the Degen Gaming Token, you can deploy smart contracts, call functions, or use wallets compatible with the Avalanche network.

After cloning the repository for Gitpod, follow these steps to run all the scripts:

1. Open your terminal in Gitpod.
2. Run the following commands sequentially to interact with the token:

### Deploy the Degen Gaming Token contract
```
npx hardhat run scripts/deploy.js
```
This command deploys the smart contract for the Degen Gaming Token on the Avalanche blockchain. It initializes the token and makes it ready for use within the Degen Gaming ecosystem.
### Mint new tokens
```
npx hardhat run scripts/mint.js
```
This command mints new Degen Gaming Tokens. Minting means creating new tokens and adding them to the total supply. It's typically used to generate tokens for distribution or rewards.
### Transfer tokens to another address
```
npx hardhat run scripts/transfer.js
```
This command transfers Degen Gaming Tokens from one address to another on the Avalanche blockchain. It allows users to send tokens to different addresses, facilitating transactions and exchanges within the game ecosystem.
### Burn tokens
```
npx hardhat run scripts/burn.js
```
This command burns (destroys) Degen Gaming Tokens from the total supply. Burning tokens reduces the total number in circulation permanently, often used to manage token supply or as part of token economics.
### Check the owner's balance
```
npx hardhat run scripts/balance.js
```
This command checks the balance of Degen Gaming Tokens owned by the contract owner or a specified address. It provides visibility into how many tokens an address holds at a given time.
### Redeem tokens for in-game items
```
npx hardhat run scripts/redeem.js
```
This command allows users to redeem Degen Gaming Tokens for in-game items or rewards from a designated store. It facilitates the exchange of tokens for tangible benefits within the Degen Gaming ecosystem.

## Help

If you encounter any issues or need assistance, feel free to reach out to the contributors.

## Authors

Gerard Jose L. Manzano [YouTube channel](https://www.youtube.com/channel/UCqnpVDK-Ym41W1WDvBMmN6w)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
