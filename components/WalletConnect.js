import { useState, useEffect } from "react";

// SVG Icons
const WalletIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const LogoutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </svg>
);

const MetaMaskIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M21.315 3.768l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114v.002l-1.247 4.114" />
  </svg>
);
