import Link from "next/link";
import { githubLink } from "./github-button";

export function Footer({className}: {className?: string}){

  return (
    <footer className={"pb-14 mb-28 text-xs text-neutral-600 dark:text-neutral-400" + ' ' + className}>
      <div className="w-full flex gap-4 justify-center h-full">
        <p>© {new Date().getFullYear()} {"Techtonic Blog"}</p>
        <div className="h-4 bg-neutral-400 dark:bg-neutral-800 w-[0.5px]"></div>
        <Link href={githubLink} target="_blank"
        className="hover:text-black dark:hover:text-white">Github</Link>
      </div>
    </footer>
  )
}