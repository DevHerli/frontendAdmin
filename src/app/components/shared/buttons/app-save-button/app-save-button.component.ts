import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './app-save-button.component.html',
  styleUrls: ['./app-save-button.component.scss'],
})
export class AppSaveButtonComponent {
  @Input() isHidden: boolean = false;
  @Input() isDisabled: boolean = false;
  @Output() onSubmit = new EventEmitter<boolean>();

  constructor() {}
}
