export interface Author {
  id: number
  surname: string
}

export interface Message {
  id: number
  author: Author
  date: Date
  content: string
}

export type Messages = Message[]
