"use client";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Overview = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div
      id="about"
      className="pt-[30px] pb-[30px] md:pb-[100px] bg-[url('/assets/about-bg.svg')] bg-no-repeat bg-center bg-cover relative"
    >
      {/* Carousel */}
      <div className="mb-[80px] lg:mb-[80px] 2xl:mb-[135px]">
        <Carousel className="w-full" plugins={[plugin.current]}>
          <CarouselContent className="-ml-4">
            {Array.from({ length: 20 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <div className="p-1 w-[125px] md:w-[162px] h-[37px] xl:w-[231px] xl:h-[50px] 2xl:w-[312px] 2xl:h-[72px] relative">
                  <Image
                    src="/assets/2-cryptonews.svg"
                    alt="2-cryptonews"
                    fill
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Overview */}
      <div>
        <div className="absolute top-0 left-0 right-0 w-full h-full">
          <Image src="/assets/about-doge.svg" alt="about-doge" fill />
        </div>
        <div className="container flex flex-col items-center justify-center">
          <div className="flex items-center relative">
            <div className="absolute w-[100px] h-[150px] md:w-[130px] md:h-[180px] left-[-90px] md:left-[-150px]">
              <Image
                src="/assets/overview_1.svg"
                alt="overview_1"
                fill
                // width={131}
                // height={180}
              />
            </div>
            <h2
              className="text-[#ffd700] text-center uppercase text-[32px] md:text-[48px] xl:text-[64px] font-bold"
              style={{ textShadow: "0px 3px 8px #FFA300" }}
            >
              Overview
            </h2>
            <div className="absolute w-[100px] h-[150px] md:w-[130px] md:h-[180px] right-[-90px] md:right-[-150px]">
              <Image
                src="/assets/overview_2.svg"
                alt="overview_2"
                fill
                // width={131}
                // height={180}
              />
            </div>
          </div>

          <div className="text-[24px] text-center text-white mt-[40px]">
            ORACLE MEME aims to lead in the meme coin market by leveraging
            community, creativity, and blockchain technology. We are
            transforming meme creation, sharing, and monetization with
            innovative tools and platforms. Built on transparency and user
            engagement, ORACLE MEME offers unique opportunities for users and
            investors alike. Let&apos;s empower the meme community together.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
