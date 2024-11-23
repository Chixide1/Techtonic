// import { Card } from "@/components/card";
// import { Footer } from "@/components/footer";
// import { getArticles } from "@/app/action";
// import { notFound } from "next/navigation";
// import { CardPagination, CardPaginationProps } from "@/components/card-pagination";
import { getPayload } from 'payload'
import config from '@payload-config'
import { Card } from '@/components/card'

export default async function Index() {
  const payload = await getPayload({ config })
  
  const articles = await payload.find({
    collection: "articles"
  })

  console.log(articles)

  return (
    <main className="items-center w-9/12 m-auto">
      <h1 className="text-2xl font-semibold py-6">All Articles</h1>
      <div className="flex flex-col gap-4 items-center">
        {articles.docs.map( (article) => (
          <Card key={`c-${article.id}`} article={article}/>
        ))}
      </div>
        {/* <CardPagination pageInfo={articles}/>
        <Footer className="mt-14"/> */}
    </main>
  );
}