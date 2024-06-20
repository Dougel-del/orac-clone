import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
import "./style.scss";

const CollapsibleItem = ({ title, desc, isExpanded, onToggle }: any) => {
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded: isExpanded,
  });
  return (
    <div className="wrap_collapse">
      <button
        {...getToggleProps({
          onClick: onToggle,
        })}
        className="title-btn"
      >
        {title}
      </button>
      <section {...getCollapseProps()} className="desc">
        {desc}
      </section>
    </div>
  );
};

const Collapse = () => {
  const [openIndexes, setOpenIndexes] = useState<any>([]);
  const toggleCollapse = (index: number) => {
    setOpenIndexes((prevIndexes: number[]) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i: number) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const data = [
    {
      title: "What is WienerAI?",
      desc: "WienerAI is the world is most advanced consumer AI trading bot. It is the first Sausage/Dog/Artificial Intelligence ever created and the universe is most powerful cybernetic being. This weenie is gunning for “top dog” on the charts. WienerAI ($WAI) is currently in the private RESALE stage when the price is at its lowest. When it goes public, the listing price will be much higher.",
    },
    {
      title: "What is the WienerAI Presale?",
      desc: "The WienerAI Presale allows buyers to secure WienerAI tokens at a drastically lower price than the listing price. There are several stages, each lasting 2 days. At each stage, the price will increase until the presale is over.",
    },
    {
      title: "I Bought WienerAI. Where Can I See My Tokens?",
      desc: "Your token balance can be viewed in the Staking Menu or on the Buy Widget on the WienerAI Homepage.",
    },
    {
      title: "Is WienerAI A Meme Coin?",
      desc: "WienerAI is not only A meme coin–it’s your ticket to better trading, and the native token of the first AI-powered trading bot of its kind. WienerAI is building a legion of fans that he calls his Sausage Army. There’s a new dog in the dog park–and it’s WienerAI..",
    },
    {
      title: "Can I trust the presale’s smart contract security?",
      desc: "utilizing the robust Web3Payments utilizing the robust Web3Toolkit for optimal security. These contracts are custom-made for our project, ensuring that we maintain ownership and control over their security features.",
    },
    {
      title: "Do I need a crypto wallet to buy?",
      desc: "Yes, you will need a crypto wallet to buy and claim your presale $WAI. We recommend using Best Wallet , a decentralised crypto wallet that makes it easy to buy crypto for the first time, as well as buy into token presale. Once you’ve set up and added funds to your Best Wallet , you can connect to the widget at the top of the page to purchase some presale $WAI.",
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <CollapsibleItem
          key={index}
          title={item.title}
          desc={item.desc}
          isExpanded={openIndexes.includes(index)}
          onToggle={() => toggleCollapse(index)}
        />
      ))}
    </>
  );
};

export default Collapse;
