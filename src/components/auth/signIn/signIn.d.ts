import { SignInForm } from '@/components/auth/signIn/useSignIn.ts';
type Props = {
    onSubmit: (values: SignInForm) => void;
    error: string | null;
    setValidationError: (error: string | null) => void;
};
export declare const SignIn: ({ onSubmit, error, setValidationError }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
