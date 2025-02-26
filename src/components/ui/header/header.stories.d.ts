import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ isLoggedIn, shortName, navigateToLogin, userName, userPhoto, userEmail, logout, ...rest }: import("./header.tsx").HeaderProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const AuthorizedUserHeader: Story;
export declare const AnauthorizedUserHeader: Story;
