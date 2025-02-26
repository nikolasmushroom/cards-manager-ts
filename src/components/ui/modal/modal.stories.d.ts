import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ title, onClose, children, className, open, ...rest }: import("./modal.tsx").ModalProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultModal: Story;
export declare const ModalWithoutTitle: Story;
