import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';
export type DropdownProps = {
    children?: ReactNode;
    trigger?: ReactNode;
    className?: string;
    style?: CSSProperties;
    align?: 'start' | 'center' | 'end';
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>;
export declare const Dropdown: import("react").ForwardRefExoticComponent<{
    children?: ReactNode;
    trigger?: ReactNode;
    className?: string;
    style?: CSSProperties;
    align?: "start" | "center" | "end";
} & DropdownMenu.DropdownMenuProps & import("react").RefAttributes<HTMLButtonElement>>;
