import { ComponentPropsWithRef } from 'react';
type Props = {
    cover: File | null;
    title: string;
} & ComponentPropsWithRef<'input'>;
export declare const FilePicker: ({ src, onChange, cover, title, className }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
