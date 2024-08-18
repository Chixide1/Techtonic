import * as Dialog from '@radix-ui/react-dialog';
import SearchForm from './search-form';

type SearchDialogProps = {
  children?: JSX.Element
}

export function SearchDialog({ children }: SearchDialogProps) {

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/70 backdrop-blur-sm"/>
        <Dialog.Content className="dialog-content rounded-lg overflow-hidden bg-popover animate-content-show border border-border min-h-[75%] z-50">
          <Dialog.Title className='hidden'>Article Search Box</Dialog.Title>
          <SearchForm/>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}