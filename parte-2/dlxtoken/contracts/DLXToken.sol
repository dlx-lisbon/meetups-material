pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";

/**
 * DLX token contract.
 */
contract DLXToken is ERC20, ERC20Detailed, Ownable {
    address[] public participants;

    /**
     * DLX token constructor.
     * @param _participants list of participants' addresses
     */
    constructor(address[] _participants)
        ERC20Detailed("DLXToken", "DLX", 18)
        public
    {
        _mintForParticipants(1000);
        // make the multisig wallet the owner
        _transferOwnership(msg.sender);
    }

    /**
     * public method used only by the owner to mint new tokens.
     * @param _amount amount to be minted for each participant
     */
    function mint(uint256 _amount) public onlyOwner {
        _mintForParticipants(_amount);
    }

    /**
     * private method to mint a given ammount
     * of tokens to each participant.
     * @param _amount amount to be minted for each participant
     */
    function _mintForParticipants(uint256 _amount) private {
        // mint _amount tokens to each participant
        uint256 nUsers = _participants.length;
        for (uint256 u = 0; u < nUsers; u += 1) {
            participants.push(_participants);
            _mint(_participants[u], _amount);
        }
    }
}