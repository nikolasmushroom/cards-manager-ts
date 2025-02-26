import { z } from 'zod';
declare const SignInSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    rememberMe: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    rememberMe?: boolean | undefined;
}, {
    email: string;
    password: string;
    rememberMe?: boolean | undefined;
}>;
export type SignInForm = z.infer<typeof SignInSchema>;
export declare const useSignIn: () => {
    handleSubmit: import("react-hook-form").UseFormHandleSubmit<{
        email: string;
        password: string;
        rememberMe?: boolean | undefined;
    }, undefined>;
    control: import("react-hook-form").Control<{
        email: string;
        password: string;
        rememberMe?: boolean | undefined;
    }, any>;
    setError: import("react-hook-form").UseFormSetError<{
        email: string;
        password: string;
        rememberMe?: boolean | undefined;
    }>;
};
export {};
