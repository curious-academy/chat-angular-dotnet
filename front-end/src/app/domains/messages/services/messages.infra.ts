import { Injectable } from "@angular/core";
import { NewMessage } from "../models";
import { ConnectionMessages, SendMessage } from "./messages.application";
import *  as signalR from '@microsoft/signalr';

@Injectable({providedIn: 'root'})
export class MessageInfra implements SendMessage, ConnectionMessages {
  private readonly connection = new signalR.HubConnectionBuilder()
                                .withUrl('https://localhost:49155/chathub')
                                .build()

  connect(): void {
    this.connection.start()
                   .then(() => console.info('HUB IS CONNECTED'))
                   .catch((err) => console.error(err))
  }

  sendOne(message: NewMessage): void {
    this.connection.send('newMessage', message.author.surname, message.content)
    // .then(() => this.message().content = '');
  }

}
