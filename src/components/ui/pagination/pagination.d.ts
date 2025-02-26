import { UsePaginationProps } from './usePagination.tsx';
export type PaginationProps = {
    options?: number[];
    className?: string;
    onItemsPerPageChange?: (itemsPerPage: number) => void;
} & UsePaginationProps;
export declare const Pagination: ({ initialPage, initialItemsPerPage, options, totalItemsCount, onItemsPerPageChange, onCurrenPageChange, className, }: PaginationProps) => import("react/jsx-runtime").JSX.Element;
