import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgComponent = (props, ref) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 18, height: 18, fill: "currentColor", viewBox: "0 0 18 18", ref: ref, ...props, children: _jsx("g", { id: "Layer 2", children: _jsx("g", { id: "checkedIcon", children: _jsx("path", { d: "M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z", fill: "currentColor" }) }) }) }));
const ForwardRef = forwardRef(SvgComponent);
export default memo(ForwardRef);
