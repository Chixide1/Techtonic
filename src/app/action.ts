'use server'

import { getPayload} from 'payload'
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
  const results = await payload.find({
    collection: "articles",
    pagination: false,
    limit: 1,
    where: {
      id : {
        equals: id
      }
    }
  })
  
  return results.docs[0];
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