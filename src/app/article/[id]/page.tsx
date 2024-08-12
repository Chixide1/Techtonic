import { ArticleHeader } from '@/components/article-header'
import { getArticle } from '@/lib/pb'

type ArticleParams = {
  params: {id: string}
  searchParams: {}
}

export default async function Page(data: ArticleParams){
  const article = await getArticle(data.params.id)
  const sections = article.expand?.sections

  if(sections){
    sections.sort((a, b) => {return a.position - b.position})
  }

  return (
    <main className='px-10'>
      <ArticleHeader article={article}/>
      {sections?.map((section) => (
        <section key={section.id} className="py-5">
          <h1 className='text-lg font-semibold'>{section.heading}</h1>
          <p>{section.content}</p>
        </section>
      ))}
    </main>
  )
}