import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export type CardPaginationProps = {
  pageInfo: {
    page: number,
    perPage: number,
    totalItems: number,
    totalPages: number,
  }
}

export function CardPagination({ pageInfo }: CardPaginationProps) {

  return (
    <Pagination className="mt-4">
      <PaginationContent>
          {(pageInfo.page - 1 > 0) && 
            <PaginationItem>
              <PaginationPrevious href={'/?page=' + (pageInfo.page - 1)}/>
            </PaginationItem>
          }
        {Array(pageInfo.totalPages).fill('_').map((_, i) => (
          <PaginationItem>
            <PaginationLink href={'/?page=' + (i + 1)}>{i + 1}</PaginationLink>
          </PaginationItem>
        ))}
        {(pageInfo.totalPages != pageInfo.page ) &&
        <PaginationItem>
          <PaginationNext href={'/?page=' + (pageInfo.page + 1)} />
        </PaginationItem>
        }
      </PaginationContent>
    </Pagination>
  )
}
