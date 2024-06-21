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
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
