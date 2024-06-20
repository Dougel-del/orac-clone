"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Social from "../Social";

const MENUS = [
  {
    title: "Staking",
    href: "/",
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
  {
    title: "FAQ",
    href: "#faq",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash);
    };

    // Lắng nghe sự thay đổi của hash
    window.addEventListener("hashchange", handleHashChange);

    // Cập nhật trạng thái lần đầu tiên khi component mount
    handleHashChange();

    // Xóa sự kiện khi component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleScroll = () => {
    const header = document.getElementById("header");
    if (window.scrollY > header?.clientHeight) {
      setIsScrolled(true);
    } else {
      if (window.innerWidth < 768) {
        return setIsScrolled(true);
      }
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed left-0 top-0 w-full z-10"
      id="header"
      style={{
        backgroundColor: isScrolled ? "rgba(0,16,63,.9)" : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="py-[16px] container flex justify-between items-center">
        <Link href="/">
          <Image src="/assets/logo.svg" alt="logo" width={220} height={45} />
        </Link>

        <ul className="w-fix h-full bg-[url('/assets/header-bg.svg')] bg-no-repeat bg-center bg-cover hidden xl:flex  items-center p-[4px] justify-between min-w-[625px]">
          {MENUS.map((menu, idx) => (
            <li
              key={idx}
              className={`cursor-pointer hover:text-[#0b0019] hover:bg-white hover:rounded-[50px] hover:shadow-[0_-2px_4px_#00000040_inset] transition-all duration-250 ease-in-out text-[14px] ${
                activeSection === menu.href
                  ? "bg-white text-[#0b0019] rounded-[50px]"
                  : "text-white"
              }`}
            >
              <Link
                href={menu.href}
                className="py-[12px] px-[21px] block"
                onClick={() => setActiveSection(menu.href)}
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex gap-[10px] items-center">
          <Button>BUY TOKENS</Button>

          <Social />
        </div>

        <div className="p-[10px] xl:hidden">
          <Drawer>
            <DrawerTrigger>
              <Menu
                className="text-red"
                width="20px"
                height={20}
                color="#FFD700"
              />
            </DrawerTrigger>
            <DrawerContent className="bg-[#00103F] border-none p-[20px]">
              <ul className="">
                {MENUS.map((menu, idx) => (
                  <li key={idx} className="text-[18px]">
                    <Link
                      href={menu.href}
                      onClick={() => setActiveSection(menu.href)}
                    >
                      <DrawerClose className="block py-[12px] px-[5px] w-full text-white uppercase">
                        {menu.title}
                      </DrawerClose>
                    </Link>
                  </li>
                ))}
              </ul>

              <Button className="my-[24px]">BUY TOKENS</Button>

              <div className="w-full flex justify-center">
                <Social />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
