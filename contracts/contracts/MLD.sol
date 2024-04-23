// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@compound/contracts/ICompoundToken.sol";
import "@dydx/contracts/IDydxPerpetualV2.sol";

contract PrincipalProtectedInvestment {
    IERC20 public stableCoin;
    ICompoundToken public compoundToken;
    IDydxPerpetualV2 public dydxPerpetual;

    uint256 public totalInvestment;
    uint256 public principalProtectionRatio;
    uint256 public marketLinkedRatio;

    mapping(address => uint256) public investments;

    constructor(
        IERC20 _stableCoin,
        ICompoundToken _compoundToken,
        IDydxPerpetualV2 _dydxPerpetual,
        uint256 _principalProtectionRatio,
        uint256 _marketLinkedRatio
    ) {
        stableCoin = _stableCoin;
        compoundToken = _compoundToken;
        dydxPerpetual = _dydxPerpetual;
        principalProtectionRatio = _principalProtectionRatio;
        marketLinkedRatio = _marketLinkedRatio;
    }

    function invest(uint256 amount) external {
        stableCoin.transferFrom(msg.sender, address(this), amount);

        uint256 principalProtectionAmount = (amount * principalProtectionRatio) / 100;
        uint256 marketLinkedAmount = amount - principalProtectionAmount;

        // Stake principal protection amount in Compound
        compoundToken.mint(principalProtectionAmount);

        // Invest market-linked amount in dYdX Perpetual futures
        dydxPerpetual.deposit(marketLinkedAmount);
        // Trade futures contracts with marketLinkedAmount

        totalInvestment += amount;
        investments[msg.sender] += amount;
    }

    function withdraw() external {
        uint256 investment = investments[msg.sender];
        require(investment > 0, "No investment to withdraw");

        uint256 principalProtectionAmount = (investment * principalProtectionRatio) / 100;
        uint256 marketLinkedAmount = investment - principalProtectionAmount;

        // Withdraw principal protection amount from Compound
        compoundToken.redeemUnderlying(principalProtectionAmount);
        stableCoin.transfer(msg.sender, principalProtectionAmount);

        // Withdraw market-linked amount from dYdX Perpetual and transfer realized gains/losses
        uint256 marketLinkedReturns = dydxPerpetual.withdraw(marketLinkedAmount);
        stableCoin.transfer(msg.sender, marketLinkedReturns);

        totalInvestment -= investment;
        investments[msg.sender] = 0;
    }
}