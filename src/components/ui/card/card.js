import { jsx as _jsx } from "react/jsx-runtime";
import s from './card.module.scss';
import clsx from 'clsx';
export const Card = ({ style, children, className, ...rest }) => {
    const classNames = {
        card: clsx(s.card, className),
    };
    return (_jsx("div", { style: style, className: classNames.card, ...rest, children: children }));
};
