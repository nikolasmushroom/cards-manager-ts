import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: import("react").ForwardRefExoticComponent<{
        options: import("./select.tsx").Option[];
        label?: string;
        placeholder?: string;
        className?: string;
        id?: string;
        style?: import("react").CSSProperties;
        selectHeight?: string;
    } & import("@radix-ui/react-select").SelectProps & import("react").RefAttributes<never>>;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultSelect: Story;
