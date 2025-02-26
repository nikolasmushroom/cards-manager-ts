import { Card, Pagination } from '@/services/decks/decks.types.ts';
export type CreateCardArgs = {
    id: string;
    question: string;
    answer: string;
    questionImg?: string;
    answerImg?: string;
    questionVideo?: string;
    answerVideo?: string;
};
export type CreateCardResponse = {
    id: string;
    deckId: string;
    userId: string;
    question: string;
    answer: string;
    shots: number;
    answerImg: string;
    questionImg: string;
    questionVideo: string;
    answerVideo: string;
    created: string;
    updated: string;
};
export type DeleteCardArgs = {
    id: string;
};
export type UpdateCardArgs = {
    id: string;
    question?: string;
    answer?: string;
    questionImg?: string;
    answerImg?: string;
    questionVideo?: string;
    answerVideo?: string;
};
export interface GetCardsArgs {
    id: string;
    orderBy?: string;
    question?: string;
    answer?: string;
    currentPage?: number;
    itemsPerPage?: number;
}
export interface CardsListResponse {
    pagination: Pagination;
    items: Card[];
}
export type DeckMinMaxResponse = {
    max: number;
    min: number;
};
