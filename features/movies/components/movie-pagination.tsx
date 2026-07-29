"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface MoviePaginationProps {
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onPageChange: (page: number) => void;
}

export function MoviePagination({
  page,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  onPageChange,
}: MoviePaginationProps) {
  const pages = [];

  let start = Math.max(page - 2, 1);
  let end = Math.min(page + 2, totalPages);

  if (page <= 3) {
    end = Math.min(5, totalPages);
  }

  if (page >= totalPages - 2) {
    start = Math.max(totalPages - 4, 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <Pagination className="mt-12">
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();

              if (hasPreviousPage) {
                onPageChange(page - 1);
              }
            }}
            className={!hasPreviousPage ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {/* First */}
        {start > 1 && (
          <>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(1);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>

            {start > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
        )}

        {/* Middle Pages */}
        {pages.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              href="#"
              isActive={page === number}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(number);
              }}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Last */}
        {end < totalPages && (
          <>
            {end < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(totalPages);
                }}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();

              if (hasNextPage) {
                onPageChange(page + 1);
              }
            }}
            className={!hasNextPage ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
