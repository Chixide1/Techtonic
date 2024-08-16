'use client'

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { SearchDialog } from "./search-dialog";

export function SearchButton() {

  return (
    <SearchDialog>
      <button className="btn">
        <MagnifyingGlassIcon/>
      </button>
    </SearchDialog>
  );
}