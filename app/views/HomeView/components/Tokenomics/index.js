import React from "react";
import Image from "next/image";

const TOKENOMICS = [
  {
    color: "#01E4F9",
    fund: "Presale",
    allocation: "40%",
    token: "20 billion tokens",
  },
  {
    color: "#FF8AFF",
    fund: "Presale",
    allocation: "40%",
    token: "20 billion tokens",
  },
  {
    color: "#01E4F9",
    fund: "Presale",
    allocation: "40%",
    token: "20 billion tokens",
  },
  {
    color: "#FF8AFF",
    fund: "Presale",
    allocation: "40%",
    token: "20 billion tokens",
  },
  {
    color: "#01E4F9",
    fund: "Presale",
    allocation: "40%",
    token: "20 billion tokens",
  },
  {
    color: "#01E4F9",
    fund: "Presale",
    allocation: "40%",
    token: "20 billion tokens",
  },
];
const Tokenomics = () => {
  return (
    <div
      id="tokenomics"
      className="pt-[40px] md:pt-[100px] mb-[80px] bg-[url('/assets/tokenomics-bg.svg')] bg-no-repeat bg-center bg-cover w-full"
    >
      <div className="container relative">
        <div
          className="text-[#ffd700] text-center uppercase text-[32px] md:text-[48px] xl:text-[64px] font-bold flex justify-center items-center relative max-w-[600px] m-auto mb-[80px]"
          style={{ textShadow: "0px 3px 8px #FFA300" }}
        >
          <div className="absolute w-[45px] h-[45px] md:w-[179px] md:h-[179px] left-[10px] top-[10px] md:left-[-150px] md:top-[-80px]">
            <Image
              src="/assets/tokenomics-icon.svg"
              alt="tokenomics-icon"
              fill
            />
          </div>
          <h2>TOKENOMICS</h2>
        </div>

        <div className="flex flex-col xl:flex-row justify-between xl:items-start">
          <div className="relative w-full flex justify-center">
            <div className="relative xl:absolute w-[351px] h-[351px] md:w-[770px] md:h-[700px]">
              <Image
                src="/assets/tokenomics.svg"
                alt="tokenomics"
                fill
                className="scale-[1.5] translate-y-[-14%]"
              />
            </div>
          </div>

          <div className="w-full md:py-[24px] md:px-[37px] lg:px-[50px]">
            <div className="p-[15px] rounded-[20px] border border-[#F8F8F8] bg-[#D0C1C3]">
              <div className="text-[14px] text-[#6b3b2f] mb-[8px]">
                BASIC INFORMATION
              </div>

              <ul className="list-disc list-inside text-[18px] text-[#331716] mb-[16px]">
                <li>Token Name: ORACLE MEME</li>
                <li>Token Symbol: OMEME</li>
                <li>Token Network: Binance Smart Chain</li>
                <li>Token Decimals: 18 decimals</li>
                <li>Total supply: 50,000,000,000</li>
              </ul>

              <div className="text-[20px] text-[#6b3b2f] font-bold">
                Stake OMEME to earn OMEME!
              </div>

              <div className="text-[18px] text-[#331716] mb-[24px]">
                Stake rewards of 674% based on dynamic percentage. When you buy
                OMEME you can immediately put it to work.
              </div>

              <div className="flex flex-col gap-[10px]">
                <div className="w-full py-[10px] px-[24px] flex items-center rounded-[10px] border-b border-[1px solid rgba(75,94,117,.15)] text-[#331716] hidden md:flex">
                  <div className="w-full min-w-[285px]">Fund</div>
                  <div className="w-full">% Allocation</div>
                  <div className="w-full max-w-[190px]">Token</div>
                </div>

                {/* Mobile */}
                {TOKENOMICS.map((token, idx) => (
                  <div
                    key={idx}
                    className="w-full py-[10px] px-[24px] items-center rounded-[10px] bg-[#C2AEB1] text-[#331716] hidden md:flex"
                  >
                    <div className="w-full min-w-[285px] flex items-center gap-[8px]">
                      <div
                        className="border border-[#331716] w-[15px] h-[15px] rounded-[15px]"
                        style={{ backgroundColor: token.color }}
                      />
                      {token.fund}
                    </div>
                    <div className="w-full">{token.allocation}</div>
                    <div className="w-full max-w-[190px]">{token.token}</div>
                  </div>
                ))}
                {/* Desktop */}
                {TOKENOMICS.map((token, idx) => (
                  <div
                    key={idx}
                    className="w-full py-[10px] px-[24px] flex flex-col items-center justify-center rounded-[10px] bg-[#C2AEB1] text-[#331716] md:hidden"
                  >
                    <div className="w-full min-w-[285px] flex items-center gap-[8px] font-bold">
                      <div
                        className="border border-[#331716] w-[15px] h-[15px] rounded-[15px]"
                        style={{ backgroundColor: token.color }}
                      />
                      {token.fund}
                    </div>

                    <div className="flex w-full ml-[24px]">
                      <div className="w-full">
                        <div>% Allocation</div>
                        <div className="font-bold">{token.allocation}</div>
                      </div>
                      <div className="w-full max-w-[190px]">
                        <div>Token</div>
                        <div className="font-bold">{token.token}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
