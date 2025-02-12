import { Component } from '@angular/core';
import { ListMessagesComponent } from "./domains/messages/components/list-messages/list-messages.component";

@Component({
  selector: 'app-root',
  imports: [ListMessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';
}
