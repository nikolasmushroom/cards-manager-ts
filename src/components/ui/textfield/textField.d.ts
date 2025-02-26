import { ComponentProps, ComponentPropsWithoutRef } from 'react';
export type TextFieldProps = {
    onValueChange?: (value: string) => void;
    containerProps?: ComponentPropsWithoutRef<'div'>;
    labelProps?: ComponentPropsWithoutRef<'label'>;
    labelPosition?: 'left' | 'right' | 'center';
    label?: string;
    search?: boolean;
    errorMessage?: string;
} & ComponentPropsWithoutRef<'input'>;
export declare const TextField: import("react").ForwardRefExoticComponent<{
    onValueChange?: (value: string) => void;
    containerProps?: ComponentPropsWithoutRef<"div">;
    labelProps?: ComponentPropsWithoutRef<"label">;
    labelPosition?: "left" | "right" | "center";
    label?: string;
    search?: boolean;
    errorMessage?: string;
} & Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export declare const getFinalType: (type: ComponentProps<"input">["type"], showPassword: boolean) => import("react").HTMLInputTypeAttribute | undefined;
