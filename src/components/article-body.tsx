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
    <div className="flex flex-col-reverse gap-8 lg:flex-row">
      <article className="lg:max-w-[75%]">
        {sections.map((section, i) => (
          <section key={section.id} id={section.id} ref={(el) => {refElements.current[i] = el}} className="pt-14">
            <h1 className='text-xl font-semibold mb-2'>{section.heading}</h1>
            <p>{section.content}</p>
          </section>
        ))}
        <Footer className="mt-16"/>
      </article>
      <ArticleContents sections={sections} activeId={activeId} />
    </div>
  )
}