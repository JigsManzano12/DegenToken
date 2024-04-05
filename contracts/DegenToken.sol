// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DegenToken is ERC20, Ownable {
    
    constructor() ERC20("Degen", "DGN") {
        _mint(msg.sender, 1000000 * 10 ** uint(decimals()));
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        _transfer(_msgSender(), to, amount);
        return true;
    }

    // Define the redeem function
    function redeem(uint256 amount) external {
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        _burn(msg.sender, amount);
    }

    function checkBalance(address account) public view returns (uint256) {
        return balanceOf(account);
    }

    function burn(uint256 amount) public {
        _burn(_msgSender(), amount);
    }
}
