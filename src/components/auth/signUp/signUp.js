import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormTextField } from '@/components/form/form-textfield.tsx';
import { Button, Card, Typography } from '@/components/ui';
import s from './signUp.module.scss';
import { Link } from 'react-router-dom';
import { useSignUp } from '@/components/auth/signUp/useSignUp.ts';
export const SignUp = ({ onSubmit }) => {
    const { handleSubmit, control } = useSignUp();
    return (_jsxs(Card, { className: s.formWrapper, children: [_jsx(Typography, { variant: 'H1', children: "Sign Up" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), className: s.form, children: [_jsx(FormTextField, { control: control, name: 'email', label: 'Email' }), _jsx(FormTextField, { type: 'password', control: control, name: 'password', label: 'Password' }), _jsx(FormTextField, { type: 'password', control: control, name: 'confirmPassword', label: 'Confirm Password' }), _jsx(Button, { type: "submit", variant: 'primary', className: s.button, children: "Sign Up" }), _jsxs("div", { className: s.footerContainer, children: [_jsx(Typography, { variant: 'Body2', as: 'p', children: "Already have an account??" }), _jsx(Typography, { variant: 'Link2', as: Link, to: '/signup', className: s.signIn, children: "Sign In" })] })] })] }));
};
