import React from "react";
import Image from "next/image";
import Link from "next/link";
import Social from "../Social";

const NAVIGATIONS = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "How To Buy",
    href: "#howtobuy",
  },
  {
    title: "Tokenomics",
    href: "#tokenomics",
  },
  {
    title: "Roadmap",
    href: "#roadmap",
  },
];

const Footer = () => {
  return (
    <div className="w-full relative z-[1]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full flex flex-col justify-center md:justify-start items-center md:items-start gap-[20px] mb-[20px]">
            <Link href="/" className="relative w-[306px] h-[54px] block">
              <Image src="/assets/logo.svg" alt="logo" fill />
            </Link>

            <Social />
          </div>

          <div className="mx-[55px] mb-[16px]">
            <ul className="h-full flex flex-col items-center md:items-start gap-[16px] w-full min-w-[130px]">
              {NAVIGATIONS.map((nav, idx) => (
                <li
                  key={idx}
                  className="text-[#979797] text-[16px] px-[16px] hover:text-[#f59e0b]"
                >
                  <Link href={nav.href} className="">
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-[#FFF] my-[16px]" />

        <div className="text-[16px] text-white my-[8px] font-bold text-center md:text-start">
          2024 Copyright by Oracle Meme - All Rights Reserved
        </div>
        <div className="text-[16px] text-white pb-[16px] font-bold text-center md:text-start">
          Oracle Meme does not provide investment advice; all content is for
          informational purposes only. Investing in cryptocurrencies involves
          risks, including volatile market prices and potential loss of
          investment.
        </div>
      </div>
    </div>
  );
};

export default Footer;
