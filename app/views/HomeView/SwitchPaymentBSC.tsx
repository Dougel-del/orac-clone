/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";

import clsx from "clsx";
import { useState } from "react";
import { BNB, ETH, card, usdt } from "../../assets/images";
import ETHForm from "./ETHForm";
import StableETHForm from "./StableETHForm";
import BNBForm from "./BNBForm";
import StableBNBForm from "./StableBNBForm";
import Link from "next/link";

interface SwitchPaymentBSCProps {}

const SwitchPaymentBSC: React.FC = (props: SwitchPaymentBSCProps) => {
  const [currentTab, setCurrenTab] = useState("eth");

  const renderComponent = () => {
    switch (currentTab) {
      case "eth":
        return <BNBForm />;
      case "usdt":
        return <StableBNBForm />;
      default:
        return <ETHForm />;
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-[8px] w-full">
        <button
          type="button"
          onClick={() => setCurrenTab("eth")}
          className={clsx(
            `p-[6px] border border-[#00103f]  flex items-center justify-center gap-[8px] w-full font-bold cursor-pointer h-[45px]`,
            {
              "bg-black text-white": currentTab === "eth",
            }
          )}
        >
          <Image src={BNB} alt="BNB" width={20} height={20} />
          <span className="">BNB</span>
        </button>
        <button
          onClick={() => setCurrenTab("usdt")}
          type="button"
          className={clsx(
            `p-[6px] border border-[#00103f]  flex items-center justify-center gap-[8px] w-full font-bold cursor-pointer h-[45px]`,
            {
              "bg-black text-white": currentTab === "usdt",
            }
          )}
        >
          <Image src={usdt} alt="usdt" width={20} height={20} />
          <span className="">USDT</span>
        </button>
        <button
          type="button"
          className={clsx(
            `p-[6px] border border-[#00103f]  flex items-center justify-center gap-[8px] w-full font-bold cursor-pointer h-[45px]`
          )}
        >
          <Image src={card} alt="card" width={20} height={20} />
          <span className="">CARD</span>
        </button>
      </div>

      <div className=" pt-2 flex justify-center w-full">
        {renderComponent()}
      </div>

      <div className="w-full flex items-center justify-center mt-[12px] gap-[5px]">
        <p>Powered by</p>
        <div>
          <Link href="/">
            <Image
              src="/assets/W3P_Black.svg"
              alt="W3P_Black"
              width={136}
              height={18}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SwitchPaymentBSC;
