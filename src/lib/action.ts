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