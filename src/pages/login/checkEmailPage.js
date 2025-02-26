import { jsx as _jsx } from "react/jsx-runtime";
import { Page } from '@/components/ui/page';
import { CheckEmail } from '@/components/auth/checkEmail';
export const CheckEmailPage = () => {
    return (_jsx(Page, { children: _jsx(CheckEmail, { link: '#' }) }));
};
