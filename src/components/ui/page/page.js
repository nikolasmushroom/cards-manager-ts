import { jsx as _jsx } from "react/jsx-runtime";
import s from './page.module.scss';
import clsx from 'clsx';
export const Page = ({ className, children, style, marginTop = '33px', ...rest }) => {
    const classes = clsx(className, s.container);
    const styles = { marginTop: marginTop, ...style };
    return (_jsx("div", { className: classes, style: styles, ...rest, children: children }));
};
