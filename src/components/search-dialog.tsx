'use client'
import * as Dialog from '@radix-ui/react-dialog';
import SearchForm from './search-form';
import { useState } from 'react';

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
        <Dialog.Overlay className="inset-0 fixed bg-black/70 backdrop-blur-sm"/>
        <Dialog.Content aria-describedby='searchform' className="dialog-content rounded-lg overflow-hidden bg-popover animate-content-show border border-border min-h-[75%] z-50">
          <Dialog.Title className='hidden'>Article Search Box</Dialog.Title>
          <Dialog.Description className='hidden'>Search Dialog for finding articles on the website</Dialog.Description>
          <SearchForm setOpen={setOpen}/>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}