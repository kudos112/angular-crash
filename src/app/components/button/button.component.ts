import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text: string = 'click';
  @Input() color: string = 'black';
  @Output() btnClick = new EventEmitter();

  constructor() {}

  onClick() {
    this.btnClick.emit();
  }
}
