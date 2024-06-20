import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SwitchPaymentMethod from "../../SwitchPaymentMethod";

const Action = () => {
  return (
    <div className="flex gap-[16px]">
      <Button variant="primary" className="min-w-[180px] md:min-w-[195px]">
        <Link href="/">WHITEPAPER</Link>
      </Button>
      <Button variant="outline" className="min-w-[135px] md:min-w-[183px]">
        <Link href="/">AUDIT</Link>
      </Button>
    </div>
  );
};

export default function Banner() {
  return (
    <div className="w-full h-full 2xl:min-h-[125vh] bg-[#1c3254] bg-[url('/assets/banner.png')] pt-[40px] md:pt-[100px] pb-[50px] bg-no-repeat bg-top md:bg-center bg-contain md:bg-cover">
      <div className="container w-full h-full flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:max-w-[616px]">
          <h1 className="text-[45px] md:text-[72px] text-[#ffd700] font-bold leading-snug drop-shadow-[0px_6px_4px_rgba(8,54,94,.7490196078)] my-[16px]">
            ORACLE <br className="hidden md:block xl:hidden" /> MEME IS{" "}
            <br className="hidden md:block xl:hidden" /> BORN !!
          </h1>
          <p className="text-[18px] md:text-[30px] text-white font-bold">
            Community, receive my blessing!
          </p>

          <div className="hidden md:block mt-[48px]">
            <Action />
          </div>
        </div>

        <div className="xl:pt-[60px] xl:pr-[43px] xl:pl-[43px] w-full h-full md:w-[420px] md:h-[616px] xl:w-[510px] xl:h-[736px] relative mt-[24px] md:mt-0">
          <div className="bg-[url('/assets/widget-bg.png')] bg-no-repeat bg-center bg-cover absolute w-full h-full top-0 left-0 hidden xl:block">
            <Image src="/assets/widget-bg.png" alt="widget-bg" fill />
          </div>

          <div className="border border-[#3F1104] shadhow-[0_4px_4px_#00000040] relative h-[93%]">
            <div
              className="p-[2px] h-full"
              style={{
                backgroundSize: "2px 100%,100% 2px,2px 100%,100% 2px",
                backgroundPosition: "0 0,0 0,100% 0,0 100%",
                backgroundRepeat: "no-repeat",
                backgroundImage:
                  "repeating-linear-gradient(0deg,#9F8881,#9F8881 30px,transparent 30px,transparent 36px),repeating-linear-gradient(90deg,#9F8881,#9F8881 30px,transparent 30px,transparent 36px),repeating-linear-gradient(180deg,#9F8881,#9F8881 30px,transparent 30px,transparent 36px),repeating-linear-gradient(270deg,#9F8881,#9F8881 30px,transparent 30px,transparent 36px)",
              }}
            >
              <div className="z-[1] relative border border-[#3F1104] py-[14px] px-[7px] bg-[url('/assets/wallet-box.png')] bg-no-repeat bg-center bg-cover h-full">
                <div className="flex flex-col items-center justify-center gap-[8px]">
                  <div className="text-[24px] font-bold text-center">
                    OMEME Presale Now Open
                  </div>

                  <CountdownTimer targetDate="2024-06-23T23:59:59" />

                  <div className="relative border border-[#00103F] h-[24px] w-[90%]">
                    <div className="absolute w-[60%] h-full bg-[#c88c21]" />
                    <div className="text-[12px] absolute w-full h-full text-center z-[1] leading-5">
                      UNTIL PRICE INCREASE
                    </div>
                  </div>

                  <div className="flex flex-col gap-[6px] items-center justify-center mt-[8px]">
                    <div className="text-[15px]">
                      USDT RAISED: $370,845.77 / $611,246
                    </div>
                    <div className="text-[14px]">YOUR PURCHASED OMEME = 0</div>
                    <div className="text-[13px]">YOUR STAKEABLE OMEME = 0</div>
                  </div>

                  <div className="text-[15px] my-[8px]">STAKE ONLY ON BSC</div>

                  <div className="w-full px-[16px]">
                    <div className="after:content='' after:w-[20%] after:h-[8px] after:absolute after:right-0 after:top-[43%] after:border-t after:border-[#00103F] before:content='' before:w-[20%] before:h-[8px] before:absolute before:left-0 before:top-[43%] before:border-t before:border-[#00103F] relative w-full text-center text-[14px] font-bold mb-[16px]">
                      1 OMEME = $0.00018855
                    </div>

                    <SwitchPaymentMethod />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden mt-[24px]">
          <Action />
        </div>
      </div>
    </div>
  );
}
