import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import s from './profileInfo.module.scss';
import { Typography } from '@/components/ui/typography';
import Edit from '@/common/icons/Edit.tsx';
import Logout from '@/common/icons/Logout.tsx';
import { Button } from '@/components/ui';
export const ProfileInfo = ({ name, email, setEditeMode }) => {
    const onEditModHandler = () => setEditeMode(true);
    return (_jsxs(_Fragment, { children: [_jsxs(Typography, { variant: "H3", as: "h3", className: s.nameContainer, children: [_jsx(Typography, { variant: 'H2', children: name }), _jsx(Edit, { onClick: onEditModHandler })] }), _jsx(Typography, { variant: "Body2", className: s.email, children: email }), _jsxs(Button, { type: "submit", variant: 'secondary', className: s.button, children: [_jsx(Logout, {}), _jsx(Typography, { variant: 'Subtitle2', as: 'p', children: "Logout" })] })] }));
};
