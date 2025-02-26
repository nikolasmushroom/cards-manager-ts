import { ComponentPropsWithoutRef, ElementType } from 'react';
export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T;
    fullWidth?: boolean;
    variant?: 'primary' | 'secondary' | 'link';
} & ComponentPropsWithoutRef<T>;
export declare const Button: <T extends ElementType = "button">(props: ButtonProps<T>) => import("react/jsx-runtime").JSX.Element;
