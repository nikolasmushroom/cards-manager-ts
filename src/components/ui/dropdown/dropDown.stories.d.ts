import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: import("react").ForwardRefExoticComponent<{
        children?: import("react").ReactNode;
        trigger?: import("react").ReactNode;
        className?: string;
        style?: import("react").CSSProperties;
        align?: "start" | "center" | "end";
    } & import("@radix-ui/react-dropdown-menu").DropdownMenuProps & import("react").RefAttributes<HTMLButtonElement>>;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultDropdown: Story;
export declare const DropdownWithAvatar: Story;
