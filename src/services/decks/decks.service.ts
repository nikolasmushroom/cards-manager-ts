import {
  CreateDecksArgs,
  Deck,
  DecksListResponse,
  DeleteDeckArgs,
  GetDeckByIdArgs,
  GetDecksArgs,
  LearnDeckArgs,
  LearnDeckResponse,
  SaveGradeArgs,
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
      query: ({ id }) => ({
        url: `v1/decks/${id}`,
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
    learnDeck: build.query<LearnDeckResponse, LearnDeckArgs>({
      query: ({ id, previousCardId }) => ({
        url: `v1/decks/${id}/learn`,
        method: 'GET',
        params: { previousCardId },
      }),
      providesTags: ['Cards'],
    }),
    saveGrade: build.mutation<LearnDeckResponse, SaveGradeArgs>({
      query: ({ id, cardId, grade }) => ({
        url: `v1/decks/${id}/learn`,
        method: 'POST',
        body: { cardId, grade },
      }),
      invalidatesTags: ['Cards'],
    }),
  }),
})
export const {
  useGetDecksQuery,
  useCreateDeckMutation,
  useUpdateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
  useLearnDeckQuery,
  useSaveGradeMutation,
} = decksService
