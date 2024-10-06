//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
contract priceFeedContract {
    address[6] addressesArray;

    constructor (address[6] memory contractAddressArray) {
        for(uint i = 0 ; i < 6 ; i++) {
            addressesArray[i] = contractAddressArray[i];
        }
    }

    function getPrices() public {
        for(uint i = 0 ; i < 6; i++) {
           AggregatorV3Interface priceFeed = AggregatorV3Interface(addressesArray[i]);
            ( , int256 answer , , , ) = priceFeed.latestRoundData();
            emit addresses(addressesArray[i], answer);
        }
    }

    event addresses(address indexed contractAddress, int256 answer);
}