import { NewMessage } from "../models";

export interface ReceiveMessages {

}

export interface ConnectionMessages {

}

/**
 * Contract to send a message
 * It's a contract from infrastructure part
 */
export interface SendMessage {
  sendOne(message: NewMessage): void
}
