'use client'
import { SectionsRecord } from "@/lib/pocketbase-types"
import { ArticleContents } from "./article-contents"
import { useObserver } from "@/hooks/useObserver"
import React, { LegacyRef, useEffect, useRef, useState } from "react"
import { Footer } from "./footer"

type ArticleBodyProps = {
  sections: SectionsRecord[]
}

export function ArticleBody({sections}: ArticleBodyProps ){
  const [activeId, setActiveId] = useState('')
  let refElements = useObserver(setActiveId)

  return (
    <div className="flex flex-col-reverse gap-8 lg:flex-row md:mt-28 max-w-full">
      <article className="lg:max-w-[75%]">
        {sections.map((section, i) => (
          <section key={section.id} id={section.id} ref={(el) => {refElements.current[i] = el}}
          className="md:px-6 py-8  border-border rounded-lg my-4 scroll-mt-14">
            <h1 className='text-xl font-semibold mb-2'>{section.heading}</h1>
            <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: section.content }} />
          </section>
        ))}
        <Footer className="mt-14"/>
      </article>
      <ArticleContents sections={sections} activeId={activeId} />
    </div>
  )
}