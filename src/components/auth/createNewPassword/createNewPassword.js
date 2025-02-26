import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormTextField } from '@/components/form/form-textfield.tsx';
import { Button, Card, Typography } from '@/components/ui';
import s from './createNewPassword.module.scss';
import { useCreateNewPassword, } from '@/components/auth/createNewPassword/useCreateNewPassword.ts';
export const CreateNewPassword = ({ onSubmit }) => {
    const { handleSubmit, control } = useCreateNewPassword();
    return (_jsxs(Card, { className: s.formWrapper, children: [_jsx(Typography, { variant: 'H1', children: "Forgot your password?" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), className: s.form, children: [_jsx(FormTextField, { control: control, type: 'password', name: 'password', label: 'Password' }), _jsx(Typography, { variant: 'Body2', as: 'p', className: s.description, children: "Create new password and we will send you further instructions to email" }), _jsx(Button, { type: "submit", variant: 'primary', className: s.button, children: "Create New Password" })] })] }));
};
