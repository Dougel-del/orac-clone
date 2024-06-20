import { globalConfig } from "@/app/configs/wagmi.config";
import { ContributorPresale__factory } from "@/src/TT/typechain";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { usePublicClient, useWriteContract } from "wagmi";

export const useContribute = (
  chainId: number,
  contractAddress: `0x${string}`
) => {
  const [loading, setLoading] = useState(false);

  const queryClient = useQueryClient();
  const { writeContractAsync } = useWriteContract();

  const { waitForTransactionReceipt } = usePublicClient({
    config: globalConfig,
    chainId: Number(chainId) as any,
  });

  const onContribute = async (feeMint: any) => {
    try {
      setLoading(true);
      const hash = await writeContractAsync({
        address: contractAddress,
        abi: ContributorPresale__factory.abi,
        functionName: "contribute",
        value: feeMint,
        args: [feeMint],
      });

      const _data = await waitForTransactionReceipt({ hash });

      if (_data.status != "reverted") {
        setLoading(false);
        toast.success("Contribute successfully");
      } else {
        setLoading(false);
        toast.error("Contribute failed");
      }
    } catch (e: any) {
      console.log({ e });
      toast.error("Contribute failed");

      toast.error(
        e?.message ||
          e?.shortMessage ||
          e?.response?.data ||
          e?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
      queryClient.invalidateQueries({ queryKey: ["useGetInfoContribute"] });
    }
  };

  return { onContribute, loading };
};
