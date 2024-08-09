import { CrumpledPaperIcon } from '@radix-ui/react-icons'
import { Socials } from './socials'
import { Searchbar } from './searchbar'
import { ThemeButton } from './theme-button'


export function Header() {
  return (
    <header className='flex justify-between items-center w-full border-gray-200 dark:border-0 dark:bg-background/95 backdrop-blur-sm p-3 px-8 max-w-full sticky top-0 z-30'>
      <div className='flex items-center'>
        <CrumpledPaperIcon className='mr-2 w-6'/>
        <h5 className='font-semibold tracking-tight'>Chikezie</h5>
        <span className='text-gray-600 dark:text-muted-foreground pl-2 whitespace-nowrap font-semibold'>/ Blog</span>
      </div>
      <div className='flex'>
        <ThemeButton/>
        <Searchbar />
        <Socials/>
      </div>
    </header>
  )
}