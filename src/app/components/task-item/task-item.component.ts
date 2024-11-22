import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task: Task = {
    id: 0,
    text: 'Loading...',
    day: 'loading...',
    reminder: false,
  };
  faTimes = faTimes;

  constructor() {}
}
