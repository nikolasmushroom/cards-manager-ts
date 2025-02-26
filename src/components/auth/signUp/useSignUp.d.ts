import { z } from 'zod';
declare const signUpSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    rememberMe: z.ZodOptional<z.ZodBoolean>;
    confirmPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    confirmPassword: string;
    rememberMe?: boolean | undefined;
}, {
    email: string;
    password: string;
    confirmPassword: string;
    rememberMe?: boolean | undefined;
}>;
export type SignUpForm = z.infer<typeof signUpSchema>;
export declare const useSignUp: () => {
    handleSubmit: import("react-hook-form").UseFormHandleSubmit<{
        email: string;
        password: string;
        confirmPassword: string;
        rememberMe?: boolean | undefined;
    }, undefined>;
    control: import("react-hook-form").Control<{
        email: string;
        password: string;
        confirmPassword: string;
        rememberMe?: boolean | undefined;
    }, any>;
};
export {};
