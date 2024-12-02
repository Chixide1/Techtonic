'use client'
import { ArticleContents } from "./article-contents"
import { useObserver } from "@/hooks/useObserver"
import React, { Ref, useCallback, useEffect, useRef, useState } from "react"
import { Footer } from "./footer"
import { Article } from "@/payload-types"

type ArticleBodyPops = {
  article: Article
}

export function ArticleBody({article}: ArticleBodyPops){
  const refElements = useRef<(HTMLElement | null)[]>([]);
  const refCallback = useCallback((el: HTMLElement) => {
    if(el){
      refElements.current.push(el)
    }
  },[refElements])

  return (
    <div className="flex flex-col-reverse gap-8 lg:flex-row md:mt-28 max-w-full">
      <article className="lg:max-w-[75%]">
        <main>
        {article.sections?.map((section, i) => (
          <section
            ref={refCallback}
            className="md:px-6 py-8 rounded-lg scroll-mt-14"
            key={section.id}
            id={section.id || ""}
          >
            <h2 className="text-xl font-semibold mb-2">{section.topic}</h2>
            <div
              className="[&>p]:text-muted-foreground [&>img]:w-1/2 [&>img]:m-3 [&>img]:ml-0 [&>img]:rounded-lg" 
              dangerouslySetInnerHTML={{__html: section.content_html || ""}}
            />
          </section>
        ))}
        </main>
        <Footer className="mt-14"/>
      </article>
      <ArticleContents sectionsRef={refElements} sections={article.sections} />
    </div>
  )
}