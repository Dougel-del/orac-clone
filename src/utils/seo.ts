import { Metadata } from "next";

export type TSEO = {
  title: string;
  keywords?: string[];
  description: string;
  thumbnail: string;
};

export const defaultSEO: TSEO = {
  title: "Oracle Meme – Revolutionize Meme Culture with Blockchain Technology",
  description:
    "Join Oracle Meme in redefining meme culture with our blockchain-based platform. Participate in our presale to get early access to OMEME tokens and engage with a vibrant community of creators and investors.",
  thumbnail: "/meta-image.png",
};

export function generateMetadata({
  title,
  description,
  thumbnail,
  keywords,
}: Partial<TSEO> = {}): Metadata {
  return {
    title: title ?? defaultSEO.title,
    description: description ?? defaultSEO.description,
    keywords: keywords ?? defaultSEO.keywords,
    twitter: {
      title: title ?? defaultSEO.title,
      description: description ?? defaultSEO.description,
      images: [thumbnail ?? defaultSEO.thumbnail],
      site: "@oraclememecoin",
    },
    openGraph: {
      title: title ?? defaultSEO.title,
      description: description ?? defaultSEO.description,
      images: [thumbnail ?? defaultSEO.thumbnail],
      siteName: "@oraclememecoin",
    },
  };
}
