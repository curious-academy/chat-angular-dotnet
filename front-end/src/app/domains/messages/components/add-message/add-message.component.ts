import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { defaultMessage, NewMessage } from '../../models';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'dtbc-add-message',
  imports: [FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css'
})
export class AddMessageComponent {
  message = signal(defaultMessage)

  send(): void {
    console.info(this.message().content)
  }
}
