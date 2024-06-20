/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";

import { contractPreSaleETH } from "@/app/configs";
import { useContribute } from "@/app/services/shill/useContribute";
import { useGetEthPrice } from "@/app/services/shill/useGetEthPrice";
import { calculateTokenAmount } from "@/app/utils/format";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { parseUnits } from "viem";
import { bsc, mainnet } from "viem/chains";
import { BNB, ETH, logo_svg, money } from "../../assets/images";
import WrapperETHChain from "./WrapperETHChain";
import { useSwitchChain } from "wagmi";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface ETHFormProps {}

const ETHForm: React.FC = (props: ETHFormProps) => {
  const [currentPrice, setCurrentPrice] = useState(0.01);
  const { data: ethPrice } = useGetEthPrice();

  const { switchChainAsync } = useSwitchChain();
  const { onContribute, loading } = useContribute(
    mainnet.id,
    contractPreSaleETH
  );

  const onBuyWithEth = async () => {
    if (!currentPrice || currentPrice === 0) {
      toast.error("Please enter a valid amount");
    }
    await onContribute(parseUnits(currentPrice.toString(), 18));
  };

  const currentAmountToken = useMemo(() => {
    if (!ethPrice?.price) return 0;
    const tokenAmount = calculateTokenAmount(
      currentPrice,
      ethPrice.price,
      0.00071
    );
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
              src={ETH}
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
            <button
              type="button"
              onClick={onBuyWithEth}
              disabled={loading}
              className="p-[10px] bg-white text-[14px] w-full uppercase h-[45px] font-bold"
            >
              {loading ? "Loading..." : "Buy now"}
            </button>
          </WrapperETHChain>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">
            <Button className="flex gap-[8px] w-full">
              <Image src="assets/ETH.svg" alt="ETH" width={22} height={22} />
              BUY WITH ETH
              <ChevronDown />
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
export default ETHForm;
