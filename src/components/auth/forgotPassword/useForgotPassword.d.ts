import { z } from 'zod';
declare const forgotPasswordSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>;
export declare const useForgotPassword: () => {
    handleSubmit: import("react-hook-form").UseFormHandleSubmit<{
        email: string;
    }, undefined>;
    control: import("react-hook-form").Control<{
        email: string;
    }, any>;
    formState: import("react-hook-form").FormState<{
        email: string;
    }>;
    setError: import("react-hook-form").UseFormSetError<{
        email: string;
    }>;
    clearErrors: import("react-hook-form").UseFormClearErrors<{
        email: string;
    }>;
};
export {};
