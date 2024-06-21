import { Metadata } from "next";
import { defaultSEO, generateMetadata } from "@/src/utils/seo";
import HomeViewPage from "./views/HomeView/HomeViewPage";

export const metadata: Metadata = generateMetadata({
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
});

export default function Home() {
  return <HomeViewPage />;
}
