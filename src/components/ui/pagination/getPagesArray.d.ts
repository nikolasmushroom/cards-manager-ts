export type getPagesArrayProps = {
    currentPage: number;
    totalPagesCount: number;
    totalPageCount: number;
    siblingCount: number;
};
type DotsType = '...';
export declare const getPagesArray: ({ currentPage, totalPagesCount, totalPageCount, siblingCount, }: getPagesArrayProps) => () => (number | DotsType)[];
export {};
