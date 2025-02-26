import { ComponentPropsWithoutRef, ElementType } from 'react';
export type TypographyProps<T extends ElementType = 'div'> = {
    as?: T;
    variant?: 'H1' | 'H2' | 'H3' | 'H4' | 'Body1' | 'Body2' | 'Subtitle1' | 'Subtitle2' | 'Caption' | 'Overline' | 'Link1' | 'Link2';
} & ComponentPropsWithoutRef<T>;
export declare const Typography: <T extends ElementType = "div">(props: TypographyProps<T>) => import("react/jsx-runtime").JSX.Element;
