import { jsx as _jsx } from "react/jsx-runtime";
import { Checkbox } from '@/components/ui/checkbox';
import { useController } from 'react-hook-form';
export const FormCheckbox = ({ control, name, ...rest }) => {
    const { field: { value, onChange, ...field }, } = useController({
        control,
        name,
    });
    return _jsx(Checkbox, { ...rest, ...field, onCheckedChange: onChange, checked: value });
};
