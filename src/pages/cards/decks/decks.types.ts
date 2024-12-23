export interface DecksListResponse {
  items: Deck[]
  pagination: Pagination
  maxCardsCount: number
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
