export default function formatAddress(address: string, long = 7) {
  const result = address && address?.slice(0, long) + "..." + address.slice(-5);
  return result?.toLowerCase();
}

export function calculateTokenAmount(
  ethAmount: number,
  ethPrice: number = 4000,
  tokenRate: number = 0.00005
): number {
  const tokenAmount = (ethAmount * ethPrice) / tokenRate;
  return tokenAmount;
}

export function calculateTokenAmountWithUsdt(
  usdtAmount: number,
  tokenRate: number = 0.00005
): number {
  const tokenAmount = usdtAmount / tokenRate;
  return tokenAmount;
}
