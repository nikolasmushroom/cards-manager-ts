import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import s from './Header.module.scss';
import Logo from '../../../common/icons/LogoImage';
import { Button } from '../button';
import { Typography } from '../typography';
import { Avatar, Dropdown } from '@/components/ui';
import { DropdownItem, DropdownItemWithIcon } from '@/components/ui/dropdown/DropdownItems';
import { AvatarInfo } from '@/components/ui/avatar/avatarInfo';
import ProfileIcon from '@/common/icons/ProfileIcon.tsx';
import Logout from '@/common/icons/Logout.tsx';
export const Header = ({ isLoggedIn, shortName, userName, userPhoto, userEmail, ...rest }) => {
    return (_jsx("header", { className: s.headerWrapper, ...rest, children: _jsxs("div", { className: s.content, children: [_jsx(Logo, { className: s.logo }), !isLoggedIn ? (_jsx(Button, { variant: 'secondary', as: 'a', href: 'https://it-incubator.io/', children: _jsx(Typography, { as: 'p', variant: 'Subtitle2', children: "Sign In" }) })) : (_jsx(Dropdown, { align: 'end', trigger: _jsx(Avatar, { src: userPhoto, userName: userName, shortName: shortName }), children: _jsxs(_Fragment, { children: [_jsxs(DropdownItem, { children: [_jsx(Avatar, { userName: userName }), _jsx(AvatarInfo, { name: userName, caption: userEmail })] }), _jsx(DropdownItemWithIcon, { icon: _jsx(ProfileIcon, {}), caption: 'My Profile' }), _jsx(DropdownItemWithIcon, { icon: _jsx(Logout, {}), caption: 'Sign Out' })] }) }))] }) }));
};
