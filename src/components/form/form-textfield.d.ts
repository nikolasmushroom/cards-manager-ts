import { FieldValues, UseControllerProps } from 'react-hook-form';
import { TextFieldProps } from '@/components/ui/textfield';
type Props<T extends FieldValues> = Omit<TextFieldProps, 'value' | 'name' | 'onChange'> & UseControllerProps<T>;
export declare const FormTextField: <T extends FieldValues>({ control, name, ...rest }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
