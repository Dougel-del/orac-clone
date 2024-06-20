import Image from "next/image";
import React from "react";

const PHASES = [
  {
    title: "PHASE 1",
    des: "Presale launch, staking commences, and start initial developments.",
  },
  {
    title: "PHASE 2",
    des: "Token launch, claim available and exchange A-tier CEX and DEX listing.",
  },
  {
    title: "PHASE 3",
    des: "Release of products, meme AI generator and meme coin generator.",
  },
  {
    title: "PHASE 4",
    des: "Release meme layer-2 network, and list in exchanges. To more Phases access our <a href='/' style='color: #FFD700; font-size: 14px;'>Whitepaper</a>",
  },
];
const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="pt-[40px] md:pt-[130px] pb-[50px] md:pb-[150px] bg-[url('/assets/raodmap-bg.svg')] bg-no-repeat bg-center bg-cover w-full"
    >
      <div className="container relative">
        <div
          className="text-[#ffd700] text-center uppercase text-[32px] md:text-[48px] xl:text-[64px] font-bold flex justify-center items-center relative max-w-[600px] m-auto mb-[40px] md:mb-[100px]"
          style={{ textShadow: "0px 3px 8px #FFA300" }}
        >
          <div className="absolute w-[130px] h-[136px] md:w-[295px] md:h-[310px] left-[-25px] top-[-40px] md:left-[-145px] md:top-[-120px]">
            <Image src="/assets/road-map-1.svg" alt="road-map-1" fill />
          </div>
          <h2>ROADMAP</h2>
          <div className="absolute w-[30px] h-[55px] md:w-[43px] md:h-[79px] top-0 right-[20px] md:right-0">
            <Image src="/assets/road-map-2.svg" alt="road-map-2" fill />
          </div>
        </div>

        <div className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-[24px]">
          {PHASES.map((phase, idx) => (
            <div
              key={idx}
              className="w-full md:max-w-[40%] xl:max-w-full bg-[url('/assets/roadmap-bg.svg')] bg-no-repeat bg-center bg-cover h-[264px] flex flex-col gap-[24px] pt-[50px] p-[36px]"
            >
              <div
                className="text-[20px] font-bold leading-[26px] text-[#FFD700]"
                style={{ textShadow: "1px 1px 20px #E0FFA6" }}
              >
                {phase.title}
              </div>

              <div
                className="text-[18px] text-white"
                dangerouslySetInnerHTML={{ __html: phase.des }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
