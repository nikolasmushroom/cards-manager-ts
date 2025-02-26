import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Card, Typography } from '@/components/ui';
import s from './checkEmail.module.scss';
import EmailMessageIcon from '@/common/icons/EmailMessageIcon.tsx';
import { Link } from 'react-router-dom';
export const CheckEmail = ({ link }) => {
    return (_jsxs(Card, { className: s.formWrapper, children: [_jsx(Typography, { variant: 'H1', children: "Check Email" }), _jsx("div", { children: _jsx(EmailMessageIcon, {}) }), _jsx(Typography, { variant: 'Body2', as: 'p', className: s.description, children: "We\u2019ve sent an Email with instructions to example@mail.com" }), _jsx(Button, { as: Link, fullWidth: true, to: link, variant: 'primary', className: s.button, children: "Back to Sign In" })] }));
};
