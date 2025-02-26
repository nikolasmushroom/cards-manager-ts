import { ComponentPropsWithoutRef } from 'react';
export type AvatarInfoProps = {
    name?: string;
    caption?: string;
} & ComponentPropsWithoutRef<'div'>;
export declare const AvatarInfo: ({ className, name, caption }: AvatarInfoProps) => import("react/jsx-runtime").JSX.Element;
