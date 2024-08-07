import Image from "next/image";
import { ArticleCard } from "@/components/article-card";

export default function Home() {
  return (
    <main className="pt-10 flex flex-col items-center">
      <ArticleCard/>
    </main>
  );
}
