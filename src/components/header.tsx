import { CrumpledPaperIcon } from '@radix-ui/react-icons'
import { GithubButton } from './github-button'
import { Searchbar } from './searchbar'
import { ThemeButton } from './theme-button'
import Link from 'next/link'


export function Header() {
  return (
    <header className='flex gap-9 justify-between items-center w-full border-gray-200 dark:border-0 dark:bg-background/95 backdrop-blur-sm p-3 px-8 max-w-full sticky top-0 z-30'>
      <Link href={'/'} className='flex items-center'>
        <CrumpledPaperIcon className='mr-2 w-6'/>
        <h5 className='font-semibold tracking-tight hidden md:inline'>Example Blog App</h5>
        <span className='text-gray-600 dark:text-muted-foreground pl-2 whitespace-nowrap font-semibold hidden md:inline'>/ Blog</span>
      </Link>
      <div className='flex'>
        <Searchbar />
        <GithubButton/>
        <ThemeButton/>
      </div>
    </header>
  )
}