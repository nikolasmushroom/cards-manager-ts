import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import s from './table.module.scss';
import { clsx } from 'clsx';
export const Table = forwardRef(({ className, ...rest }, ref) => {
    const classNames = {
        table: clsx(s.table, className),
    };
    return _jsx("table", { ref: ref, ...rest, className: classNames.table });
});
export const THead = forwardRef(({ className, ...rest }, ref) => {
    const classNames = {
        tableHead: clsx(s.th, className),
    };
    return _jsx("thead", { ref: ref, ...rest, className: classNames.tableHead });
});
export const TBody = forwardRef(({ className, ...rest }, ref) => {
    const classNames = {
        tableBody: clsx(className),
    };
    return _jsx("tbody", { ref: ref, ...rest, className: classNames.tableBody });
});
export const TRow = forwardRef(({ className, ...rest }, ref) => {
    const classNames = {
        tableRow: clsx(s.tr, className),
    };
    return _jsx("tr", { ref: ref, ...rest, className: classNames.tableRow });
});
export const TCell = forwardRef(({ className, ...rest }, ref) => {
    const classNames = {
        tableCell: clsx(s.td, className),
    };
    return _jsx("td", { ref: ref, ...rest, className: classNames.tableCell });
});
