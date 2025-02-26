import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Radio from '@radix-ui/react-radio-group';
import s from './radioGroup.module.scss';
import clsx from 'clsx';
import { Typography } from '../typography';
export const RadioGroup = ({ disabled, onValueChange, defaultValue, className, radios, value, ...rest }) => {
    const classNames = {
        radioWrapper: clsx(s.radioWrapper, disabled && s.disabled),
        label: clsx(s.Label, disabled && s.disabled),
        item: clsx(s.Item, disabled && s.disabled),
        indicator: clsx(s.Indicator, disabled && s.disabled),
        root: clsx(s.Root, className),
    };
    const mappedRadios = radios.map((r, i) => {
        const id = r.id ? r.id : i.toString();
        return (_jsxs("div", { className: s.radioContainer, children: [_jsx("div", { className: classNames.radioWrapper, children: _jsx(Radio.Item, { className: classNames.item, value: r.value, id: id, children: _jsx(Radio.Indicator, { className: classNames.indicator }) }) }, id), _jsx(Typography, { variant: 'Body2', className: classNames.label, as: 'label', htmlFor: id, children: r.label })] }));
    });
    return (_jsx(Radio.Root, { value: value, className: classNames.root, disabled: disabled, onValueChange: onValueChange, defaultValue: defaultValue, "aria-label": "View density", ...rest, children: mappedRadios }));
};
