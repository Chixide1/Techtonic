import { ArticleBody } from '@/components/article-body'
import { ArticleHeader } from '@/components/article-header'
import { getArticle, incrView } from '@/app/action'
import { RecordIdString } from '@/lib/pocketbase-types'
import { error } from 'console'

type ArticleParams = {
  params: {id: RecordIdString}
  searchParams: {}
}

export default async function Page(data: ArticleParams){
  const article = await getArticle(data.params.id)
  const updatedArticle = await incrView(article.id)
  // console.log(article)

  let sections = article.expand?.sections

  if(!sections){
    console.error("There are no sections to render!")
    return (
      <main className='px-10'>
        <ArticleHeader article={updatedArticle}/>
      </main>
    )
  }
  else{
    sections.sort((a, b) => {return a.position - b.position})
  }

  return (
    <main className='px-6 md:px-10'>
      <ArticleHeader article={updatedArticle}/>
      <ArticleBody sections={sections}/>
    </main>
  )
}