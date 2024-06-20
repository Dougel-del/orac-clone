import { AppConnectButton } from "@/app/components/AppButtonConnect";
import React from "react";
import { bsc } from "viem/chains";
import { useAccount, useChainId, useSwitchChain } from "wagmi";

interface WrapperBSCChainProps {
  children: React.ReactNode;
}

const WrapperBSCChain = (props: WrapperBSCChainProps) => {
  const chainId = useChainId();
  const { switchChainAsync } = useSwitchChain();

  const { address } = useAccount();
  if (!address)
    return (
      <div className="py-2">
        <AppConnectButton />
      </div>
    );

  if (chainId != bsc.id)
    return (
      <button
        className="p-[10px] bg-white text-[14px] w-full uppercase h-[45px] font-bold"
        onClick={async () => await switchChainAsync({ chainId: bsc.id })}
      >
        Switch to BNB
      </button>
    );
  return <div>{props.children}</div>;
};
export default WrapperBSCChain;
