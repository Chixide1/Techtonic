import { CrumpledPaperIcon } from '@radix-ui/react-icons'

export function Header() {
  return (
    <header className='flex justify-between w-full border-slate-200 border-b p-2'>
      <h5 className='flex font-semibold tracking-tight'>
        <CrumpledPaperIcon className='h-auto mx-2' width={20}/>Chikezie<span className='text-gray-600 pl-2 line'>/ Blog</span>
      </h5>
    </header>
    
  )
}
