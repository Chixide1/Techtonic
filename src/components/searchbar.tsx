import { Input } from "./ui/input";

export function Searchbar(){
    return (
        <form action="" className='w-60 h-full'>
            <Input className="h-1/2 text-xs" id="searchbar" type="search" placeholder="Search Posts..."/>
        </form>
    )
}