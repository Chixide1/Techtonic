import { Input } from "./ui/input";

export function Searchbar(){
    return (
        <form action="" className='w-64 h-full ml-auto'>
            <Input className="h-1/2 w-full text-xs placeholder:text-xs focus-within:outline-none dark:bg-muted/80 placeholder:text-neutral-600 text-inherit placeholder:dark:text-neutral-400 focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-primary focus-visible:ring-offset-2" id="searchbar" type="search" placeholder="Search Posts..."/>
        </form>
    )
}