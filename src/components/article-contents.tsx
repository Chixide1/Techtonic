import { SectionsRecord } from "@/lib/pocketbase-types"
import Link from "next/link"

type ArticleContentsProps = {
  sections: SectionsRecord[]
}

export function ArticleContents({sections}: ArticleContentsProps){
  return (
    <aside className="w-auto">
      <div className="sticky top-20 border-gray-200 dark:border-gray-600 border-2 rounded-lg p-4">
      <h1 className="text-lg font-semibold">Contents</h1>
      {sections.map((section) => (
        <Link href={`#${section.id}`} key={section.id} className="">
          <h5 className='text-sm text-gray-600 dark:text-gray-400 py-2'>{section.heading}</h5>
        </Link>
      ))}
      </div>
    </aside>
  )
}