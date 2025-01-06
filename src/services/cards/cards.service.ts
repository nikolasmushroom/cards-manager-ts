import { baseApi } from '@/services/baseApi.ts'
import {
  CardsListResponse,
  CreateCardArgs,
  CreateCardResponse,
  DeckMinMaxResponse,
  DeleteCardArgs,
  GetCardsArgs,
  UpdateCardArgs,
} from '@/services/cards/cards.types.ts'

export const cardsService = baseApi.injectEndpoints({
  endpoints: build => ({
    getDeckCards: build.query<CardsListResponse, GetCardsArgs>({
      query: ({ id, ...parameters }) => ({
        url: `v1/decks/${id}/cards`,
        method: 'GET',
        parameters: parameters,
      }),
      providesTags: ['DeckCards'],
    }),
    getMinMaxCards: build.query<DeckMinMaxResponse, void>({
      query: () => 'v2/decks/min-max-cards',
    }),
    createCard: build.mutation<CreateCardResponse, CreateCardArgs>({
      query: args => {
        const { id, ...rest } = args
        return {
          url: `v1/decks/${id}/cards`,
          method: 'POST',
          body: rest,
        }
      },
      invalidatesTags: ['Cards', 'DeckCards'],
    }),
    updateCard: build.mutation<CreateCardResponse, UpdateCardArgs>({
      query: args => {
        const { id, ...rest } = args
        return {
          url: `v1/cards/${id}/`,
          method: 'PATCH',
          body: rest,
        }
      },
      invalidatesTags: ['Cards', 'DeckCards'],
    }),
    getCardById: build.query<void, DeleteCardArgs>({
      query: ({ id }) => ({
        url: `v1/cards/${id}/`,
        method: 'GET',
      }),
      providesTags: ['Cards', 'DeckCards'],
    }),
    deleteCard: build.mutation<void, DeleteCardArgs>({
      query: ({ id }) => {
        return {
          url: `v1/cards/${id}/`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['Cards', 'DeckCards'],
    }),
  }),
})
export const {
  useGetCardByIdQuery,
  useCreateCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
  useGetMinMaxCardsQuery,
  useGetDeckCardsQuery,
} = cardsService
