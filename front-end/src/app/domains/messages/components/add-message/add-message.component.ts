import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { defaultMessage, NewMessage } from '../../models';

import *  as signalR from '@microsoft/signalr';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'dtbc-add-message',
  imports: [FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css'
})
export class AddMessageComponent implements OnInit {
  private readonly connection = new signalR.HubConnectionBuilder()
                                .withUrl('https://localhost:49155/chathub')
                                .build();
  message = signal(defaultMessage)

  ngOnInit(): void {
    this.connection.start()
                   .then(() => console.info('HUB IS CONNECTED'))
                   .catch((err) => console.error(err));

    this.connection.on('messageReceived', (author, message) => {
      console.info('message reçu ', { message, author })
    })
  }

  send(): void {
    console.info(this.message().content)
    this.connection.send("newMessage", 'evan', this.message().content)
                  .then(() => this.message().content = '');
  }
}
