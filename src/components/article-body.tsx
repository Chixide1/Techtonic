import { SectionsRecord } from "@/lib/pocketbase-types"
import { ArticleContents } from "./article-contents"

type ArticleBodyProps = {
  sections: SectionsRecord[]
}

export function ArticleBody({sections}: ArticleBodyProps ){
  
  return (
    <div className="flex flex-col-reverse gap-8 lg:flex-row mb-16">
      <article className="lg:max-w-[75%]">
        {sections.map((section) => (
          <section id={section.id} key={section.id} className="pt-14">
            <h1 className='text-xl font-semibold mb-2'>{section.heading}</h1>
            <p>{section.content}</p>
          </section>
        ))}
      </article>
      <ArticleContents sections={sections} />
    </div>
  )
}