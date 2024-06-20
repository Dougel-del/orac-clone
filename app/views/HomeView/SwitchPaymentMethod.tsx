/* eslint-disable react/no-unescaped-entities */
"use client";

import { useChainId } from "wagmi";
import SwitchPaymentBSC from "./SwitchPaymentBSC";
import SwitchPaymentETH from "./SwitchPaymentETH";

interface SwitchPaymentMethodProps {}

const SwitchPaymentMethod: React.FC = (props: SwitchPaymentMethodProps) => {
  const chainId = useChainId();

  if (chainId === 56) {
    return <SwitchPaymentBSC />;
  }
  return <SwitchPaymentETH />;
};

export default SwitchPaymentMethod;
