import { getImgSrc } from '@/lib/pb'
import { ArticlesRecord } from '@/lib/pocketbase-types'
import { EyeOpenIcon, LayersIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

type ArticleHeaderProps = {
  article: ArticlesRecord<any>
}

export function ArticleHeader({article}: ArticleHeaderProps){
  const created: Date = new Date(article.created)
  const formattedArticleCreated = created.toLocaleDateString('en-GB', { day: 'numeric', year: 'numeric', month: 'short' })
  let imgSrc = getImgSrc(article, article.img)

  return (
    <header className='flex gap-12 my-12'>
      <Image src={imgSrc} alt="An abstract picture" width={500} height={1} className='rounded-2xl'/>
      <div className='flex flex-col justify-between gap-4'>
        <span className='font-semibold text-sm'>
          <LayersIcon className="bg-violet-300 mr-1 text-violet-800 p-0.5 rounded-sm dark:bg-violet-800 dark:text-violet-100 max-w-4 inline-block"/>
          {article.category}
        </span>
        <h1 className='font-semibold text-3xl text-balance'>{article.title}</h1>
        <p className='text-gray-600 dark:text-gray-400'>
          <span className='text-sm'>{formattedArticleCreated}</span>
          <span className='px-4 text-gray-300'>|</span>
          <span className='text-sm'><EyeOpenIcon className="max-w-4 inline-block my-auto mr-1 "/>{article.views}</span>
        </p>
      </div>
    </header>
  )
}