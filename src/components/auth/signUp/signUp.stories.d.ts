import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ onSubmit }: {
        onSubmit: (values: import("./useSignUp").SignUpForm) => void;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {};
    decorators: ((Story: import("@storybook/csf").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        onSubmit: (values: import("./useSignUp").SignUpForm) => void;
    }>) => import("react/jsx-runtime").JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SignInDef: Story;
