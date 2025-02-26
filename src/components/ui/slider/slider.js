import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Slider from '@radix-ui/react-slider';
import s from './slider.module.scss';
import clsx from 'clsx';
import { Typography } from '../typography';
export const SliderCustom = ({ value, className, onValueChange, disabled, step = 1, max = 10, min = 1, ...rest }) => {
    const classNames = {
        root: clsx(s.Root, className),
    };
    return (_jsxs("div", { className: s.sliderContainer, children: [_jsx("div", { className: s.boxContainer, children: _jsx(Typography, { variant: 'Body1', children: value[0] }) }), _jsx("form", { children: _jsxs(Slider.Root, { className: classNames.root, defaultValue: [2, 10], max: max, min: min, step: step, disabled: disabled, value: value, onValueChange: onValueChange, ...rest, children: [_jsx(Slider.Track, { className: s.Track, children: _jsx(Slider.Range, { className: s.Range }) }), _jsx(Slider.Thumb, { className: s.Thumb }), _jsx(Slider.Thumb, { className: s.Thumb })] }) }), _jsx("div", { className: s.boxContainer, children: _jsx(Typography, { variant: 'Body1', children: value[1] }) })] }));
};
