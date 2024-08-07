import { CrumpledPaperIcon } from '@radix-ui/react-icons'
import { Socials } from './socials'
import { Searchbar } from './searchbar'


export function Header() {
  return (
    <header className='flex justify-between items-center w-full border-gray-200 border-b p-3 px-8 max-w-full'>
      <div className='flex items-center'>
        <CrumpledPaperIcon className='mr-2 w-6'/>
        <h5 className='font-semibold tracking-tight'>Chikezie</h5>
        <span className='text-gray-600 pl-2 whitespace-nowrap font-semibold'>/ Blog</span>
      </div>
      <Socials/>
    </header>
  )
}