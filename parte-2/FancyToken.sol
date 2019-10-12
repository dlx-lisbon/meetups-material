pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract FancyToken is ERC20, ERC20Detailed {
    constructor() ERC20Detailed("FancyToken", "FANCY", 18) public {
    }
}