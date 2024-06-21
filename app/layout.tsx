import { generateMetadata } from "@/src/utils/seo";
import { ToastContainer } from "react-toastify";
import { AppProvider } from "./AppProvider";
import "./globals.css";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Oracle Meme – Revolutionize Meme Culture with Blockchain Technology"
      />
      <meta name="twitter:site" content="@https://oraclememe.net" />
      <meta
        name="twitter:description"
        content="Join Oracle Meme in redefining meme culture with our blockchain-based platform. Participate in our presale to get early access to OMEME tokens and engage with a vibrant community of creators and inves"
      />
      <meta
        name="twitter:image"
        content="https://oraclememe.net/thumbnail.png"
      />
      <meta name="twitter:image:alt" content="thumbnail" /> */}

      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
