import Image from "next/image";
import { ArticleCard } from "@/components/article-card";
import PocketBase from 'pocketbase';
import { TypedPocketBase } from "@/types/pocketbase-types";

export default async function Home() {
  let posts = await getPosts()
  // console.log(posts)

  return (
    <main className="items-center w-9/12 m-auto">
      <h1 className="text-2xl font-semibold py-6">All Articles</h1>
      <div className="flex flex-col gap-4 items-center mb-12">
        {posts.map( (post) => (
          <ArticleCard key={post.id} {...post}/>
        ))}
      </div>

    </main>
  );
}

async function getPosts(){
  const pb = new PocketBase('http://127.0.0.1:8090') as TypedPocketBase;
  const posts = await pb.collection('posts').getList(1,10)
  return posts.items
}