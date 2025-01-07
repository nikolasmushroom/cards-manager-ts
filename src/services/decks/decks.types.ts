export interface DecksListResponse {
  items: Deck[]
  pagination: Pagination
}

export interface Pagination {
  totalItems: number
  currentPage: number
  itemsPerPage: number
  totalPages: number
}

export interface Deck {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover?: string
  created: string
  updated: string
  cardsCount: number
  author: Author
}

export interface Author {
  id: string
  name: string
}

export interface GetDecksArgs {
  orderBy?: string
  minCardsCount?: number
  maxCardsCount?: number
  name?: string
  authorId?: string
  favoritedBy?: string
  currentPage?: number
  itemsPerPage?: number
}

export interface CreateDecksArgs {
  cover?: File | null
  name: string
  isPrivate?: boolean
}
export type UpdateDecksArgs = Partial<CreateDecksArgs> & { id: string }
export type DeleteDeckArgs = {
  id: string
}

export interface GetDeckByIdArgs {
  id: string
}

export interface Card {
  grade: number
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
  created: string
  updated: string
}

export type LearnDeckResponse = {
  grade: number
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
  created: string
  updated: string
}
export type LearnDeckArgs = {
  id: string
  previousCardId?: string
}
export type SaveGradeArgs = {
  cardId: string
  grade: number
  id: string
}
