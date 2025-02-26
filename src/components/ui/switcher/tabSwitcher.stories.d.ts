import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ tabs, label, disabled, className, ...rest }: import("./tabSwitcher.tsx").TabSwitcherProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
    argTypes: {
        onChange: () => void;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
