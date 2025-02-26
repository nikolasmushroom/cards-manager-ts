import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import s from './ChangeName.module.scss';
import { FormTextField } from '@/components/form/form-textfield.tsx';
import { useChangeName, } from '@/components/auth/editProfile/changeName/useChangeName.ts';
import { Button } from '@/components/ui/button';
import { useEditProfileInfoMutation } from '@/services/auth/authService.ts';
export const ChangeName = ({ src, name, setEditMode }) => {
    const { handleSubmit, control, setError } = useChangeName();
    const [editProfileInfo] = useEditProfileInfoMutation();
    const onSubmit = (values) => {
        if (values.name !== name && name && src) {
            editProfileInfo({ name: values.name, avatar: src });
            setEditMode(false);
        }
        else {
            setError('name', { message: 'Name should be different' });
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit(onSubmit), className: s.form, children: [_jsx(FormTextField, { control: control, name: 'name', label: 'Name' }), _jsx(Button, { type: 'submit', className: s.submitButton, children: "Save Changes" })] }));
};
