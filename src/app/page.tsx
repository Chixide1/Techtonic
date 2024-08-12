import { ArticleCard } from "@/components/article-card";
import { getArticles } from "@/lib/pb";

export default async function Index() {
  let articles = await getArticles()
  console.log(articles)

  return (
    <main className="items-center w-9/12 m-auto">
      <h1 className="text-2xl font-semibold py-6">All Articles</h1>
      <div className="flex flex-col gap-4 items-center mb-12">
        {articles.items.map( (article) => (
          <ArticleCard key={article.id} {...article}/>
        ))}
      </div>

    </main>
  );
}