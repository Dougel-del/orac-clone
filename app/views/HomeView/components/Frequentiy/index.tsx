import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const QUESTIONS = [
  {
    title: "What is ORACLE MEME?",
    des: "Oracle Meme is a cryptocurrency initiative that combines meme culture with blockchain technology to create, share, and monetize memes. Our platform uses our native token, OMEME, to incentivize community engagement and creativity.",
  },
  {
    title: "How do I participate in the presale?",
    des: "To participate in the Oracle Meme presale, connect a compatible crypto wallet to our website and exchange crypto for OMEME tokens. Detailed steps and requirements are provided on our presale page.",
  },
  {
    title: "When do I receive my presale tokens?",
    des: "You will be able to claim your OMEME tokens once the presale ends. The claim date will be announced towards the end of the presale.",
  },
  {
    title: "What are the project’s future plans?",
    des: "Following the presale, Oracle Meme will launch its main platform and introduce features for meme creation and monetization. We aim to expand through partnerships, community events, and further innovations in blockchain technology.",
  },
  {
    title: "How do I contact the team?",
    des: "We are here to help! Join our Telegram channel to get immediate support from an ORACLE MEME moderator. You can also send an email to support@oraclememe.com and wait for a response. For partnership access partner.oraclememe.com",
  },
];

const Frequentiy = () => {
  return (
    <div id="faq" className="pt-[40px] md:pt-[100px] pb-[60px] w-full">
      <div className="container relative">
        <div className="absolute bottom-[-45%] right-0 w-[800px] h-[780px] z-0">
          <Image src="/assets/faq-pepe.svg" alt="faq-pepe" fill />
        </div>

        <div
          className="text-[#ffd700] text-center uppercase text-[32px] md:text-[48px] xl:text-[64px] font-bold flex justify-center items-center m-auto mb-[48px]"
          style={{ textShadow: "0px 3px 8px #FFA300" }}
        >
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <Accordion type="single" collapsible className="w-full z-[1] relative">
          {QUESTIONS.map((ques, idx) => (
            <AccordionItem
              key={idx}
              value={(idx + 1).toString()}
              className="py-[25px] px-[15px]"
            >
              <AccordionTrigger className="py-[8px] text-[20px] text-white font-bold text-left">
                {ques.title}
              </AccordionTrigger>
              <AccordionContent className="py-[8px] text-[20px] text-white">
                {ques.des}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Frequentiy;
