import { MagnifyingGlassIcon, UpdateIcon } from "@radix-ui/react-icons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { filterArticles, getImgSrc } from "@/app/action";
import React, { Dispatch, SetStateAction, Suspense, useState } from "react";
import { ArticlesRecord } from "@/lib/pocketbase-types";
import Link from "next/link";
import { debounce } from "lodash"
import Image from "next/image";

const formSchema = z.object({
  query: z.string().min(3).max(30),
})

type SearchFormProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function SearchForm({setOpen}: SearchFormProps) {
  const [searched, setSearched] = useState(false)
  const [results, setResults] = useState<ArticlesRecord[]>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  })

  async function searchArticles(values: z.infer<typeof formSchema>) {

    if (values.query) {
      setSearched(true)
      let filteredArticles = await filterArticles(values.query)
      setResults(filteredArticles.items)
    }
    else (
      setSearched(false)
    )
  }

  return (
    <section className="h-full w-full" id="searchform">
      <Form {...form}>
        <form onSubmit={e => e.preventDefault()} onKeyUp={debounce(form.handleSubmit(searchArticles),1500)} className='border-b border-border py-1 px-2 relative'>
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className='dark:text-muted-foreground' />
                </FormLabel>
                <FormControl>
                  <Input {...field} className="border-0 bg-popover text-popover-foreground placeholder:text-xs placeholder:text-muted-foreground block w-full py-2 pl-7 focus:outline-none sm:text-sm"
                    placeholder="Search articles with at least 3 letters..." type="text" name="search" />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
      <ul className="search-form py-3 px-2 overflow-y-auto h-[75vh] max-h-full">
        {searched && <h6 className="text-xs text-muted-foreground pb-2 pl-2">Articles</h6>}
        {searched && results?.map((article) => (
          <li key={`q-${article.id}`}>
            <Link href={`/article/${article.id}`} onClick={() => setOpen(false)}
            className="p-2 flex max-w-full gap-2 rounded-lg hover:bg-accent">
              <Image src={article.img} alt="Article Image" className="w-1/5 rounded-lg" width={1000} height={1000}
              placeholder='blur' blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcw/C+HgAE1wIMDblCWgAAAABJRU5ErkJggg=="/>
              <span className="text-xs">{article.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}