'use client'
import { ArticleContents } from "./article-contents"
import { useObserver } from "@/hooks/useObserver"
import React, { Ref, useEffect, useRef, useState } from "react"
import { Footer } from "./footer"
import { Article } from "@/payload-types"
import { addHeadingId } from "@/lib/utils"

type ArticleBodyPops = {
  article: Article
}

export function ArticleBody({article}: ArticleBodyPops){
  const [activeId, setActiveId] = useState('')
  let refElement = useObserver(setActiveId)
  const content =  addHeadingId(article.content_html || "")
  const sections = article.content?.root.children
    .filter(child => child.tag === "h2")
    .map((child) => child.children[0].text)

  return (
    <div className="flex flex-col-reverse gap-8 lg:flex-row md:mt-28 max-w-full">
      <article className="lg:max-w-[75%]">
        <main
          ref={refElement}
          dangerouslySetInnerHTML={{__html: content }}
          className="[&>h2]:scroll-mt-14 py-8 md:px-6
          [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mb-2 [&>h2]:mt-11
          [&>p]:text-muted-foreground"
        />
        <Footer className="mt-14"/>
      </article>
      <ArticleContents sections={sections as string[]} activeId={activeId} />
    </div>
  )
}