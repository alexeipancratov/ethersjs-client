// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract SimpleStorage {
    uint256 private value;
    event IncrementValue(uint256 indexed oldValue, uint256 indexed newValue);

    function incrementValue() public {
        uint256 oldValue = value;
        increment();
        emit IncrementValue(oldValue, value);
    }
    
    function increment() private {
        value++;
    }

    function decrementValue() public {
        value--;
    }
    
    function getValue() public view returns(uint256) {
        return value;
    }
}