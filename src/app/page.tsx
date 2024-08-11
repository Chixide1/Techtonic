import { ArticleCard } from "@/components/article-card";
import PocketBase from 'pocketbase';
import { TypedPocketBase } from "@/lib/pocketbase-types";


export default async function Index() {
  let articles = await getarticles()

  return (
    <main className="items-center w-9/12 m-auto">
      <h1 className="text-2xl font-semibold py-6">All Articles</h1>
      <div className="flex flex-col gap-4 items-center mb-12">
        {articles.map( (article) => (
          <ArticleCard key={article.id} {...article}/>
        ))}
      </div>

    </main>
  );
}

async function getarticles(){
  const pb = new PocketBase('http://127.0.0.1:8090') as TypedPocketBase;
  const articles = await pb.collection('articles').getList(1,10)
  return articles.items
}