'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

export async function filterArticles(query: string){
    return await payload.find({
        collection: "articles",
        where: {
          title: {
            contains: query
          }
        }
    })
}

export async function getArticles(page: number = 1){
  return await payload.find({
    collection: "articles",
    page: page,
    limit: 5
  })
}

export async function getArticle(id: string){
  return await payload.findByID({
    collection: "articles",
    id: id,
  })
}

export async function addView({ id, views }: { id: string, views: number }){
  return await payload.update({
    collection: "articles",
    where: {
      id: {
        equals: id
      }
    },
    data: {
      views: views + 1
    }
  })
}