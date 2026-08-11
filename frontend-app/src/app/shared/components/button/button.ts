import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

  @Input() label = '';
  @Input() disabled = false;
  @Input() buttonClass = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

}