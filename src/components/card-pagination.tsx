import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export type CardPaginationProps = {
    hasNextPage: boolean
    hasPrevPage: boolean
    page?: number
    totalPages: number
}

export function CardPagination({ hasNextPage, hasPrevPage, page, totalPages }: CardPaginationProps) {

  if(page === undefined){
    page = 1
  }

  return (
    <Pagination className="mt-4">
      <PaginationContent>
          {(hasPrevPage) && 
            <PaginationItem>
              <PaginationPrevious href={'/?page=' + (page - 1)}/>
            </PaginationItem>
          }
        {Array(totalPages).fill('_').map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink href={'/?page=' + (i + 1)}>{i + 1}</PaginationLink>
          </PaginationItem>
        ))}
        {(hasNextPage) &&
        <PaginationItem>
          <PaginationNext href={'/?page=' + (page + 1)} />
        </PaginationItem>
        }
      </PaginationContent>
    </Pagination>
  )
}
