import { Article, Media } from '@/payload-types'
import { EyeOpenIcon, LayersIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

type ArticleBodyPops = {
  article: Article
}

export async function ArticleHeader({article}: ArticleBodyPops){
  const created = new Date(article.createdAt).toLocaleDateString('en-GB', { day: 'numeric', year: 'numeric', month: 'short' })

  return (
    <header className='flex flex-wrap md:flex-nowrap min-w-72 gap-12 mt-12 md:max-w-full'>
      <Image src={(article.thumbnail as Media).url || ""}
        alt={(article.thumbnail as Media).url || ""} width={1000} height={1000}
        className='rounded-2xl md:max-w-[50%] max-h-[60vh]'
      />
      <div className='flex flex-col justify-between gap-4'>
        <span className='font-semibold text-sm'>
          <LayersIcon className="bg-violet-300 mr-1 text-violet-800 p-0.5 rounded-sm dark:bg-violet-800 dark:text-violet-100 max-w-4 inline-block"/>
          {article.category}
        </span>
        <h1 className='font-semibold text-3xl text-balance'>{article.title}</h1>
        <p className='text-neutral-600 dark:text-neutral-400'>
          <span className='text-sm'>{created}</span>
          <span className='px-4 text-sm text-neutral-300'>|</span>
          <span className='text-sm'><EyeOpenIcon className="max-w-4 inline-block my-auto mr-1 "/>{article.views}</span>
        </p>
      </div>
    </header>
  )
}