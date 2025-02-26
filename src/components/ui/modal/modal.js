import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import s from './modal.module.scss';
import * as Dialog from '@radix-ui/react-dialog';
import { clsx } from 'clsx';
import { Card } from '../card';
import CrossIcon from '../../../common/icons/CrossIcon.tsx';
import { Typography } from '../typography';
export const Modal = ({ title, onClose, children, className, open, ...rest }) => {
    const classNames = {
        overlay: clsx(s.Overlay),
        content: clsx(s.Content),
    };
    return (_jsx(Dialog.Root, { open: open, onOpenChange: onClose, ...rest, children: _jsxs(Dialog.Portal, { children: [_jsx(Dialog.Overlay, { className: classNames.overlay }), _jsx(Dialog.Content, { className: classNames.content, children: _jsx("div", { className: s.Content, children: _jsxs(Card, { children: [title && (_jsxs("header", { className: s.Title, children: [_jsx(Typography, { as: 'h3', variant: 'H3', children: title }), _jsx(CrossIcon, { className: s.icon, onClick: onClose })] })), _jsx("div", { children: children })] }) }) })] }) }));
};
