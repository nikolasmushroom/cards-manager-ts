import { ReactNode } from 'react';
type Props = {
    item?: ReactNode;
    itemsNumber: number;
    gradeNumber?: number;
    changeRatingOnClick?: boolean;
};
export declare const Rating: ({ gradeNumber, itemsNumber, changeRatingOnClick }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
