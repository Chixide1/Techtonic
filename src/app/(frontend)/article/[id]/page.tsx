import { ArticleBody } from '@/components/article-body'
import { ArticleHeader } from '@/components/article-header'
import { addView, getArticle } from '@/app/action'
import { notFound } from 'next/navigation'
import Head from 'next/head'
import { Metadata } from 'next'

type ArticleParams = {
  params: Promise<{id: number}>
  searchParams: Promise<{}>
}

export default async function Page(data: ArticleParams){
  const id = (await data.params).id
  const article = await getArticle(id).catch(() => notFound())
  await addView({...article})

  return (
    <main className='px-6 md:px-10'>
      <Head>
        <title key="title">{article.title}</title>
      </Head>
      <ArticleHeader article={article}/>
      <ArticleBody article={article}/>
    </main>
  )
}

export async function generateMetadata(data: ArticleParams): Promise<Metadata> {
  const id = (await data.params).id
  const article = await getArticle(id).catch(() => notFound())

  return {
    title: article.title,
    description: article.category,
  };
}