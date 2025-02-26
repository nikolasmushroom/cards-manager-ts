import { Card } from '@/services/decks/decks.types.ts';
type Props = {
    title: string;
    deckId?: string;
    card?: Card;
};
export declare const CardModal: ({ card, deckId, title }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
