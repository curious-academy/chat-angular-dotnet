import { Injectable } from "@angular/core";
import { NewMessage } from "../models";
import { SendMessage } from "./messages.application";
import *  as signalR from '@microsoft/signalr';

@Injectable({providedIn: 'root'})
export class MessageInfra implements SendMessage {
  private readonly connection = new signalR.HubConnectionBuilder()
                                .withUrl('https://localhost:49155/chathub')
                                .build();

  sendOne(message: NewMessage): void {
    this.connection.send('newMessage', message.author.surname, message.content)
    // .then(() => this.message().content = '');
  }

}
