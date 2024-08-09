import { EyeOpenIcon } from "@radix-ui/react-icons"
import { PostsRecord, PostsResponse } from "@/types/pocketbase-types"

export function ArticleCard(post: PostsResponse){
    const created: Date = new Date(post.created)
    const formattedPostCreated = created.toLocaleDateString('en-GB', { day: 'numeric', year: 'numeric', month: 'short'})

    return (
        <a href="#" className="w-full border-2 border-gray-200 rounded-lg">
            <article className="flex p-7 gap-8">
                <img className="max-w-64 rounded-lg" src={`http://127.0.0.1:8090/api/files/${post.collectionId}/${post.id}/${post.img}`} alt="Article image" />
                <div className="flex flex-col gap-4 flex-grow justify-between h-5/6">
                    <div className="flex justify-between w-full">
                        <span className="text-sm font-semibold">{post.category}</span>
                        <span className="text-gray-600 text-sm">{formattedPostCreated}</span>
                    </div>
                    <h5 className="text-2xl font-semibold max-w-xl text-balance">{post.title}</h5>
                    <div className="flex w-full justify-between">
                        <span className="text-sm">Read More &rarr;</span>
                        <span className="flex gap-2 text-gray-600 text-sm"><EyeOpenIcon strokeWidth={5} className="max-w-4"/>{post.views}</span>
                    </div>
                </div>
            </article>
        </a>
    )
}