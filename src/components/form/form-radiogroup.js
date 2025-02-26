import { jsx as _jsx } from "react/jsx-runtime";
import { useController } from 'react-hook-form';
import { RadioGroup } from '@/components/ui/radio';
export const FormRadioGroup = ({ control, name, ...rest }) => {
    const { field: { value, onChange }, } = useController({
        control,
        name,
    });
    return _jsx(RadioGroup, { ...rest, value: value, onValueChange: onChange });
};
