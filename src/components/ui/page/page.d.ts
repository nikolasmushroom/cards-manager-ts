import { ComponentPropsWithoutRef, CSSProperties } from 'react';
type Props = ComponentPropsWithoutRef<'div'> & {
    marginTop?: CSSProperties['marginTop'];
};
export declare const Page: ({ className, children, style, marginTop, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
