import { ArticleBody } from '@/components/article-body'
import { ArticleHeader } from '@/components/article-header'
import { getArticle } from '@/lib/pb'
import { error } from 'console'

type ArticleParams = {
  params: {id: string}
  searchParams: {}
}

export default async function Page(data: ArticleParams){
  const article = await getArticle(data.params.id)
  let sections = article.expand?.sections

  if(!sections){
    throw error("There are no sections!")
  }

  sections.sort((a, b) => {return a.position - b.position})

  return (
    <main className='px-10'>
      <ArticleHeader article={article}/>
      <ArticleBody sections={sections}/>
    </main>
  )
}