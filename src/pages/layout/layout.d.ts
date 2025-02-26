import { ComponentProps, CSSProperties } from 'react';
type Props = {
    contentMarginTop?: CSSProperties['marginTop'];
} & ComponentProps<'div'>;
export declare const Layout: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export {};
