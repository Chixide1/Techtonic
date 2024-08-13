import { CrumpledPaperIcon } from '@radix-ui/react-icons'
import { GithubButton } from './github-button'
import { Searchbar } from './searchbar'
import { ThemeButton } from './theme-button'
import Link from 'next/link'


export function Header() {
  return (
    <header className='flex gap-12 justify-between items-center w-full dark:bg-background/50 backdrop-blur-sm p-3 px-8 max-w-full sticky top-0 z-30'>
      <Link href={'/'} className='flex flex-shrink-0 items-center'>
        <CrumpledPaperIcon className='mr-2 w-6'/>
        <h5 className='font-semibold tracking-tight hidden sm:inline'>Example Blog App</h5>
        <span className='text-neutral-600 dark:text-neutral-400 pl-2 whitespace-nowrap font-semibold hidden md:inline'>/ Blog</span>
      </Link>
      <Searchbar />
      <div className='flex flex-shrink-0'>
        <GithubButton/>
        <ThemeButton/>
      </div>
    </header>
  )
}