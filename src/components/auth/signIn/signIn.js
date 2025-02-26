import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormTextField } from '@/components/form/form-textfield.tsx';
import { FormCheckbox } from '@/components/form/form-checkbox.tsx';
import s from './signIn.module.scss';
import { Link } from 'react-router-dom';
import { useSignIn } from '@/components/auth/signIn/useSignIn.ts';
import { Typography } from '@/components/ui/typography';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
export const SignIn = ({ onSubmit }) => {
    const { handleSubmit, control } = useSignIn();
    return (_jsxs(Card, { className: s.formWrapper, children: [_jsx(Typography, { variant: 'H1', children: "Sign In" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), className: s.form, children: [_jsx(FormTextField, { control: control, name: 'email', label: 'Email' }), _jsx(FormTextField, { type: 'password', control: control, name: 'password', label: 'Password' }), _jsx(FormCheckbox, { control: control, name: "rememberMe", style: {
                            width: '18px',
                            height: '18px',
                        }, label: 'Remember me', position: 'left', className: s.checkbox }), _jsx(Typography, { variant: 'Body2', as: Link, to: '/forget-password', className: s.forgotPassword, children: "Forgot Password?" }), _jsx(Button, { type: "submit", variant: 'primary', className: s.buttonSubmit, children: "Sign In" }), _jsxs("div", { className: s.footerContainer, children: [_jsx(Typography, { variant: 'Body2', as: 'p', children: "Don't have an account?" }), _jsx(Typography, { variant: 'Link2', as: Link, to: '/signup', className: s.signUp, children: "Sign Up" })] })] })] }));
};
