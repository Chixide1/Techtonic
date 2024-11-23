import { UpdateIcon } from "@radix-ui/react-icons"

export default function Loading(){

  return (
    <div className="w-full flex justify-center">
      <UpdateIcon className="w-10 h-[90vh] animate-spin"/>
    </div>
  )
}