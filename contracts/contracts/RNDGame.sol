//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IPOSDAORandom.sol";

contract RNDGame is Ownable {
    IPOSDAORandom private rnd;
    uint256 public roundId;
    uint256 public numOutcomes;
    IERC20 public token;
    struct UserBet {
        address addr;
        uint256 amount;
    }
    // round -> outcome
    mapping(uint256 => uint256) private outcomes;
    // round -> outcome -> participants
    mapping(uint256 => mapping(uint256 => UserBet[])) bets;
    mapping(address => uint256) private balances;
    uint256[] rewardPerOutcome;
    uint256 roundBlockStart;
    uint256 blocksPerRound;

    constructor(
        IPOSDAORandom _rnd,
        IERC20 _token,
        uint256[] memory _rewardPerOutcome,
        uint256 _blocksPerRound
    ) {
        rnd = _rnd;
        token = _token;
        rewardPerOutcome = _rewardPerOutcome;
        numOutcomes = rewardPerOutcome.length;
        blocksPerRound = _blocksPerRound;

        roundBlockStart = block.number;
    }

    event Deposit(address indexed user, uint256 amount);
    event Withdraw(address indexed user, uint256 amount);
    event Bet(uint256 indexed roundId, address indexed user, uint256 amount);
    event Win(uint256 indexed roundId, address indexed user, uint256 amount);
    event Lose(uint256 indexed roundId, address indexed user, uint256 amount);

    function deposit(uint256 amount) external {
        token.transferFrom(msg.sender, address(this), amount);
        balances[msg.sender] = amount;
        emit Deposit(msg.sender, amount);
    }

    function withdraw(uint256 amount) external {
        require(amount <= balances[msg.sender], "withdraw amount too big");
        balances[msg.sender] -= amount;
        token.transfer(msg.sender, amount);
        emit Withdraw(msg.sender, amount);
    }

    function balanceOf(address account) public view virtual returns (uint256) {
        return balances[account];
    }

    function placeBet(uint256 outcome, uint256 amount) public {
        require(rnd.isCommitPhase(), "no bets at reveal phase");
        require(amount <= balances[msg.sender], "not enough tokens");
        balances[msg.sender] -= amount;
        bets[roundId][outcome].push(UserBet(msg.sender, amount));
        emit Bet(roundId, msg.sender, amount);
    }

    function finalizeRound() external returns (uint256) {
        require(
            block.number - roundBlockStart >= blocksPerRound,
            "round in progress"
        );
        uint256 outcome = rnd.currentSeed() % numOutcomes;
        outcomes[roundId] = outcome;
        _distributeRewards(outcome);
        roundId++;
        roundBlockStart = block.number;
        return outcome;
    }

    function _distributeRewards(uint256 outcome) private {
        UserBet[] storage addresses;
        uint256 rewardMult = rewardPerOutcome[outcome];
        for (uint256 i = 0; i < numOutcomes; i++) {
            addresses = bets[roundId][i];
            if (i == outcome) {
                for (uint256 j = 0; j < addresses.length; j++) {
                    balances[addresses[j].addr] += addresses[j].amount * rewardMult;
                    emit Win(roundId, addresses[j].addr, addresses[j].amount * rewardMult);
                }
            } else {
                for (uint256 j = 0; j < addresses.length; j++) {
                    emit Lose(roundId, addresses[j].addr, addresses[j].amount);
                }
            }
        }
    }

    function setRewards(uint256[] memory _rewardPerOutcome) external onlyOwner {
        rewardPerOutcome = _rewardPerOutcome;
        numOutcomes = rewardPerOutcome.length;
    }
}
