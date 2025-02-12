import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Message } from '../../models';

@Component({
  selector: 'dtbc-display-one-message',
  imports: [ MatExpansionModule, MatFormFieldModule],
  templateUrl: './display-one-message.component.html',
  styleUrl: './display-one-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayOneMessageComponent {
  message = input.required<Message>()


}
