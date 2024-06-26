// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DegenToken is ERC20, Ownable {
    string[] private swords = [
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

    mapping(string => uint256) public swordPrices;
    mapping(address => string) public redeemedItems;

    constructor() ERC20("Degen", "DGN") {
        _mint(msg.sender, 1000000 * 10 ** uint(decimals()));

        swordPrices["Longclaw"] = 100 * 10 ** uint(decimals());
        swordPrices["Ice"] = 200 * 10 ** uint(decimals());
        swordPrices["Oathkeeper"] = 150 * 10 ** uint(decimals());
        swordPrices["Widow's Wail"] = 180 * 10 ** uint(decimals());
        swordPrices["Heartsbane"] = 130 * 10 ** uint(decimals());
        swordPrices["Dawn"] = 210 * 10 ** uint(decimals());
        swordPrices["Blackfyre"] = 170 * 10 ** uint(decimals());
        swordPrices["Dark Sister"] = 160 * 10 ** uint(decimals());
        swordPrices["Needle"] = 90 * 10 ** uint(decimals());
        swordPrices["Lightbringer"] = 220 * 10 ** uint(decimals());
    }

    function checkBalance(address account) public view returns (uint256) {
        return balanceOf(account);
    }

    function burn(uint256 amount) public {
        _burn(_msgSender(), amount);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        _transfer(_msgSender(), to, amount);
        return true;
    }

    function redeem(uint256 amount) external {
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");

        uint256 randomIndex = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % swords.length;
        string memory sword = swords[randomIndex];

        uint256 swordPrice = swordPrices[sword];
        require(amount >= swordPrice, "Insufficient tokens to redeem this sword");

        _burn(msg.sender, swordPrice);

        redeemedItems[msg.sender] = sword;
    }

    function getRedeemedItem(address account) external view returns (string memory) {
        return redeemedItems[account];
    }
}
