// import { notFound } from "next/navigation";
import { getPayload } from 'payload'
import config from '@payload-config'
import { Card } from '@/components/card'
import { Footer } from '@/components/footer'
import { CardPagination } from '@/components/card-pagination'

type PageParams = {
  params: Promise<{}>
  searchParams: Promise<{
    page?: number
  }>
}

export default async function Index(parameters: PageParams) {
  const payload = await getPayload({ config })
  let page = (await parameters.searchParams).page
  
  const articles = await payload.find({
    collection: "articles",
    page: page ?? 1
  })

  return (
    <main className="items-center w-9/12 m-auto">
      <h1 className="text-2xl font-semibold py-6">All Articles</h1>
      <div className="flex flex-col gap-4 items-center">
        {articles.docs.map((article) => (
          <Card key={`c-${article.id}`} article={article}/>
        ))}
      </div>
        <CardPagination {...articles}/>
        <Footer className="mt-14"/>
    </main>
  );
}