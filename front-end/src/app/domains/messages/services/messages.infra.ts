import { Injectable } from "@angular/core";
import { NewMessage } from "../models";
import { ConnectionMessages, ReceiveMessages, SendMessage } from "./messages.application";
import *  as signalR from '@microsoft/signalr';
import { Observable } from "rxjs";
import { observeNotification } from "rxjs/internal/Notification";

@Injectable({providedIn: 'root'})
export class MessageInfra implements SendMessage, ConnectionMessages, ReceiveMessages {
  private readonly connection = new signalR.HubConnectionBuilder()
                                .withUrl('https://localhost:49155/chathub')
                                .build()

  connect(): void {
    this.connection.start()
                   .then(() => console.info('HUB IS CONNECTED'))
                   .catch((err) => console.error(err))
  }

  receive(): Observable<NewMessage> {
    return new Observable<NewMessage>(subscriber => {
      this.connection.on('messageReceived', (authorName, message) => {
        subscriber.next({
          author: { id: 0, surname: authorName },
          content: message,
          date: new Date()
        })
      })
    })
  }

  sendOne(message: NewMessage): void {
    this.connection.send('newMessage', message.author.surname, message.content)
    // .then(() => this.message().content = '');
  }

}
