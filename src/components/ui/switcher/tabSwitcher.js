import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Tabs from '@radix-ui/react-tabs';
import s from './tabSwitcher.module.scss';
import clsx from 'clsx';
import { Typography } from '@/components/ui';
export const TabSwitcher = ({ tabs, label, disabled, className, ...rest }) => {
    const classNames = {
        tabsContainer: clsx(s.tabsContainer, className),
        default: clsx(s.default),
    };
    const mappedTabs = tabs.map((tab) => {
        return (_jsx(Tabs.Trigger, { className: classNames.default, value: tab.value, disabled: disabled, children: tab.children }, tab.children));
    });
    return (_jsxs("div", { children: [label && (_jsx(Typography, { variant: 'Body2', as: 'p', children: label })), _jsx(Tabs.Root, { className: s.root, defaultValue: "tab1", ...rest, children: _jsx(Tabs.List, { className: s.List, children: mappedTabs }) })] }));
};
