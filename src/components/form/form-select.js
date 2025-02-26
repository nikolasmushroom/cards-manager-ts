import { jsx as _jsx } from "react/jsx-runtime";
import { useController } from 'react-hook-form';
import { SelectCustom } from '@/components/ui/select';
export const FormSelect = ({ control, defaultValue, name, ...rest }) => {
    const { field: { value, onChange }, } = useController({
        control,
        name,
    });
    return _jsx(SelectCustom, { value: value, onValueChange: onChange, ...rest });
};
