import z from 'zod';
declare const newDeckSchema: z.ZodObject<{
    isPrivate: z.ZodBoolean;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    isPrivate: boolean;
}, {
    name: string;
    isPrivate: boolean;
}>;
export type FormValues = z.infer<typeof newDeckSchema>;
type Props = {
    values?: {
        name: string;
        isPrivate?: boolean;
        cover?: string | null;
    };
    defaultValues?: FormValues & {
        cover?: null | string;
    };
    onConfirm: (data: FormValues & {
        cover?: File | null;
    }) => void;
    title: string;
};
export declare const DeckForm: ({ values, onConfirm, title }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
