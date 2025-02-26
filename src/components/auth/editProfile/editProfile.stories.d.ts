import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ name, email, src, onLogOut }: {
        name?: string;
        email?: string;
        src?: string;
        onLogOut?: () => void;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {};
    decorators: ((Story: import("@storybook/csf").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        name?: string | undefined;
        email?: string | undefined;
        src?: string | undefined;
        onLogOut?: (() => void) | undefined;
    }>) => import("react/jsx-runtime").JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const editProfileDef: Story;
