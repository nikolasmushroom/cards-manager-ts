import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ link, email }: {
        link: string;
        email?: string;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {};
    decorators: ((Story: import("@storybook/csf").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        link: string;
        email?: string | undefined;
    }>) => import("react/jsx-runtime").JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const checkEmailDef: Story;
