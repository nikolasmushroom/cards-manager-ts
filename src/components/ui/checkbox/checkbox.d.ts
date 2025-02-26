import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { ComponentPropsWithoutRef } from 'react';
export type CheckboxProps = {
    label?: string;
    onCheckedChange?: (checked: boolean) => void;
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>;
export declare const Checkbox: import("react").ForwardRefExoticComponent<{
    label?: string;
    onCheckedChange?: (checked: boolean) => void;
} & Omit<RadixCheckbox.CheckboxProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
