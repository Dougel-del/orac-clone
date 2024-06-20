/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";

import { appConfig, contractPreSaleETH } from "@/app/configs";
import { useApprove } from "@/app/services/shill/useApprove";
import { useContributeWithToken } from "@/app/services/shill/useContributeWithToken";
import { useGetEthPrice } from "@/app/services/shill/useGetEthPrice";
import { calculateTokenAmountWithUsdt } from "@/app/utils/format";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { parseUnits } from "viem";
import { bsc, mainnet } from "viem/chains";
import { BNB, logo_svg, money } from "../../assets/images";
import WrapperETHChain from "./WrapperETHChain";
import { useSwitchChain } from "wagmi";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface StableETHFormProps {}

const StableETHForm: React.FC = (props: StableETHFormProps) => {
  const [currentPrice, setCurrentPrice] = useState(50);
  const { data: ethPrice } = useGetEthPrice();
  const { switchChainAsync } = useSwitchChain();

  const { onContribute, loading } = useContributeWithToken(
    appConfig.contractETH_USDT,
    mainnet.id,
    contractPreSaleETH
  );

  const onBuyWithEth = async () => {
    if (!currentPrice || currentPrice === 0) {
      toast.error("Please enter a valid amount");
    }
    await onContribute(parseUnits(currentPrice.toString(), 6));
  };

  const currentAmountToken = useMemo(() => {
    if (!ethPrice?.price) return 0;
    const tokenAmount = calculateTokenAmountWithUsdt(currentPrice, 0.00071);
    return tokenAmount;
  }, [currentPrice, ethPrice?.price]);

  const onChangeCalculate = (value: number) => {
    setCurrentPrice(value);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex item-center justify-center w-full flex-col md:flex-row gap-4">
          <div className="md-max-w-1/2 max-w-full relative">
            <div className="flex items-center justify-between">
              <label
                htmlFor="default-input"
                className="block mb-2 text-[12px] font-medium text-black"
              >
                USD you pay
              </label>
              <label
                htmlFor="default-input"
                className="block mb-2 text-[12px] font-medium text-black"
              >
                Max
              </label>
            </div>
            <input
              type="number"
              min={0.0001}
              onChange={(e) => {
                onChangeCalculate(parseFloat(e.currentTarget.value));
              }}
              defaultValue={currentPrice}
              className="py-[8px] px-[12px] border-2 border-[rgba(0,16,63,.5019607843)] bg-transparent w-full"
            />
            <Image
              src={money}
              alt="money"
              width={30}
              height={30}
              className="absolute right-[5px] bottom-[7px]"
            />
          </div>
          <div className="md-max-w-1/2 max-w-full relative">
            <div className="flex items-center justify-between">
              <label
                htmlFor="default-input"
                className="block mb-2 text-[12px] font-medium text-black"
              >
                $WAI you receive
              </label>
            </div>
            <input
              type="number"
              disabled
              value={currentAmountToken}
              className="py-[8px] px-[12px] border-2 border-[rgba(0,16,63,.5019607843)] bg-transparent w-full"
            />
            <Image
              src="/assets/token.svg"
              alt="money"
              width={30}
              height={30}
              className="absolute right-[5px] bottom-[7px]"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full gap-2 mt-3">
        <div className="w-full">
          <WrapperETHChain>
            <ButtonCheckApprove
              onBuyWithEth={onBuyWithEth}
              loading={loading}
              amount={currentPrice}
            />
          </WrapperETHChain>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">
            <Button className="flex gap-[8px] w-full">
              <Image src="assets/ETH.svg" alt="ETH" width={22} height={22} />
              BUY WITH ETH
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-0 rounded-none border-none w-full">
            <DropdownMenuItem className="p-0 w-full lg:min-w-[181px]">
              <Button
                className="flex gap-[8px] w-full"
                onClick={async () =>
                  await switchChainAsync({ chainId: bsc.id })
                }
              >
                <Image src="assets/BNB.svg" alt="BNB" width={22} height={22} />
                BUY WITH BNB
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export const ButtonCheckApprove = ({ onBuyWithEth, loading, amount }: any) => {
  const {
    isApprove,
    approve,
    loading: isApproving,
  } = useApprove(
    appConfig.contractETH_USDT,
    contractPreSaleETH,
    mainnet.id,
    amount
  );

  if (!isApprove) {
    return (
      <button
        className="p-[10px] bg-white text-[14px] w-full uppercase h-[45px] font-bold"
        onClick={approve}
        disabled={isApproving}
      >
        {isApproving ? "Loading..." : "Approve"}
      </button>
    );
  }

  return (
    <div>
      <button
        className="p-[10px] bg-white text-[14px] w-full uppercase h-[45px] font-bold"
        onClick={onBuyWithEth}
        disabled={loading}
      >
        {loading ? "Loading..." : "Buy now"}
      </button>
    </div>
  );
};

export default StableETHForm;
