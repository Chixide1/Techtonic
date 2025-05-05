import { Card } from '@/components/card'
import { Footer } from '@/components/footer'
import { CardPagination } from '@/components/card-pagination'
import { getArticles } from '@/app/action'
import { notFound } from 'next/navigation'

type PageParams = {
  params: Promise<{}>
  searchParams: Promise<{
    page?: number
  }>
}

// const payload = await getPayload({ config })

export default async function Index(parameters: PageParams) {
  let page = (await parameters.searchParams).page  
  const articles = await getArticles(page ?? 1)

  if((articles.page || 0) > articles.totalPages){
    return notFound()
  }
  
  return (
    <main className="items-center w-9/12 m-auto">
      <h1 className="text-2xl font-semibold py-6">All Articles</h1>
      <div className="flex flex-col gap-4 items-center">
        {articles.totalDocs > 0 ? articles.docs.map((article) => (
          <Card key={`c-${article.id}`} article={article}/>
        )) : (
          <div className="py-16 flex items-center justify-center w-full">
            <h1>No Articles Found</h1>
          </div>
        )}
      </div>
        <CardPagination {...articles}/>
        <Footer className="mt-14"/>
    </main>
  );
}