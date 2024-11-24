'use client'
import { ArticleContents } from "./article-contents"
import { useObserver } from "@/hooks/useObserver"
import React, { Ref, useEffect, useRef, useState } from "react"
import { Footer } from "./footer"
import { Article } from "@/payload-types"

type ArticleBodyPops = {
  article: Article
}

export function ArticleBody({article}: ArticleBodyPops){
  const [activeId, setActiveId] = useState('')
  let refElements = useObserver(setActiveId)

  return (
    <div className="flex flex-col-reverse gap-8 lg:flex-row md:mt-28 max-w-full">
      <article className="lg:max-w-[75%]">
        {/* {sections.map((section, i) => (
          <section key={section.id} id={section.id} ref={(el) => {refElements.current[i] = el}}
          className="md:px-6 py-8  border-border rounded-lg my-4 scroll-mt-14">
            <h1 className='text-xl font-semibold mb-2'>{section.heading}</h1>
            <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: section.content }} />
          </section>
        ))} */}
        <main
          dangerouslySetInnerHTML={{__html: article.content_html || ""}}
          className="scroll-mt-14 py-8 md:px-6
          [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mb-2 [&>h2]:mt-11
          [&>p]:text-muted-foreground"
        />
        <Footer className="mt-14"/>
      </article>
      {/* <ArticleContents sections={sections} activeId={activeId} /> */}
    </div>
  )
}