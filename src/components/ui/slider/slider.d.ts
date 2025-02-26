import * as Slider from '@radix-ui/react-slider';
import { ComponentPropsWithoutRef } from 'react';
export type SliderCustomProps = {
    onValueChange?: (value: number[]) => void;
    value: number[] | string[];
    max?: number;
    min?: number;
    step?: number;
} & ComponentPropsWithoutRef<typeof Slider.Root>;
export declare const SliderCustom: ({ value, className, onValueChange, disabled, step, max, min, ...rest }: SliderCustomProps) => import("react/jsx-runtime").JSX.Element;
