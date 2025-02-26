export type UsePaginationProps = {
    totalItemsCount: number;
    initialItemsPerPage: number;
    siblingCount?: number;
    initialPage?: number;
    onCurrenPageChange?: (page: number) => void;
};
export declare const usePagination: ({ totalItemsCount, initialItemsPerPage, siblingCount, initialPage, onCurrenPageChange, }: UsePaginationProps) => {
    switchPage: (page: number | "...") => void;
    switchToPrevPage: () => void;
    onCurrenPageChange: ((page: number) => void) | undefined;
    switchToNextPage: () => void;
    switchItemsPerPage: (itemsPerPage: number | string) => void;
    totalPageCount: number;
    currentPage: number;
    itemsPerPage: number;
    pages: (number | "...")[];
};
