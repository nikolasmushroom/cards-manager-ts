import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import s from './avatarInfo.module.scss';
import { Typography } from '@/components/ui';
import clsx from 'clsx';
export const AvatarInfo = ({ className, name, caption }) => {
    return (_jsxs("div", { className: clsx(s.avatarInfoContainer, className), children: [_jsx(Typography, { variant: 'Subtitle2', className: s.avatarName, children: name ? name : 'No user name' }), _jsx(Typography, { variant: 'Caption', className: s.avatarCaption, children: caption ? caption : '-' })] }));
};
