"use client";

import { useEffect } from "react";
import { useAccount, useConnect } from "wagmi";
import { injected } from "wagmi/connectors";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Frequentiy from "./components/Frequentiy";
import HowToBuy from "./components/HowToBuy";
import Overview from "./components/Overview";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";

interface HomeViewPageProps {}

const HomeViewPage = (props: HomeViewPageProps) => {
  const { address, connector } = useAccount();

  const { connectors, connect } = useConnect();

  useEffect(() => {
    if (!address) {
      connect({ connector: injected() });
    }
  }, [address, connect]);

  return (
    <main className="bg-[url('/assets/main-bg.png')] bg-no-repeat bg-[0_0] bg-cover min-h-screen overflow-hidden">
      <Header />

      <Banner />

      <Overview />

      <Features />

      <HowToBuy />

      <Tokenomics />

      <Roadmap />

      <Frequentiy />

      <Footer />
    </main>
  );
};
export default HomeViewPage;
