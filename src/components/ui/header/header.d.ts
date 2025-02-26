import { ComponentPropsWithoutRef } from 'react';
export type HeaderProps = {
    isLoggedIn?: boolean;
    userPhoto?: string;
    userName?: string;
    userEmail?: string;
    shortName?: string;
    navigateToLogin?: () => void;
    logout: () => void;
} & ComponentPropsWithoutRef<'header'>;
export declare const Header: ({ isLoggedIn, shortName, navigateToLogin, userName, userPhoto, userEmail, logout, ...rest }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
