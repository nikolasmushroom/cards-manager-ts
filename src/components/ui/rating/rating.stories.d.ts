import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ gradeNumber, itemsNumber, changeRatingOnClick }: {
        item?: import("react").ReactNode;
        itemsNumber: number;
        gradeNumber?: number;
        changeRatingOnClick?: boolean;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultRating: Story;
