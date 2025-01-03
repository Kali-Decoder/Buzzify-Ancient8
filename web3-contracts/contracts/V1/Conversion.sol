// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";

contract Conversion {
    IERC20 public USDe;
    IERC20 public buzz;
    address public owner;

    constructor(address _USDe, address _buzz) {
        USDe = IERC20(_USDe);
        buzz = IERC20(_buzz);
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    // 1:10
    // for 1 USDe you will get 10 buzz
    // Both Token are of 18 decimals not calculation needed

    function convertUSDetoBuzz(uint256 _amount) public {
        USDe.transferFrom(msg.sender, address(this), _amount);
        uint256 buzzAmount = _amount * 10;
        buzz.transfer(msg.sender, buzzAmount);
    }

    function convertBuzztoUSDe(uint256 _amount) public {
        buzz.transferFrom(msg.sender, address(this), _amount);
        uint256 USDeAmount = _amount / 10;
        USDe.transfer(msg.sender, USDeAmount);
    }

    function withdrawFunds(address _token, uint256 _amount) public onlyOwner {
        IERC20 token = IERC20(_token);
        token.transfer(msg.sender, _amount);
    }
}