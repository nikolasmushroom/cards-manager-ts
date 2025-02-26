import { jsx as _jsx } from "react/jsx-runtime";
import { Page } from '@/components/ui/page';
import { EditProfile } from '@/components/auth/editProfile';
import { useMeQuery } from '@/services/auth/authService.ts';
export const Profile = () => {
    const { data } = useMeQuery();
    return (_jsx(Page, { children: _jsx(EditProfile, { name: data?.name, email: data?.email, src: data?.avatar }) }));
};
