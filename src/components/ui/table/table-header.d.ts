import { Column, SortType } from './types.ts';
export type TableHeadProps = {
    columns: Column[];
    sort?: SortType;
    setSort?: (sort: SortType) => void;
};
export declare const TableHeader: ({ columns, sort, setSort }: TableHeadProps) => import("react/jsx-runtime").JSX.Element;
