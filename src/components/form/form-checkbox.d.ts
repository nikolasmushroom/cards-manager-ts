import { CheckboxProps } from '@/components/ui/checkbox';
import { FieldValues, UseControllerProps } from 'react-hook-form';
type Props<T extends FieldValues> = Omit<CheckboxProps, 'checked' | 'name' | 'onCheckedChange' | 'onBlur'> & UseControllerProps<T>;
export declare const FormCheckbox: <T extends FieldValues>({ control, name, ...rest }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
