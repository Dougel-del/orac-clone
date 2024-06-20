import { globalConfig } from "@/app/configs/wagmi.config";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Address, erc20Abi, parseEther } from "viem";
import { useAccount, usePublicClient, useWriteContract } from "wagmi";

export const useApprove = (
  token: Address,
  spender: Address,
  chainId: number,
  amount?: number,
  decimals?: number
) => {
  const [isApprove, setIsApprove] = useState<boolean>(false);
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);
  const { waitForTransactionReceipt, multicall } = usePublicClient({
    config: globalConfig,
    chainId: Number(chainId) as any,
  });

  // HOOKS
  const { writeContractAsync } = useWriteContract();

  const fetchApprove = useCallback(async () => {
    if (!address) return;
    try {
      const [allowance] = await multicall({
        contracts: [
          {
            address: token,
            abi: erc20Abi,
            functionName: "allowance",
            args: [address, spender],
          },
        ],
      });

      if (allowance.status === "success") {
        setIsApprove(allowance.result >= parseEther(amount?.toString() || "0"));
      } else {
        console.error("fetchApprove", allowance.error);
      }
    } catch (e) {
      console.log("fetchApprove", e);
    }
  }, [address, spender, token, multicall, amount]);

  const approve = async () => {
    try {
      setLoading(true);
      const hash = await writeContractAsync({
        address: token,
        abi: [
          {
            constant: false,
            inputs: [
              { name: "_spender", type: "address" },
              { name: "_value", type: "uint256" },
            ],
            name: "approve",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        functionName: "approve",
        args: [spender, BigInt(10000 * 10 ** (decimals || 8))],
        chainId: chainId as any,
      });

      await waitForTransactionReceipt({ hash });
      await fetchApprove();
      setLoading(false);
      return hash;
    } catch (e: any) {
      console.log({ e });
      toast.error(
        e?.shortMessage ||
          e?.response?.data ||
          e?.message ||
          "Something went wrong"
      );
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    //  typeof amount === "number"
    if (address && token && spender && amount) {
      fetchApprove().finally();
    }
  }, [address, token, spender, amount, fetchApprove]);

  return { fetchApprove, isApprove, approve, loading };
};
