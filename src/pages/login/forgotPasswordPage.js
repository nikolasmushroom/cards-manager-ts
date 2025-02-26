import { jsx as _jsx } from "react/jsx-runtime";
import { Page } from '@/components/ui/page';
import { ForgotPassword } from '@/components/auth/forgotPassword';
export const ForgotPasswordPage = () => {
    return (_jsx(Page, { children: _jsx(ForgotPassword, { onSubmit: () => { } }) }));
};
