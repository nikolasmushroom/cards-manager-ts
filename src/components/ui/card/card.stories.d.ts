import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ style, children, className, ...rest }: import("./card.tsx").CardProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const CheckEmailCard: Story;
