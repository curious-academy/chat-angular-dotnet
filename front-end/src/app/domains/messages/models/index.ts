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

export type NewMessage = Omit<Message, 'id'>

export const defaultMessage: NewMessage = {
  author: {id: 0, surname: ''},
  content: '',
  date: new Date()
}

export type Messages = Message[]
