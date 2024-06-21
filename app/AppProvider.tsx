"use client";

import {
  RainbowKitProvider,
  getDefaultConfig,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { WagmiProvider } from "wagmi";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { appConfig } from "./configs";
import { ToastContainer } from "react-toastify";

const { wallets } = getDefaultWallets();

const queryClient = new QueryClient();

// Web3Wrapper
const config = getDefaultConfig({
  appName: "Dapp",
  projectId: "e138bd4919fc188b15ac0ed9623916ea",
  wallets,
  chains: appConfig.chainSupport as any,
  ssr: false,
  syncConnectedChain: true,
});

export function Web3Wrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <WagmiProvider config={config}>
      <GoogleAnalytics gaMeasurementId={"G-J01K50S78E"} />
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <Web3Wrapper>{children}</Web3Wrapper>
      <ToastContainer position="bottom-right" />
    </QueryClientProvider>
  );
}
