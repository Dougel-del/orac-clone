import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetBNBPrice = () => {
  const fetchData = async () => {
    const data = await axios.get(
      `https://www.binance.com/api/v3/ticker/price?symbol=BNBUSDT`
    );

    const _d = data.data;
    return _d;
  };

  const { data, refetch, isLoading, ...rest } = useQuery({
    queryKey: ["useGetBNBPrice"],
    queryFn: async () => {
      const _data = await fetchData();
      return _data;
    },
    staleTime: 10000,
    refetchInterval: 10000,
  });

  return {
    data,
    refetch,
    isLoading,
    ...rest,
  };
};
