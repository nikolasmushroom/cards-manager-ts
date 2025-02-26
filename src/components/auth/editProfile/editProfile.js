import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Typography } from '@/components/ui';
import s from './editProfile.module.scss';
import { Avatar } from '@/components/ui/avatar/avatar.tsx';
import { ProfileInfo } from '@/components/auth/editProfile/profileInfo/profileInfo.tsx';
import { useState } from 'react';
import { ChangeName } from '@/components/auth/editProfile/changeName/changeName.tsx';
export const EditProfile = ({ name, email, src, onLogOut }) => {
    const [editMode, setEditMode] = useState(false);
    return (_jsxs(Card, { className: s.formWrapper, children: [_jsx(Typography, { variant: 'H1', children: "Personal Information" }), _jsx(Avatar, { src: src, userName: name, size: '96px', className: s.avatar }), !editMode ? (_jsx(ProfileInfo, { name: name, email: email, setEditeMode: setEditMode, onLogOut: onLogOut })) : (_jsx(ChangeName, { src: src, name: name, setEditMode: setEditMode }))] }));
};
