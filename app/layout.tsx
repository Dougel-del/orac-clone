import { ToastContainer } from "react-toastify";
import { AppProvider } from "./AppProvider";
import "./globals.css";
import { generateMetadata } from "@/src/utils/seo";
export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
          <ToastContainer position="bottom-right" />
        </AppProvider>
      </body>
    </html>
  );
}
