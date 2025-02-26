import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import s from './typography.module.scss';
export const Typography = (props) => {
    const { as: Component = 'div', className, children, variant = 'H4', ...rest } = props;
    const classNames = clsx(s.typography, s[variant], className);
    return (_jsx(Component, { className: classNames, ...rest, children: children }));
};
