import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: import("react").ForwardRefExoticComponent<{
        label?: string;
        onCheckedChange?: (checked: boolean) => void;
    } & Omit<import("@radix-ui/react-checkbox").CheckboxProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
    tags: string[];
    title: string;
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultCheckbox: Story;
export declare const CheckboxWithLabel: Story;
export declare const DisabledCheckbox: Story;
