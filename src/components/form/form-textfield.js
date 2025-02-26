import { jsx as _jsx } from "react/jsx-runtime";
import { useController } from 'react-hook-form';
import { TextField } from '@/components/ui/textfield';
export const FormTextField = ({ control, name, ...rest }) => {
    const { field: { value = '', ...fieldProps }, fieldState: { error }, } = useController({
        control,
        name,
    });
    return _jsx(TextField, { ...rest, value: value, ...fieldProps, errorMessage: error?.message });
};
