import { GearIcon, SymbolIcon, UpdateIcon } from "@radix-ui/react-icons"

export default function Loading(){

  return (
    <div className="w-full flex justify-center">
      <UpdateIcon className="w-10 animate-spin"/>
    </div>
  )
}