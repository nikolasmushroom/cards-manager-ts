import { ComponentPropsWithoutRef, CSSProperties } from 'react';
import * as Select from '@radix-ui/react-select';
export type Option = {
    value: string;
    children: string;
};
export type SelectProps = {
    options: Option[];
    label?: string;
    placeholder?: string;
    className?: string;
    id?: string;
    style?: CSSProperties;
    selectHeight?: string;
} & ComponentPropsWithoutRef<typeof Select.Root>;
export declare const SelectCustom: import("react").ForwardRefExoticComponent<{
    options: Option[];
    label?: string;
    placeholder?: string;
    className?: string;
    id?: string;
    style?: CSSProperties;
    selectHeight?: string;
} & Select.SelectProps & import("react").RefAttributes<never>>;
