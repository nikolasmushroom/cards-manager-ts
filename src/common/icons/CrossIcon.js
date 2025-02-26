import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgComponent = (props, ref) => (_jsx("svg", { ref: ref, width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: _jsx("path", { d: "M13.41 12.0002L17.71 7.71019C17.8983 7.52188 18.0041 7.26649 18.0041 7.00019C18.0041 6.73388 17.8983 6.47849 17.71 6.29019C17.5217 6.10188 17.2663 5.99609 17 5.99609C16.7337 5.99609 16.4783 6.10188 16.29 6.29019L12 10.5902L7.71 6.29019C7.5217 6.10188 7.2663 5.99609 7 5.99609C6.7337 5.99609 6.4783 6.10188 6.29 6.29019C6.1017 6.47849 5.99591 6.73388 5.99591 7.00019C5.99591 7.26649 6.1017 7.52188 6.29 7.71019L10.59 12.0002L6.29 16.2902C6.19627 16.3831 6.12188 16.4937 6.07111 16.6156C6.02034 16.7375 5.9942 16.8682 5.9942 17.0002C5.9942 17.1322 6.02034 17.2629 6.07111 17.3848C6.12188 17.5066 6.19627 17.6172 6.29 17.7102C6.38296 17.8039 6.49356 17.8783 6.61542 17.9291C6.73728 17.9798 6.86799 18.006 7 18.006C7.13201 18.006 7.26272 17.9798 7.38458 17.9291C7.50644 17.8783 7.61704 17.8039 7.71 17.7102L12 13.4102L16.29 17.7102C16.383 17.8039 16.4936 17.8783 16.6154 17.9291C16.7373 17.9798 16.868 18.006 17 18.006C17.132 18.006 17.2627 17.9798 17.3846 17.9291C17.5064 17.8783 17.617 17.8039 17.71 17.7102C17.8037 17.6172 17.8781 17.5066 17.9289 17.3848C17.9797 17.2629 18.0058 17.1322 18.0058 17.0002C18.0058 16.8682 17.9797 16.7375 17.9289 16.6156C17.8781 16.4937 17.8037 16.3831 17.71 16.2902L13.41 12.0002Z", fill: "white" }) }));
const ForwardRef = forwardRef(SvgComponent);
export default memo(ForwardRef);
