import { SectionsRecord } from "@/lib/pocketbase-types"
import Link from "next/link"

type ArticleContentsProps = {
  sections: SectionsRecord[]
}

export function ArticleContents({sections}: ArticleContentsProps){
  return (
    <aside className="w-auto pt-10 hidden lg:block">
      <div className="sticky top-12 rounded-lg p-4">
      <h1 className="text-sm font-semibold pb-2">On this page</h1>
      {sections.map((section) => (
        <Link href={`#${section.id}`} key={section.id} className="">
          <h5 className='text-sm text-neutral-600 hover:text-inherit dark:text-neutral-400 py-2'>{section.heading}</h5>
        </Link>
      ))}
      </div>
    </aside>
  )
}