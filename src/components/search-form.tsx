import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { record, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { filterArticles, getImgSrc } from "@/app/action";
import React, { useState } from "react";
import { ArticlesRecord } from "@/lib/pocketbase-types";
import Link from "next/link";

const formSchema = z.object({
  search: z.string().min(3).max(30),
})

export default function SearchForm() {
  const [searched, setSearched] = useState(false)
  const [results, setResults] = useState<ArticlesRecord[]>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  })

  async function searchArticles(values: z.infer<typeof formSchema>) {

    if (values.search) {
      setSearched(true)
      let queryReturn = await filterArticles(values.search)

      queryReturn.items.map(record => {
        record.img = getImgSrc(record, record.img)
      })

      setResults(queryReturn.items)
    }
    else (
      setSearched(false)
    )
  }

  return (
    <section className="h-full w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(searchArticles)} className='border-b border-border py-1 px-2 relative'>
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className='dark:text-muted-foreground' />
                </FormLabel>
                <FormControl>
                  <Input {...field} className="border-0 bg-popover text-popover-foreground placeholder:text-xs placeholder:text-muted-foreground block w-full py-2 pl-7 focus:outline-none sm:text-sm"
                    placeholder="Search Articles" type="text" name="search" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <ul className="search-form py-3 px-2 overflow-y-auto h-[75vh] max-h-full">
        {searched && <h6 className="text-xs text-muted-foreground pb-2 pl-2">Articles</h6>}
        {searched && results?.map((article) => (
          <li>
            <Link key={`q-${article.id}`} href={`/article/${article.id}`}
              className="p-2 flex max-w-full gap-2 rounded-lg hover:bg-accent">
              <img src={article.img} alt="Article Image" className="w-1/5 rounded-lg"/>
              <span className="text-xs">{article.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}