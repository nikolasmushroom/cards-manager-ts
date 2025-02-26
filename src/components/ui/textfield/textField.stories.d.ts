import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: import("react").ForwardRefExoticComponent<{
        onValueChange?: (value: string) => void;
        containerProps?: import("react").ComponentPropsWithoutRef<"div">;
        labelProps?: import("react").ComponentPropsWithoutRef<"label">;
        labelPosition?: "left" | "right" | "center";
        label?: string;
        search?: boolean;
        errorMessage?: string;
    } & Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
    tags: string[];
    title: string;
    argTypes: {
        onChange: {
            action: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultTextField: Story;
export declare const TextFieldWithError: Story;
export declare const TextFieldPassword: Story;
export declare const TextFieldPasswordWithError: Story;
export declare const TextFieldSearch: Story;
export declare const TextfieldSearchWithError: Story;
