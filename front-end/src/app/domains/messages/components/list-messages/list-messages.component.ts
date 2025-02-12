import { Component, inject } from '@angular/core';
import { GetListMessagesInfra } from '../../services/get-list-messages.infra';
import { DisplayOneMessageComponent } from "../display-one-message/display-one-message.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'dtbc-list-messages',
  imports: [DisplayOneMessageComponent, AsyncPipe],
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css',
  providers: [GetListMessagesInfra]
})
export class ListMessagesComponent {
  private readonly messagesService = inject(GetListMessagesInfra)
  messages$ = this.messagesService.getAll()
}
