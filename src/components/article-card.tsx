import { EyeOpenIcon } from "@radix-ui/react-icons"

type ArticleCardProps = {
    className?: string
}

export function ArticleCard(className: ArticleCardProps){
    return (
        <a href="#" className="w-11/12 border border-gray-200 rounded-lg">
            <article className="flex p-7 gap-8">
                <img className="max-w-64 rounded-lg" src="post.svg" alt="" />
                <div className="flex flex-col gap-4 flex-grow justify-between">
                    <div className="flex justify-between w-full">
                        <span className="text-sm font-semibold">Tech Stack</span>
                        <span className="text-gray-600 text-sm">Jul 1, 2024</span>
                    </div>
                    <h5 className="text-2xl font-semibold max-w-xl text-balance">How to create a Blog App using Next JS. How to create the same app in SvelteKit</h5>
                    <div className="flex w-full justify-between">
                        <span className="text-sm">Read More &rarr;</span>
                        <span className="flex gap-2 text-gray-600 text-sm"><EyeOpenIcon strokeWidth={5} className="max-w-4"/> 356</span>
                    </div>
                </div>
            </article>
        </a>
    )
}