import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "@/lib/icons/arrows";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    handleNextPage: () => void;
    handlePreviousPage: () => void;
    handleFirstPage: () => void;
    handleLastPage: () => void;
}

export const Pagination = ({ totalPages, currentPage, handleNextPage, handlePreviousPage, handleFirstPage, handleLastPage }: PaginationProps) => {
    return (
        <div className="flex justify-center items-center w-full gap-3">
            {
                currentPage > 1 ? (
                    <span className="px-4 py-2 bg-gray-800 rounded-lg" onClick={handleFirstPage}>
                        <ChevronsLeft status="enabled" />
                    </span>
                ) : (
                    <span className="px-4 py-2 bg-gray-900 rounded-lg">
                        <ChevronsLeft status="disabled" />
                    </span>
                )
            }
            {
                currentPage > 1 ? (
                    <span className="px-4 py-2 bg-gray-800 rounded-lg cursor-pointer" onClick={handlePreviousPage}>
                        <ChevronLeft status="enabled" />
                    </span>
                ) : (
                    <span className="px-4 py-2 bg-gray-900 rounded-lg">
                        <ChevronLeft status="disabled" />
                    </span>
                )
            }
            <span className="px-4 py-2 bg-gray-800 rounded-lg ">Pagina {currentPage}</span>
            {
                currentPage < totalPages ? (
                    <span className="px-4 py-2 bg-gray-800 rounded-lg cursor-pointer" onClick={handleNextPage}>
                        <ChevronRight status="enabled" />
                    </span>
                ) : (
                    <span className="px-4 py-2 bg-gray-900 rounded-lg">
                        <ChevronRight status="disabled" />
                    </span>
                )

            }
            {
                currentPage < totalPages ? (
                    <span className="px-4 py-2 bg-gray-800 rounded-lg " onClick={handleLastPage}>
                        <ChevronsRight status="enabled" />
                    </span>
                ) : (
                    <span className="px-4 py-2 bg-gray-900 rounded-lg">
                        <ChevronsRight status="disabled" />
                    </span>
                )
            }
        </div>
    )
}