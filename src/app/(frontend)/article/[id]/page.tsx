import { ArticleBody } from '@/components/article-body'
import { ArticleHeader } from '@/components/article-header'
import { addView, getArticle } from '@/app/action'
import { notFound } from 'next/navigation'
// No longer need to import Head from 'next/head'
// import Head from 'next/head'
import { Metadata } from 'next'

type ArticleParams = {
  params: Promise<{id: string}>
  searchParams: Promise<{}>
}

// This function is now responsible for setting your page's metadata
export async function generateMetadata(data: ArticleParams): Promise<Metadata> {
  const id = (await data.params).id
  const article = await getArticle(id).catch(() => notFound())

  return {
    title: article.title,
    description: article.category, // You can add other metadata fields here
    openGraph: {
      title: article.title,
      description: article.category,
      images: [{url: article.thumbnail.toString()}],
      siteName: 'Techtonic',
    },
  };
}

export default async function Page(data: ArticleParams){
  const id = (await data.params).id
  const article = await getArticle(id).catch(() => notFound())
  
  await addView({...article})

  return (
    <main className='px-6 md:px-10'>
      {/* The <Head> component is removed from here */}
      <ArticleHeader article={article}/>
      <ArticleBody article={article}/>
    </main>
  )
}