import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { defaultMessage, NewMessage } from '../../models';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MessageInfra } from '../../services/messages.infra';
import { ConnectionMessages } from '../../services/messages.application';

@Component({
  selector: 'dtbc-add-message',
  imports: [FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css'
})
export class AddMessageComponent implements OnInit {
  infra = inject(MessageInfra)
  message = signal(defaultMessage)

  ngOnInit(): void {
    this.infra.connect()
    this.infra.receive().subscribe({
      next: message => {
        console.info('message reçu : ', message)
      }
    })
  }

  send(): void {
    this.infra.sendOne({
      author: { id: 0, surname: 'author'},
      content: this.message().content,
      date: new Date()
    })
  }
}
