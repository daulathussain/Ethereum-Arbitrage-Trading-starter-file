import Web3 from "web3";

import { ARBITRAGE_TRADER_ABI, ARBITRAGE_TRADER_ADDRESS } from "./constants";

// Define all required ABIs
export const UNISWAP_ROUTER_ABI = [
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
    ],
    name: "getAmountsOut",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactETHForTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export const TOKEN_ADDRESSES = {
  // Most liquid and widely supported tokens
  WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // Wrapped Ether
  USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7", // Tether USD
  USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USD Coin
  DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F", // Dai Stablecoin
  WBTC: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", // Wrapped Bitcoin
  UNI: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", // Uniswap
  LINK: "0x514910771AF9Ca656af840dff83E8264EcF986CA", // Chainlink
  AAVE: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", // Aave
  SUSHI: "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2", // SushiSwap
};

export const EXCHANGE_ADDRESSES = {
  "Uniswap V2": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  SushiSwap: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
};
