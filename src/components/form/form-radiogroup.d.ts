import { FieldValues, UseControllerProps } from 'react-hook-form';
import { RadioGroupProps } from '@/components/ui/radio';
type Props<T extends FieldValues> = Omit<RadioGroupProps, 'value' | 'name' | 'onChange'> & UseControllerProps<T>;
export declare const FormRadioGroup: <T extends FieldValues>({ control, name, ...rest }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
