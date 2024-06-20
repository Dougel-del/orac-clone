import { AppConnectButton } from "@/app/components/AppButtonConnect";
import React from "react";
import { mainnet } from "viem/chains";
import { useAccount, useChainId, useSwitchChain } from "wagmi";

interface WrapperETHChainProps {
  children: React.ReactNode;
}

const WrapperETHChain = (props: WrapperETHChainProps) => {
  const chainId = useChainId();
  const { switchChainAsync } = useSwitchChain();
  const { address } = useAccount();

  if (!address)
    return (
      <div className="py-2">
        <AppConnectButton />
      </div>
    );
  if (chainId != mainnet.id)
    return (
      <button
        className="text-white uppercase w-full h-[45px] bg-[#ba8bf9] gap-1 flex items-center justify-center focus:outline-none font-medium rounded-full md:text-[14px] text-[12px] px-5 py-3 text-center"
        onClick={async () => await switchChainAsync({ chainId: mainnet.id })}
      >
        Switch to ETH
      </button>
    );
  return <div>{props.children}</div>;
};
export default WrapperETHChain;
