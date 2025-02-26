import { jsx as _jsx } from "react/jsx-runtime";
import { Page } from '@/components/ui/page';
import { SignUp } from '@/components/auth/signUp';
import { useSignUpMutation } from '@/services/auth/authService.ts';
import { useNavigate } from 'react-router-dom';
export const SignUpPage = () => {
    const [signUp] = useSignUpMutation();
    const navigate = useNavigate();
    const onSubmitHandler = async ({ password, email }) => {
        debugger;
        let res = await signUp({ password, email });
        debugger;
        if (res.data) {
            navigate('/login');
        }
    };
    return (_jsx(Page, { children: _jsx(SignUp, { onSubmit: onSubmitHandler }) }));
};
