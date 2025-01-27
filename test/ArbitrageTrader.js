// test/ArbitrageTrader.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ArbitrageTrader", function () {
  let arbitrageTrader;
  let owner;
  let addr1;

  beforeEach(async function () {
    // Get signers
    [owner, addr1] = await ethers.getSigners();

    // Deploy contract
    const ArbitrageTrader = await ethers.getContractFactory("ArbitrageTrader");
    arbitrageTrader = await ArbitrageTrader.deploy();
    await arbitrageTrader.deployed();
  });

  it("Should set the right owner", async function () {
    expect(await arbitrageTrader.owner()).to.equal(owner.address);
  });

  it("Should allow owner to execute arbitrage", async function () {
    // Mock data for testing
    const tokenAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"; // USDC
    const sourceExchange = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; // Uniswap V2 Router
    const targetExchange = "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F"; // SushiSwap Router
    const amount = ethers.utils.parseEther("1");
    const sourceData = "0x";
    const targetData = "0x";

    // Execute arbitrage
    await expect(
      arbitrageTrader.executeArbitrage(
        tokenAddress,
        sourceExchange,
        targetExchange,
        amount,
        sourceData,
        targetData
      )
    ).to.not.be.reverted;
  });

  it("Should not allow non-owner to execute arbitrage", async function () {
    const tokenAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    const sourceExchange = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
    const targetExchange = "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F";
    const amount = ethers.utils.parseEther("1");
    const sourceData = "0x";
    const targetData = "0x";

    // Try to execute arbitrage as non-owner
    await expect(
      arbitrageTrader
        .connect(addr1)
        .executeArbitrage(
          tokenAddress,
          sourceExchange,
          targetExchange,
          amount,
          sourceData,
          targetData
        )
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });
});
