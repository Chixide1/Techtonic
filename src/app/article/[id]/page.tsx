import { ArticlesRecord, BaseSystemFields, SectionsRecord, TypedPocketBase } from '@/lib/pocketbase-types'
import PocketBase from 'pocketbase'

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
    <div className='px-10'>
      {sections?.map((section) => (
        <section className="py-5">
          <h1 key={section.id} className='text-lg font-semibold'>{section.heading} {section.position}</h1>
          <p key={section.id}>{section.content}</p>
        </section>
      ))}
    </div>
  )
}

async function getArticle(id: string){
  const pb = new PocketBase('http://127.0.0.1:8090') as TypedPocketBase;
  const article = await pb.collection('articles').getOne(id, { expand: 'sections'})
  return article as ArticlesRecord<{sections: SectionsRecord[]}>
}