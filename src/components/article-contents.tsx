import { useObserver } from "@/hooks/useObserver"
import Link from "next/link"

type ArticleContentsProps = {
  sections: string[],
  activeId: string
}

export function ArticleContents({sections, activeId}: ArticleContentsProps){

  return (
    <aside className="w-auto pt-10 hidden lg:block">
      <div className="sticky top-12 rounded-lg p-4">
      <h1 className="text-sm font-semibold pb-2">On this page</h1>
      {sections.map((section, i) => (
        <Link href={`#section-${i}`} key={`link-section-${i}`}>
          <h5 className={'text-xs hover:text-inherit text-neutral-600 dark:text-neutral-400 py-2'
          + ' ' + (activeId === `section-${i}` && "!text-primary")}>{section}</h5>
        </Link>
      ))}
      </div>
    </aside>
  )
}