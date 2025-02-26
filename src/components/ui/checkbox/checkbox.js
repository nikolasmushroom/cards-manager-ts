import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import s from './checkbox.module.scss';
import clsx from 'clsx';
import { Typography } from '../typography';
import CheckedIcon from '../../../common/icons/CheckedIcon.tsx';
export const Checkbox = ({ onCheckedChange, checked, defaultChecked, id = 'c1', disabled, position = 'default', label, className, required, ...rest }) => {
    const classNames = {
        container: clsx(s.container, className),
        checkboxWrapper: clsx(s.checkboxWrapper, disabled && s.disabled),
        checkedIcon: clsx(s.checkedIcon, disabled && s.disabled),
        label: clsx(s.Label, disabled && s.disabled),
        indicator: clsx(s.Indicator),
    };
    return (_jsxs("div", { className: classNames.container, children: [_jsx("div", { className: classNames.checkboxWrapper, children: _jsx(RadixCheckbox.Root, { className: s.Root, defaultChecked: defaultChecked, onCheckedChange: onCheckedChange, checked: checked, disabled: disabled, id: id, ...rest, children: _jsx(RadixCheckbox.Indicator, { className: classNames.indicator, children: checked && _jsx(CheckedIcon, { className: classNames.checkedIcon }) }) }) }), label && (_jsx(Typography, { as: 'label', variant: 'Body2', className: classNames.label, htmlFor: id, children: label }))] }));
};
