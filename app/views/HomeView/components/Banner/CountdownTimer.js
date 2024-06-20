"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const formatNumber = (number) => {
    return number.toString().padStart(2, "0");
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex gap-[8px]">
      <div className="py-[6px] px-[12px] flex flex-col items-center justify-center">
        <div className="text-[26px] font-bold leading-[1]">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="text-[14px]">Days</div>
      </div>
      <div className="py-[6px] px-[12px] flex flex-col items-center justify-center">
        <div className="text-[26px] font-bold leading-[1]">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-[14px]">Hours</div>
      </div>
      <div className="py-[6px] px-[12px] flex flex-col items-center justify-center">
        <div className="text-[26px] font-bold leading-[1]">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-[14px]">Mins</div>
      </div>
      <div className="py-[6px] px-[12px] flex flex-col items-center justify-center">
        <div className="text-[26px] font-bold leading-[1]">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-[14px]">Secs</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
