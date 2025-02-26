import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ disabled, onValueChange, defaultValue, className, radios, value, ...rest }: import("./radioGroup.tsx").RadioGroupProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultRadioGroup: Story;
export declare const disabledRadioGroup: Story;
