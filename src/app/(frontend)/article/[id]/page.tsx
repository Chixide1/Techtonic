import { ArticleBody } from '@/components/article-body'
import { ArticleHeader } from '@/components/article-header'
import { addView, getArticle } from '@/app/action'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Media } from '@/payload-types'

type ArticleParams = {
  params: Promise<{id: string}>
  searchParams: Promise<{}>
}

export async function generateMetadata(data: ArticleParams): Promise<Metadata> {
  const id = (await data.params).id
  const article = await getArticle(id).catch(() => notFound())

  return {
    title: article.title,
    description: article.category,
    openGraph: {
      title: article.title,
      description: article.category,
      images: [{url: getThumbnailUrl(article.thumbnail), width: 1200, height: 630, alt: article.title}],
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
      <ArticleHeader article={article}/>
      <ArticleBody article={article}/>
    </main>
  )
}

function getThumbnailUrl(thumbnail: Media | string) {
  thumbnail = thumbnail as Media
  const mediaPath = thumbnail.url + `?v=${thumbnail.id}`
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://techtonic.ckdoestech.com") + mediaPath
}