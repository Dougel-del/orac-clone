"use client";
import { close, logo, telegram, twitter } from "@/app/assets/images";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef: any = useRef(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const handleScroll = () => {
    const header: any = document.getElementById("header");
    if (window.scrollY > header.clientHeight) {
      setIsScrolled(true);
    } else {
      if (window.innerWidth < 768) {
        return setIsScrolled(true);
      }
      setIsScrolled(false);
    }
  };

  const handleClickOutside = (event: any) => {
    if (window.innerWidth < 768) {
      setIsScrolled(true);
      return;
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className="fixed top-0 z-50 w-full"
      id="header"
      style={{
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.9)" : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8 font-bold"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <Image
              src={logo}
              alt="logo"
              width={70}
              height={70}
              className="img_logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-32">
          <div className="flex items-center gap-x-8">
            <a className="text-[25px] font-semibold leading-6 text-white hover:text-[#ba8bf9]">
              Staking
            </a>
            <a
              className="text-[25px] font-semibold leading-6 text-white hover:text-[#ba8bf9]"
              href="/pdf/whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whitepaper
            </a>
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className="flex items-center gap-x-1 text-[25px] font-semibold leading-6 text-white hover:text-[#ba8bf9]"
                aria-expanded="false"
                onClick={() => setOpen(!open)}
              >
                About
                <svg
                  className="h-8 w-8 flex-none text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {open && (
                <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-[250px] overflow-hidden rounded-[4px] bg-black shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-[20px] leading-6">
                      <a
                        className="block font-semibold text-white hover:text-[#ba8bf9]"
                        onClick={() => scrollToSection("section_3")}
                      >
                        What is WienerAI
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-[20px] leading-6">
                      <a
                        className="block font-semibold text-white hover:text-[#ba8bf9]"
                        onClick={() => scrollToSection("section_5")}
                      >
                        How To Buy
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-[20px] leading-6">
                      <a
                        className="block font-semibold text-white hover:text-[#ba8bf9]"
                        onClick={() => scrollToSection("section_6")}
                      >
                        FAQ
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <a
              href="/pdf/audit.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[25px] font-semibold leading-6 text-white hover:text-[#ba8bf9]"
            >
              Audit
            </a>
          </div>
          <div className="flex items-center gap-x-8">
            {/* <Link target="_blank" href={"https://x.com/WienerDogAI"}>
              <Image src={twitter} alt="telegram" width={40} height={40} />
            </Link> */}
            <Link target="_blank" href={"https://t.me/wienedog"}>
              <Image src={telegram} alt="telegram" width={40} height={40} />
            </Link>
            {/* <Image src={twitter} alt="telegram" width={40} height={40} /> */}
            {/* <Image src={telegram} alt="telegram" width={40} height={40} /> */}
            <button
              type="button"
              className="text-white uppercase bg-[#ba8bf9] h-[45px] focus:outline-none rounded-full text-[20px] px-5 py-2.5 text-center font-bold"
            >
              Buy now
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`lg:hidden transition-transform transform ${
          open ? "w-full" : "w-0"
        } duration-300 ease-in-out fixed inset-0 z-10`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-10 " />
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black transition-all py-6 duration-300 ease-in-out ${
            open ? "w-full px-6" : "w-0 px-0 py-0"
          }`}
        >
          <div className="flex items-center justify-between w-full overflow-hidden">
            <a className="-m-1.5 p-1.5">
              <Image
                className="h-8 w-auto"
                src={logo}
                alt="..."
                width={30}
                height={30}
              />
            </a>
            <Image
              src={close}
              alt="close"
              width={20}
              height={20}
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white border-[#ffffff5c] border-b">
                  Staking
                </a>
                <a
                  href="/pdf/whitepaper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white border-[#ffffff5c] border-b"
                >
                  Whitepaper
                </a>
                <a
                  onClick={() => scrollToSection("section_3")}
                  className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white border-[#ffffff5c] border-b"
                >
                  What is WienerAI
                </a>
                <a
                  onClick={() => scrollToSection("section_5")}
                  className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white border-[#ffffff5c] border-b"
                >
                  How To Buy
                </a>
                <a
                  onClick={() => scrollToSection("section_6")}
                  className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white border-[#ffffff5c] border-b"
                >
                  FAQ
                </a>
                <a
                  href="/pdf/audit.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white border-[#ffffff5c] border-b"
                >
                  Audit
                </a>
                <div className="flex items-center gap-x-4 !my-5">
                  <Link target="_blank" href={"https://t.me/wienedog"}>
                    <Image
                      src={telegram}
                      alt="telegram"
                      width={40}
                      height={40}
                    />
                  </Link>
                </div>
                <button
                  type="button"
                  className="text-black uppercase bg-white h-[45px] w-full focus:outline-none rounded-full text-[14px] px-5 py-2.5 text-center font-bold"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
