import { Card } from "@/components/card";
import { Footer } from "@/components/footer";
import { getArticles } from "@/app/action";

export default async function Index() {
  let articles = await getArticles()
  // console.log(articles)

  return (
    <main className="items-center w-9/12 m-auto">
      <h1 className="text-2xl font-semibold py-6">All Articles</h1>
      <div className="flex flex-col gap-4 items-center">
        {articles.items.map( (article) => (
          <Card key={article.id} {...article}/>
        ))}
      </div>
        <Footer className="mt-14"/>
    </main>
  );
}