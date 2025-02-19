import { Observable } from "rxjs";
import { NewMessage } from "../models";

/**
 * Contract to receive a message in a next pipeline observable
 */
export interface ReceiveMessages {
  receive(): Observable<NewMessage>
}

/**
 * Contract to allow connection to hub
 */
export interface ConnectionMessages {
  connect(): void
}

/**
 * Contract to send a message
 * It's a contract from infrastructure part
 */
export interface SendMessage {
  sendOne(message: NewMessage): void
}
