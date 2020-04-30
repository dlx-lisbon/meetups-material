pragma solidity ^0.5.10;

contract MyContract {

    uint public x;

    constructor(uint256 _x) public {
        x = _x;
    }

    function updateX(uint256 _x) public {
        x = _x;
    }
}