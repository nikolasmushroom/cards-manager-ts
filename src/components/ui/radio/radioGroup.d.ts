import * as Radio from '@radix-ui/react-radio-group';
import { ComponentPropsWithoutRef } from 'react';
export type RadioType = {
    value: string | number;
    label: string;
    id?: string;
};
export type RadioGroupProps = {
    radios: RadioType[];
} & ComponentPropsWithoutRef<typeof Radio.Root>;
export declare const RadioGroup: ({ disabled, onValueChange, defaultValue, className, radios, value, ...rest }: RadioGroupProps) => import("react/jsx-runtime").JSX.Element;
