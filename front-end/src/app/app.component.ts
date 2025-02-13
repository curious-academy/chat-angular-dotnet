import { Component } from '@angular/core';
import { ListMessagesComponent } from "./domains/messages/components/list-messages/list-messages.component";
import { AddMessageComponent } from "./domains/messages/components/add-message/add-message.component";

@Component({
  selector: 'app-root',
  imports: [ListMessagesComponent, AddMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';
}
