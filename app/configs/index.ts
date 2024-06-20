import { Address, Chain } from "viem";
import { bsc, mainnet, sepolia } from "wagmi/chains";

export const nodeENV: "develop" | "prod" = "prod";

export const appConfig = {
  prod: {
    chainSupport: [bsc, mainnet],
    baseUrl: "",
    contractNFT: "0x7b" as Address,
    contractBuy: "0x362cfCDa76692d3621ED8c7F7aaD9eBdd5374e50" as Address,
    contractPreSaleETH: "0xD32c8fb457a142bb24452a9A84eEaf744C406719" as Address,
    contractETH_USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7" as Address,

    contractPreSaleBSC: "0x00fE873Dde5C6A50F2cED433BEbc0269fEAE7259" as Address,
    contractBSC_USDT: "0x55d398326f99059fF775485246999027B3197955" as Address,
  },
  develop: {
    chainSupport: [sepolia],
    baseUrl: "",
    // contractNFT: "0x4ea962526c70bb77DF4E386E75CA5c3D8DcCe26F" as Address,
    contractNFT: "0x876c09E64Da6dB0cCb1F7fce1D31E0A5A9886a72" as Address,
    contractPreSaleETH: "0xD676F7e8a634bd3bB2CF000b106b067bDEFb69C4" as Address,

    contractETH_USDT: "0xD695C5cae5f7e9A5080B332f7A21Cc6c2d9Dfc4f" as Address,
    contractBSC_USDT: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852" as Address,
  },
}[nodeENV];
export const contractPreSale = appConfig.contractPreSaleETH;
export const contractPreSaleETH = appConfig.contractPreSaleETH;
export const contractPreSaleBSC = appConfig.contractPreSaleBSC;

export const contractNFT = appConfig.contractNFT;
export const DEFAULT_CHAIN_ID = appConfig.chainSupport[0].id;
export const SEPOLIA_CHAIN_ID = appConfig.chainSupport[0].id;

export const getChain = (): Chain => {
  return mainnet;
  switch (DEFAULT_CHAIN_ID) {
  }
};
