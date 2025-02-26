import { jsx as _jsx } from "react/jsx-runtime";
import { Page } from '@/components/ui/page';
import { CreateNewPassword } from '@/components/auth/createNewPassword';
export const CreateNewPasswordPage = () => {
    return (_jsx(Page, { children: _jsx(CreateNewPassword, { onSubmit: () => { } }) }));
};
