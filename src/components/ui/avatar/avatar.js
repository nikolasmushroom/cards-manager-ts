import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import s from './Avatar.module.scss';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { Typography } from '../typography';
export const Avatar = forwardRef(({ userName, shortName, src, size, style, className, ...rest }, ref) => {
    const classNames = {
        container: clsx(s.avatarContainer, className),
        avatar: clsx(s.avatar, shortName ? s.shortName : ''),
        noAvatar: clsx(s.avatar, s.noAvatar, shortName ? s.shortName : ''),
    };
    const styles = { width: size, height: size, ...style };
    return (_jsxs("div", { className: clsx(classNames.container), ...rest, ref: ref, children: [shortName && (_jsx(Typography, { variant: 'Subtitle1', as: 'span', className: s.shortName, children: shortName })), src ? (_jsx("img", { style: styles, src: src, alt: 'avatar img', className: classNames.avatar })) : (_jsx(Typography, { style: styles, as: 'div', variant: 'H4', className: classNames.noAvatar, children: userName?.[0] }))] }));
});
