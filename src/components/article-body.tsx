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
    <div className="flex flex-col-reverse gap-8 lg:flex-row mt-28">
      <article className="lg:max-w-[75%]">
        {sections.map((section, i) => (
          <section key={section.id} id={section.id} ref={(el) => {refElements.current[i] = el}}
          className="px-6 py-8 border border-border rounded-lg my-4 bg-card scroll-mt-14">
            <h1 className='text-xl font-semibold mb-2'>{section.heading}</h1>
            <p className="text-muted-foreground">{section.content}</p>
          </section>
        ))}
        <Footer className="mt-14"/>
      </article>
      <ArticleContents sections={sections} activeId={activeId} />
    </div>
  )
}