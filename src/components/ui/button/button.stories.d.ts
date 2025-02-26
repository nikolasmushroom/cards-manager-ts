import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: <T extends import("react").ElementType = "button">(props: import("./button.tsx").ButtonProps<T>) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Link: Story;
export declare const FullWidthButton: Story;
export declare const ButtonWithIcon: Story;
