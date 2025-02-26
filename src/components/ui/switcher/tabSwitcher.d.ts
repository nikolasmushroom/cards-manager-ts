import * as Tabs from '@radix-ui/react-tabs';
import { ComponentPropsWithoutRef } from 'react';
export type TabType = {
    children: string;
    value: string;
};
export type TabSwitcherProps = {
    tabs: TabType[];
    disabled?: boolean;
    label?: string;
} & ComponentPropsWithoutRef<typeof Tabs.Root>;
export declare const TabSwitcher: ({ tabs, label, disabled, className, ...rest }: TabSwitcherProps) => import("react/jsx-runtime").JSX.Element;
