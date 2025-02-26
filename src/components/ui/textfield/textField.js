import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState, } from 'react';
import s from './textField.module.scss';
import clsx from 'clsx';
import { Typography } from '../typography';
import ClosedEye from '@/common/icons/ClosedEye.tsx';
import OpenEye from '@/common/icons/OpenEye.tsx';
import Search from '@/common/icons/Search.tsx';
export const TextField = forwardRef(({ containerProps, label, labelProps, labelPosition = 'left', onChange, onValueChange, placeholder, search, type, className, errorMessage, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const classNames = {
        root: clsx(s.root, containerProps?.className),
        label: clsx(s.label, labelProps?.className),
        labelPosition: clsx(s.labelContainer, s[labelPosition]),
        textFieldContainer: clsx(s.textFieldContainer),
        field: clsx(s.field, errorMessage && s.error, search && s.hasFieldIcon, className),
        error: clsx(s.error),
        fieldIcon: clsx(s.fieldIcon),
    };
    const finalType = getFinalType(type, showPassword);
    const handleChange = (e) => {
        onChange?.(e);
        onValueChange?.(e.currentTarget.value);
    };
    return (_jsxs("div", { className: classNames.root, children: [label && (_jsx("div", { className: classNames.labelPosition, children: _jsx(Typography, { as: 'label', variant: 'Body2', className: classNames.label, children: label }) })), _jsxs("div", { className: classNames.textFieldContainer, children: [search && _jsx(Search, { className: classNames.fieldIcon }), _jsx("input", { className: classNames.field, ref: ref, onChange: handleChange, placeholder: placeholder, type: finalType, ...rest }), type === 'password' && (_jsx("button", { className: s.showPassword, type: 'button', onClick: () => setShowPassword(prevState => !prevState), children: showPassword ? _jsx(ClosedEye, {}) : _jsx(OpenEye, {}) }))] }), errorMessage && (_jsx(Typography, { variant: 'Caption', className: s.error, children: errorMessage }))] }));
});
export const getFinalType = (type, showPassword) => {
    if (type === 'password' && showPassword) {
        return 'text';
    }
    return type;
};
