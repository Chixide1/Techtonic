import { ArticleBody } from '@/components/article-body'
import { ArticleHeader } from '@/components/article-header'
import { getArticle } from '@/lib/action'
import { error } from 'console'

type ArticleParams = {
  params: Promise<{id: number}>
  searchParams: Promise<{}>
}

export default async function Page(data: ArticleParams){
  const id = (await data.params).id
  const article = await getArticle(id)
  // const updatedArticle = await incrView(article.id)

  return (
    <main className='px-6 md:px-10'>
      <ArticleHeader article={article}/>
      <ArticleBody article={article}/>
    </main>
  )
}