import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import s from './dropdown.module.scss';
import { forwardRef, useState, } from 'react';
import clsx from 'clsx';
export const Dropdown = forwardRef(({ style, defaultOpen, className, trigger, children, align = 'start', ...rest }, ref) => {
    const [open, setOpen] = useState(false);
    const classNames = {
        trigger: clsx(s.Trigger),
        content: clsx(s.Content, className),
        arrow: clsx(s.Arrow),
    };
    return (_jsxs(DropdownMenu.Root, { open: open, defaultOpen: defaultOpen, onOpenChange: setOpen, ...rest, children: [_jsx(DropdownMenu.Trigger, { asChild: true, className: classNames.trigger, ref: ref, children: trigger }), _jsx(DropdownMenu.Portal, { children: _jsxs(DropdownMenu.Content, { align: align, style: style, className: classNames.content, sideOffset: 5, children: [_jsx(DropdownMenu.Arrow, { className: classNames.arrow }), children] }) })] }));
});
