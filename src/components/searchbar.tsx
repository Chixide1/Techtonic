import { Input } from "./ui/input";

export function Searchbar(){
    return (
        <form action="" className='w-64 h-full ml-auto'>
            <Input className="h-1/2 w-full text-xs placeholder:text-xs dark:bg-muted/40" id="searchbar" type="search" placeholder="Search Posts..."/>
        </form>
    )
}