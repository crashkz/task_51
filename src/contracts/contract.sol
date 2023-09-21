// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.19;

contract Test{
    int number;
    string str;
    int[] array;

    function setNumber(int _number) public {
        number = _number;
    }

    function setStr(string memory _str) public {
        str = _str;
    }

    function setArray(int[] memory _array) public {
        array = _array;
    }

    function getNumber() public view returns (int) {
        return number;
    }

    function getStr() public view returns (string memory) {
        return str;
    }

    function getArray() public view returns (int[] memory) {
        return array;
    }
}