import Image from "next/image";
import Link from "next/link";
import React from "react";

const Social = () => {
  return (
    <div className="flex justify-center md:justify-start gap-[10px]">
      <Link href="https://t.me/oraclecoinmeme">
        <Image
          src="/assets/telegram.svg"
          alt="telegram"
          width={28}
          height={28}
        />
      </Link>
      <Link href="/">
        <Image
          src="/assets/discord-dark.svg"
          alt="discord-dark"
          width={28}
          height={28}
        />
      </Link>
      <Link href="https://t.me/oraclecoinmeme">
        <Image src="/assets/x.svg" alt="x" width={28} height={28} />
      </Link>
    </div>
  );
};

export default Social;
