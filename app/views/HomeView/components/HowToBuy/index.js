import Image from "next/image";
import React from "react";

const STEP_LEFT = [
  {
    step: 1,
    title: "Visit our Presale",
    des: "Head to our presale page and follow the instructions to purchase OMEME tokens.",
  },
  {
    step: 2,
    title: "Connect Your Wallet",
    des: "Make sure you have a compatible Web3 wallet such as MetaMask installed and enough funds in your chosen crypto.",
  },
];

const STEP_RIGHT = [
  {
    step: 3,
    title: "Buy or Stake",
    des: "Use the buy widget to purchase with ETH, BNB, USDT or Card. You can also choose to stake your tokens to earn rewards.",
  },
  {
    step: 4,
    title: "Enjoy the Ride",
    des: "Once you've acquired your OMEME tokens, join our community and get ready to dive into the exciting world of decentralized memes!",
  },
];
const HowToBuy = () => {
  return (
    <div
      id="howtobuy"
      className="py-[150px] xl:py-[200px] bg-[url('/assets/howto-buy-bg.png')] bg-no-repeat bg-center bg-cover w-full h-full"
    >
      <div className="container relative">
        <div className="mb-[96px]">
          <div className="absolute w-[330px] h-[300px] md:w-[430px] md:h-[443px] left-[-50px] top-[-50px] md:left-[-140px] md:top-[-140px] rotate-[-7deg]">
            <Image src="/assets/dall-e.svg" alt="dall-e" fill />
          </div>

          <div>
            <div
              className="text-[#ffd700] text-center uppercase text-[32px] md:text-[48px] xl:text-[64px] font-bold flex justify-center"
              style={{ textShadow: "0px 3px 8px #FFA300" }}
            >
              <Image
                src="/assets/how_to_buy.svg"
                alt="how_to_buy"
                width={56}
                height={56}
                className="max-h-[56px]"
              />
              <h2>HOW TO BUY?</h2>
            </div>
          </div>

          <div className="absolute w-[90px] h-[108px] md:w-[290px] md:h-[238px] right-0 top-[-110px]">
            <Image
              src="/assets/howto-buy-diamond.svg"
              alt="howto-buy-diamond"
              fill
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-[80px] md:gap-[24px]">
          <div className="relative w-full h-full flex justify-center">
            <div className="absolute w-[375px] h-[334px] md:w-[750px] md:h-[350px] lg:w-[500px] lg:h-[412px] xl:w-[680px] xl:h-[523px] 2xl:w-[750px] 2xl:h-[569px] z-0">
              <Image
                src="/assets/buy_book.svg"
                alt="buy-book"
                fill
                objectFit="cover"
              />
            </div>
            <div className="z-[1] p-[12px] 2xl:p-[40px] relative flex gap-[24px]">
              {STEP_LEFT.map((step, idx) => (
                <div
                  key={idx}
                  className="pt-[40px] xl:p-[40px] flex flex-col gap-[8px] w-full"
                >
                  <div className="text-[#6b3b2f] font-bold text-[16px] xl:text-[21px] leading-[28px]">
                    Step {step.step}
                  </div>
                  <div className="text-[#2b0e0d] text-[18px] md:text-[30px] xl:text-[33px] font-bold leading-[18px] md:leading-[48px]">
                    {step.title}
                  </div>
                  <div className="text-[#2b0e0d] text-[15px] xl:text-[18px] leading-[18px] md:leading-[26px]">
                    {step.des}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full h-full flex justify-center">
            <div className="absolute w-[375px] h-[334px] md:w-[750px] md:h-[350px] lg:w-[500px] lg:h-[412px] xl:w-[680px] xl:h-[523px] 2xl:w-[750px] 2xl:h-[569px] z-0">
              <Image
                src="/assets/buy_book.svg"
                alt="buy-book"
                fill
                objectFit="cover"
              />
            </div>

            <div className="z-[1] p-[12px] 2xl:p-[40px] relative flex gap-[24px]">
              {STEP_RIGHT.map((step, idx) => (
                <div
                  key={idx}
                  className="pt-[40px] xl:p-[40px] flex flex-col gap-[8px] w-full"
                >
                  <div className="text-[#6b3b2f] font-bold text-[16px] xl:text-[21px] leading-[28px]">
                    Step {step.step}
                  </div>
                  <div className="text-[#2b0e0d] text-[18px] md:text-[30px] xl:text-[33px] font-bold leading-[18px] md:leading-[48px]">
                    {step.title}
                  </div>
                  <div className="text-[#2b0e0d] text-[15px] xl:text-[18px] leading-[18px] md:leading-[26px]">
                    {step.des}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
