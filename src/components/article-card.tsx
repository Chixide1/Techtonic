import { EyeOpenIcon, DashboardIcon, LayersIcon } from "@radix-ui/react-icons"
import { ArticlesResponse } from "@/lib/pocketbase-types"
import Link  from "next/link"
import { getImgSrc } from "@/lib/pb"

export function ArticleCard(article: ArticlesResponse) {
  const created: Date = new Date(article.created)
  const formattedArticleCreated = created.toLocaleDateString('en-GB', { day: 'numeric', year: 'numeric', month: 'short' })
  const imgSrc = getImgSrc(article, article.img)

  return (
    <Link href={`article/${article.id}`} className="w-full border-2 border-gray-200 rounded-lg dark:bg-card dark:border dark:border-gray-500">
      <article className="flex p-5 gap-8">
        <img className="max-w-56 rounded-lg" src={imgSrc} alt="Article image" />
        <div className="flex flex-col gap-4 flex-grow justify-between">
          <div className="flex justify-between w-full">
            <div className="text-sm font-semibold flex whitespace-nowrap">
              <LayersIcon className="bg-violet-300 mr-1 text-violet-800 p-0.5 rounded-sm dark:bg-violet-800 dark:text-violet-100"/>
              <span>{article.category}</span>
            </div>
            <span className="text-gray-600 text-sm dark:text-gray-400">{formattedArticleCreated}</span>
          </div>
          <h5 className="text-lg font-semibold max-w-xl text-balance w-8/12">{article.title}</h5>
          <div className="flex w-full justify-between">
            <span className="text-sm">Read More &rarr;</span>
            <span className="flex gap-2 text-gray-600 text-sm dark:text-gray-400"><EyeOpenIcon strokeWidth={5} className="max-w-4" />{article.views.toLocaleString()}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}