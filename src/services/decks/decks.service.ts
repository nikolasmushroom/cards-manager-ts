import {
  CardsListResponse,
  CreateDecksArgs,
  Deck,
  DeckMinMaxResponse,
  DecksListResponse,
  DeleteDeckArgs,
  GetCardsArgs,
  GetDeckByIdArgs,
  GetDecksArgs,
  UpdateDecksArgs,
} from '@/services/decks/decks.types.ts'
import { baseApi } from '@/services/baseApi.ts'

export const decksService = baseApi.injectEndpoints({
  endpoints: build => ({
    getDecks: build.query<DecksListResponse, GetDecksArgs | void>({
      query: args => ({
        url: `v2/decks`,
        params: args ?? undefined,
      }),
      providesTags: ['Decks'],
    }),
    createDeck: build.mutation<Deck, CreateDecksArgs>({
      async onQueryStarted({}, { dispatch, getState, queryFulfilled }) {
        const invalidatedBy = decksService.util.selectInvalidatedBy(getState(), [{ type: 'Decks' }])
        try {
          const { data } = await queryFulfilled
          invalidatedBy.forEach(({ originalArgs }) => {
            dispatch(
              decksService.util.updateQueryData('getDecks', originalArgs, draft => {
                if (originalArgs.currentPage !== 1) {
                  return
                }
                draft.items.unshift(data)
              })
            )
          })
        } catch (e) {
          console.log(e)
        }
      },
      query: ({ cover, isPrivate, name }) => {
        const formData = new FormData()
        formData.append('name', name)
        if (isPrivate) {
          formData.append('isPrivate', isPrivate.toString())
        }
        if (cover) {
          formData.append('cover', cover)
        } else if (cover === null) {
          formData.append('cover', '')
        }
        return {
          url: `v1/decks`,
          method: 'POST',
          body: formData,
        }
      },
      invalidatesTags: ['Decks'],
    }),
    updateDeck: build.mutation<Deck, UpdateDecksArgs>({
      async onQueryStarted({ cover, id, ...args }, { dispatch, getState, queryFulfilled }) {
        const invalidatedBy = decksService.util.selectInvalidatedBy(getState(), [{ type: 'Decks' }])
        const patchResults: any[] = []
        invalidatedBy.forEach(({ originalArgs }) => {
          patchResults.push(
            dispatch(
              decksService.util.updateQueryData('getDecks', originalArgs, draft => {
                const itemToUpdateIndex = draft.items.findIndex(deck => deck.id === id)
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
      query: ({ id, name, cover, isPrivate }) => {
        const formData = new FormData()
        if (name) {
          formData.append('name', name)
        }
        if (isPrivate) {
          formData.append('isPrivate', isPrivate.toString())
        }
        if (cover) {
          formData.append('cover', cover)
        } else if (cover === null) {
          formData.append('cover', '')
        }
        return {
          url: `v1/decks/${id}`,
          method: 'PATCH',
          body: formData,
        }
      },
      invalidatesTags: ['Decks'],
    }),
    deleteDeck: build.mutation<Deck, DeleteDeckArgs>({
      async onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
        const invalidatedBy = decksService.util.selectInvalidatedBy(getState(), [{ type: 'Decks' }])
        const deleteResults: any[] = []
        invalidatedBy.forEach(({ originalArgs }) => {
          deleteResults.push(
            dispatch(
              decksService.util.updateQueryData('getDecks', originalArgs, draft => {
                const itemToUpdateIndex = draft.items.findIndex(deck => deck.id === id)
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
      query: args => ({
        url: `v1/decks/${args.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Decks'],
    }),
    getDeckById: build.query<Deck, GetDeckByIdArgs>({
      query: args => ({
        url: `v1/decks/${args.id}`,
        method: 'GET',
        parameters: args,
      }),
    }),
    getDeckCards: build.query<CardsListResponse, GetCardsArgs>({
      query: ({ id, ...parameters }) => ({
        url: `v1/decks/${id}/cards`,
        method: 'GET',
        parameters: parameters,
      }),
    }),
    getMinMaxCards: build.query<DeckMinMaxResponse, void>({
      query: () => 'v2/decks/min-max-cards',
    }),
  }),
})
export const {
  useGetDecksQuery,
  useCreateDeckMutation,
  useUpdateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckCardsQuery,
  useGetDeckByIdQuery,
  useGetMinMaxCardsQuery,
} = decksService
