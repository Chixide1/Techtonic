import { GithubButton } from './github-button'
import { ThemeButton } from './theme-button'
import Link from 'next/link'
import { SearchButton } from './search-button'
import { CrumpledPaperIcon } from '@radix-ui/react-icons'

export function Header() {
  return (
    <header className='flex gap-12 justify-between items-center w-full dark:bg-background/80 backdrop-blur-sm p-3 px-8 max-w-full sticky top-0 z-30'>
      <Link href={'/'} className='flex items-center'>
        <CrumpledPaperIcon className='mr-2 w-6'/>
        <h5 className='font-semibold tracking-tight hidden sm:inline'>Techtonic</h5>
        <span className='text-neutral-600 dark:text-neutral-400 pl-2 whitespace-nowrap font-semibold hidden md:inline'>/ Blog</span>
      </Link>
      <div className='flex flex-shrink-0 gap-4'>
        <SearchButton/>
        <GithubButton/>
        <ThemeButton/>
      </div>
    </header>
  )
}