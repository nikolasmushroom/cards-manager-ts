import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ value, className, onValueChange, disabled, step, max, min, ...rest }: import("./slider.tsx").SliderCustomProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultSlider: Story;
