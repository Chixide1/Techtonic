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
  let results = await incrView(data.params.id)

  if(article.views){
    article.views += 1
  } 
  // console.log(results)

  let sections = article.expand?.sections

  if(!sections){
    return error("There are no sections to render!")
  }
  else{
    sections.sort((a, b) => {return a.position - b.position})
  }

  return (
    <main className='px-10'>
      <ArticleHeader article={article}/>
      <ArticleBody sections={sections}/>
    </main>
  )
}