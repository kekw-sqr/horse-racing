pragma solidity ^0.8.0;

import "../interfaces/IPOSDAORandom.sol";

contract POSDAORandomMock is IPOSDAORandom {
    uint256 seed;

    function collectRoundLength() override external view returns(uint256) {
        return 10;
    }

    function currentSeed() override external view returns(uint256) {
        return seed;
    }

    function isCommitPhase() override external view returns(bool) {
        return true;
    }

    function setSeed(uint256 _seed) public {
        seed = _seed;
    }
}