import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import s from './layout.module.scss';
import { Header } from '@/components/ui';
import { useMeQuery } from '@/services/auth/authService.ts';
export const Layout = forwardRef(({ contentMarginTop = '36px', children, ...rest }, ref) => {
    const { data } = useMeQuery();
    return (_jsxs("div", { ref: ref, ...rest, className: s.layout, children: [_jsx(Header, { isLoggedIn: !!data, userPhoto: data?.avatar, userName: data?.name, shortName: data?.name, userEmail: data?.email }), _jsx("main", { className: s.main, children: children })] }));
});
