import Image from "next/image";
import { ArticleCard } from "@/components/article-card";
import PocketBase from 'pocketbase';
import { TypedPocketBase } from "@/types/pocketbase-types";

export default async function Home() {
  let posts = await getPosts()

  return (
    <main className="pt-10 flex flex-col items-center">
      {posts.items.map( (post) => (
        <ArticleCard key={post.id} {...post}/>
      ))}
    </main>
  );
}

async function getPosts(){
  const pb = new PocketBase('http://127.0.0.1:8090') as TypedPocketBase;
  const posts = await pb.collection('posts').getList(1, 50)
  return posts
}