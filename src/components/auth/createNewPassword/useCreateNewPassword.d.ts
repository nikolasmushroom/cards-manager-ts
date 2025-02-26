import { z } from 'zod';
declare const createNewPasswordSchema: z.ZodObject<{
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
}, {
    password: string;
}>;
export type createNewPasswordForm = z.infer<typeof createNewPasswordSchema>;
export declare const useCreateNewPassword: () => {
    handleSubmit: import("react-hook-form").UseFormHandleSubmit<{
        password: string;
    }, undefined>;
    control: import("react-hook-form").Control<{
        password: string;
    }, any>;
    errors: import("react-hook-form").FieldErrors<{
        password: string;
    }>;
};
export {};
