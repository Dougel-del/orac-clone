import Image from "next/image";
import React from "react";

const FEATURES_1 = [
  {
    title: "Meme AI Generator",
    des: "A cutting-edge tool for creating memes, featuring AI-powered suggestions, customization options, and seamless sharing capabilities.",
  },
  {
    title: "Meme Coin Generator",
    des: "A platform for users to create their own meme coin with a few clicks. Let's bring your meme to reality!",
  },
  {
    title: "Meme Layer-2 Network",
    des: "Time to unite the community, here is the place where all memes join the party. The Oracle will release a scalable, efficient layer 2 solution to ensure fast, low-cost transactions for ORACLE MEME and associated platforms.",
  },
];

const FEATURES_2 = [
  {
    title: "Meme Wallet",
    des: "A personalized and funny wallet to keep all your memes at the same place.",
  },
  {
    title: "Meme Launchpad",
    des: "A dedicated space for launching new meme coins and projects, offering early access to ORACLE MEME holders.",
  },
  {
    title: "Meme To Come",
    des: "We are crafting innovative ideas and products to enhance the experience for meme coin enthusiasts, providing dynamic discussions, events, and opportunities for collaboration.",
  },
];

const Features = () => {
  return (
    <div className="pt-[100px] bg-[url('/assets/innovations-bg.png')] bg-no-repeat bg-center bg-cover w-full h-full">
      <div className="container relative">
        <div className="mb-[24px] md:mb-[96px]">
          <div className="absolute w-[110px] h-[110px] 2xl:w-[360px] 2xl:h-[360px] left-0 top-[-80px] 2xl:top-[-230px]">
            <Image src="/assets/feature-dog.svg" alt="feature-dog" fill />
          </div>
          <h2
            className="text-[#ffd700] text-center uppercase text-[32px] md:text-[48px] xl:text-[64px] font-bold"
            style={{ textShadow: "0px 3px 8px #FFA300" }}
          >
            FEATURES & INNOVATIONS
          </h2>
          <div className="absolute w-[80px] h-[60px] 2xl:w-[290px] 2xl:h-[238px] right-0 top-[-60px] 2xl:top-[-110px]">
            <Image src="/assets/feature-book.svg" alt="feature-book" fill />
          </div>
        </div>

        <div className="text-[24px] text-center text-white pb-[72px]">
          ORACLE MEME aims to lead in the meme coin market by leveraging
          community, creativity, and blockchain technology. We are transforming
          meme creation, sharing, and monetization with innovative tools and
          platforms. Built on transparency and user engagement, ORACLE MEME
          offers unique opportunities for users and investors alike. Let&apos;s
          empower the meme community together.
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col xl:flex-row gap-[24px]">
            {FEATURES_1.map((feature, idx) => (
              <div
                key={idx}
                className="border-t-[1px] border-r-[8px] border-b-[8px] border-l-[1px] border-[#6b3b2f] rounded-[4.8px] md:min-w-[421px] md:h-[225px]"
              >
                <div className="p-[20px] md:p-[40px] bg-white flex flex-col gap-[20px] h-full">
                  <h5 className="text-[28px] text-[#bd524c] leading-[35.5px] font-bold">
                    {feature.title}
                  </h5>
                  <div className="text-[18px] text-[#534d4e] leading-[22.63px]">
                    {feature.des}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col xl:flex-row gap-[24px]">
            {FEATURES_2.map((feature, idx) => (
              <div
                key={idx}
                className="border-t-[1px] border-r-[8px] border-b-[8px] border-l-[1px] border-[#6b3b2f] rounded-[4.8px]"
              >
                <div className="p-[20px] md:p-[40px] bg-white flex flex-col gap-[20px] h-full">
                  <h5 className="text-[28px] text-[#bd524c] leading-[35.5px] font-bold">
                    {feature.title}
                  </h5>
                  <div className="text-[18px] text-[#534d4e] leading-[22.63px]">
                    {feature.des}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[24px] text-center text-white pb-[72px] mt-[48px]">
          OMEME is the core of all transactions within the ecosystem. It
          incentivizes creators, rewards and community engagement. It&apos;s
          designed for microtransactions, tipping, and purchasing unique meme
          assets.
        </div>
      </div>
    </div>
  );
};

export default Features;
