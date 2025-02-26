import { ComponentPropsWithoutRef } from 'react';
export type AvatarProps = {
    userName?: string;
    shortName?: string;
    src?: ComponentPropsWithoutRef<'img'>['src'];
    size?: ComponentPropsWithoutRef<'img'>['width'];
} & ComponentPropsWithoutRef<'div'>;
export declare const Avatar: import("react").ForwardRefExoticComponent<{
    userName?: string;
    shortName?: string;
    src?: ComponentPropsWithoutRef<"img">["src"];
    size?: ComponentPropsWithoutRef<"img">["width"];
} & Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
