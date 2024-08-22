'use server'
import PocketBase from 'pocketbase';
import { ArticlesRecord, RecordIdString, SectionsRecord, TypedPocketBase } from "@/lib/pocketbase-types";
const pb_url = process.env.PB_URL

export async function getArticles(page: number = 1, perPage: number = 5){
  const pb = new PocketBase(pb_url) as TypedPocketBase;
  const articles = await pb.collection('articles').getList(page, perPage);
  return articles
}

export async function getArticle(id: RecordIdString){
  const pb = new PocketBase(pb_url) as TypedPocketBase;
  const article = await pb.collection('articles').getOne(id, { expand: 'sections'})
  return article as ArticlesRecord<{sections: SectionsRecord[]}>
}

export async function getImgSrc(record: ArticlesRecord<any>, imgName: string) {
  const pb = new PocketBase(pb_url) as TypedPocketBase;
  let url = pb.files.getUrl(record, imgName)
  return url
}

export async function filterArticles(query: string){
  const pb = new PocketBase(pb_url) as TypedPocketBase;
  const results = pb.collection('articles').getList(1, 10, {
    filter: `title ~ "${query}"`
  })
  return results
}

export async function incrView(id: RecordIdString){
  const pb = new PocketBase(pb_url) as TypedPocketBase;
 
  const updatedRecord = await pb.send(`/addView/${id}`, {method: 'GET'})
  return updatedRecord
}