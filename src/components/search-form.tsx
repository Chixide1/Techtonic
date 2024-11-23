import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import React, { Dispatch, SetStateAction, Suspense, useState } from "react";
import Link from "next/link";
import { debounce } from "lodash"
import Image from "next/image";
import { Article, Media } from "../payload-types"
import { filterArticles } from "@/lib/action";
import Loading from "@/app/(frontend)/loading";

type SearchFormProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
}

const formSchema = z.object({ query: z.string().min(3).max(15) })

export default function SearchForm({ setOpen }: SearchFormProps) {
  const [searched, setSearched] = useState(false)
  const [results, setResults] = useState<Article[]>()

  const {formState, formState: {isLoading }, ...form} = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  })

  async function searchArticles(values: z.infer<typeof formSchema>) {
    if (values.query) {
      setSearched(true)
      filterArticles(values.query)
        .then(
          results => setResults(results.docs)
        )
    }
    else (
      setSearched(false)
    )
  }

  return (
    <search className="h-full w-full" id="searchform">
      <Form {...form} formState={formState}>
        <form
          onSubmit={e => e.preventDefault()}
          onKeyUp={debounce(form.handleSubmit(searchArticles), 1500)}
          className='border-b border-border py-1 px-2 relative'>
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
        {searched && isLoading ? <Loading/> : results?.map((article) => (
          <li key={`q-${article.id}`}>
            <Link href={`/article/${article.id}`} onClick={() => setOpen(false)}
              className="p-2 flex max-w-full gap-2 rounded-lg hover:bg-accent">
              <Image src={(article.thumbnail as Media).url || ""} alt="Article Image" className="w-1/5 rounded-lg max-w-24 max-h-14" width={1000} height={1000} />
              <h5 className="text-sm text-pretty flex items-center">{article.title}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </search>
  )
}