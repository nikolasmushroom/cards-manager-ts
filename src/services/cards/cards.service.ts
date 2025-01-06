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
    updateCard: build.mutation<CreateCardResponse, UpdateCardArgs>({
      async onQueryStarted({ id, ...args }, { dispatch, getState, queryFulfilled }) {
        const invalidatedBy = cardsService.util.selectInvalidatedBy(getState(), [
          { type: 'DeckCards' },
        ])
        const patchResults: any[] = []
        invalidatedBy.forEach(({ originalArgs }) => {
          patchResults.push(
            dispatch(
              cardsService.util.updateQueryData('getDeckCards', originalArgs, draft => {
                const itemToUpdateIndex = draft.items.findIndex(card => card.id === id)
                if (itemToUpdateIndex === -1) {
                  return
                }
                Object.assign(draft.items[itemToUpdateIndex], args)
              })
            )
          )
        })
        try {
          await queryFulfilled
        } catch (e) {
          patchResults.forEach(patchResult => patchResult.undo())
        }
      },
      query: args => {
        const { id, ...rest } = args
        return {
          url: `v1/cards/${id}/`,
          method: 'PATCH',
          body: rest,
        }
      },
      invalidatesTags: ['DeckCards'],
    }),
    createCard: build.mutation<CreateCardResponse, CreateCardArgs>({
      async onQueryStarted({}, { getState, dispatch, queryFulfilled }) {
        const invalidatedBy = cardsService.util.selectInvalidatedBy(getState(), [
          { type: 'DeckCards' },
        ])
        try {
          const { data } = await queryFulfilled
          invalidatedBy.forEach(({ originalArgs }) => {
            dispatch(
              cardsService.util.updateQueryData('getDeckCards', originalArgs, draft => {
                if (originalArgs.currentPage !== 1) {
                  return
                }
                draft.items.unshift({ ...data, grade: 0 })
              })
            )
          })
        } catch (e) {
          console.log(e)
        }
      },
      query: args => {
        const { id, ...rest } = args
        return {
          url: `v1/decks/${id}/cards`,
          method: 'POST',
          body: rest,
        }
      },
      invalidatesTags: ['DeckCards'],
    }),
    getCardById: build.query<void, DeleteCardArgs>({
      query: ({ id }) => ({
        url: `v1/cards/${id}/`,
        method: 'GET',
      }),
      providesTags: ['DeckCards'],
    }),
    deleteCard: build.mutation<void, DeleteCardArgs>({
      async onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
        const invalidatedBy = cardsService.util.selectInvalidatedBy(getState(), [
          { type: 'DeckCards' },
        ])
        const deleteResults: any[] = []
        invalidatedBy.forEach(({ originalArgs }) => {
          deleteResults.push(
            dispatch(
              cardsService.util.updateQueryData('getDeckCards', originalArgs, draft => {
                const itemToUpdateIndex = draft.items.findIndex(card => card.id === id)
                if (itemToUpdateIndex === -1) {
                  return
                }
                draft.items.splice(itemToUpdateIndex, 1)
              })
            )
          )
        })
        try {
          await queryFulfilled
        } catch (e) {
          deleteResults.forEach(deleteResult => deleteResult.undo())
        }
      },
      query: ({ id }) => {
        return {
          url: `v1/cards/${id}/`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['DeckCards'],
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
