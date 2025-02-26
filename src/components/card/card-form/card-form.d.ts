import { z } from 'zod';
declare const CreateDeckSchema: z.ZodObject<{
    question: z.ZodString;
    answer: z.ZodString;
    questionImg: z.ZodOptional<z.ZodString>;
    answerImg: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    question: string;
    answer: string;
    questionImg?: string | undefined;
    answerImg?: string | undefined;
}, {
    question: string;
    answer: string;
    questionImg?: string | undefined;
    answerImg?: string | undefined;
}>;
export type CardFormValues = z.infer<typeof CreateDeckSchema>;
type Props = {
    values?: {
        question?: string;
        answer?: string;
        questionImg?: string;
        answerImg?: string;
    };
    title: string;
    onCancel: () => void;
    onConfirm: (data: CardFormValues) => void;
};
export declare const CardForm: ({ values, title, onConfirm, onCancel }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
