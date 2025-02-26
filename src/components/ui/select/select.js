import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import * as Select from '@radix-ui/react-select';
import s from './select.module.scss';
import clsx from 'clsx';
import { Typography } from '../typography';
import Arrow from '@/common/icons/Arrow.tsx';
export const SelectCustom = forwardRef(({ options, disabled, value, className, defaultValue, placeholder, style, defaultOpen = false, onValueChange, onOpenChange, label, ...rest }, ref) => {
    const id = 'select-id';
    const classNames = {
        trigger: clsx(s.Trigger, s.ItemText, disabled && s.disabled),
        selectWrapper: clsx(s.selectWrapper, className),
    };
    const mappedSelectOptions = options.map(option => {
        return (_jsx(SelectItem, { value: option.value, style: style, children: option.children }, option.value));
    });
    return (_jsx(Select.Root, { value: value, defaultValue: defaultValue, onValueChange: onValueChange, onOpenChange: onOpenChange, disabled: disabled, id: id, ...rest, children: _jsxs("div", { className: classNames.selectWrapper, children: [label && (_jsx(Typography, { variant: 'Body2', as: 'label', htmlFor: id, className: s.Label, children: label })), _jsxs(Select.Trigger, { ref: ref, disabled: disabled, style: style, className: classNames.trigger, id: id, children: [_jsx(Select.Value, { placeholder: placeholder }), _jsx(Select.Icon, { className: s.icon, children: _jsx(Arrow, {}) })] }), _jsx(Select.Portal, { children: _jsx(Select.Content, { className: s.Content, position: 'popper', children: _jsx(Select.Viewport, { className: s.Viewport, children: _jsx(Select.Group, { children: mappedSelectOptions }) }) }) })] }) }));
});
const SelectItem = forwardRef(({ children, className, style, ...restProps }, ref) => {
    return (_jsx(Select.Item, { className: clsx(s.Item, className), style: style, ...restProps, ref: ref, children: _jsx(Select.ItemText, { children: children }) }));
});
