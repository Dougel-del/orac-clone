import { createConfig, http } from "@wagmi/core";
import { bsc, bscTestnet, mainnet, sepolia } from "@wagmi/core/chains";
import { nodeENV } from ".";

export const configMainnet = createConfig({
  chains: [bsc, mainnet],
  transports: {
    [bsc.id]: http(),
    [mainnet.id]: http(),
  },
});

export const configTestNet = createConfig({
  chains: [sepolia, bscTestnet],
  transports: {
    [sepolia.id]: http(),
    [bscTestnet.id]: http(),
  },
});

export const globalConfig = {
  prod: configMainnet,
  develop: configTestNet,
}[nodeENV];
