import { ComponentPropsWithRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
export type ModalProps = {
    open: boolean;
    onClose?: () => void;
    title?: string;
    className?: string;
} & ComponentPropsWithRef<typeof Dialog.Root>;
export declare const Modal: ({ title, onClose, children, className, open, ...rest }: ModalProps) => import("react/jsx-runtime").JSX.Element;
