import { FieldValues, UseControllerProps } from 'react-hook-form';
import { SelectProps } from '@/components/ui/select';
type Props<T extends FieldValues> = Omit<SelectProps, 'value' | 'name' | 'onChange'> & UseControllerProps<T>;
export declare const FormSelect: <T extends FieldValues>({ control, defaultValue, name, ...rest }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
