import { jsx as _jsx } from "react/jsx-runtime";
import { Page } from '@/components/ui/page';
import { SignIn } from '@/components/auth/signIn';
import { useLoginMutation } from '@/services/auth/authService.ts';
export const SignInPage = () => {
    const [login] = useLoginMutation();
    const onSubmitHandler = ({ password, email }) => {
        login({ password, email });
    };
    return (_jsx(Page, { children: _jsx(SignIn, { onSubmit: onSubmitHandler }) }));
};
