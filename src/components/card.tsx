import { EyeOpenIcon, DashboardIcon, LayersIcon } from "@radix-ui/react-icons"
import { ArticlesResponse } from "@/lib/pocketbase-types"
import Link  from "next/link"
import { getImgSrc } from "@/app/action"
import Image from "next/image"

export function Card(article: ArticlesResponse) {
  const created: Date = new Date(article.created)
  const formattedArticleCreated = created.toLocaleDateString('en-GB', { day: 'numeric', year: 'numeric', month: 'short' })
  const imgSrc = getImgSrc(article, article.img)

  return (
    <Link href={`article/${article.id}`} className="w-full max-w-md md:max-w-none border border-border rounded-lg dark:bg-card group shadow-sm">
      <article className="flex flex-col flex-1 md:flex-row p-5 gap-8 max-w-full">
        <Image className="w-full md:max-w-56 rounded-lg" src={imgSrc} alt="Article image" width={200} height={1} />
        <div className="flex flex-col gap-4 flex-grow justify-between w-auto">
          <div className="flex w-full gap-6">
            <div className="text-sm font-semibold flex w-full max-w-[25ch]">
              <LayersIcon className="bg-violet-300 mr-1 max-w-5 text-violet-800 p-0.5 rounded-sm dark:bg-violet-800 dark:text-violet-100"/>
              <span className="overflow-hidden whitespace-nowrap text-ellipsis">{article.category}</span>
            </div>
            <span className="ml-auto text-neutral-600 text-sm max-w-[25ch] whitespace-nowrap overflow-hidden text-ellipsis dark:text-neutral-400">{formattedArticleCreated}</span>
          </div>
          <h5 className="text-lg font-semibold md:max-w-lg md:text-balance">{article.title}</h5>
          <div className="flex w-full justify-between">
            <span className="text-sm group-hover:text-primary group-hover:animate-bounce">Read More <span className="">&rarr;</span></span>
            <span className="flex gap-2 text-neutral-600 text-sm dark:text-neutral-400"><EyeOpenIcon strokeWidth={5} className="max-w-4" />{article.views.toLocaleString()}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}