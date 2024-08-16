import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { Input } from './ui/input';


type SearchDialogProps = {
  children?: JSX.Element
}

export function SearchDialog({ children }: SearchDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/70"/>
        <Dialog.Content className="DialogContent rounded-lg overflow-hidden bg-popover animate-content-show border border-border min-h-[75%]">
          <form className='border-b border-border py-1 px-2 relative block'>
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                <MagnifyingGlassIcon className='dark:text-muted-foreground' />
              </span>
              <input className="bg-popover text-popover-foreground placeholder:text-xs placeholder:text-muted-foreground block w-full py-2 pl-7 focus:outline-none sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}