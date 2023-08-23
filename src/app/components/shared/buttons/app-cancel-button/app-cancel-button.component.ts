import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cancel-button',
  templateUrl: './app-cancel-button.component.html',
  styleUrls: ['./app-cancel-button.component.scss'],
})
export class AppCancelButtonComponent {
  @Input() isHidden: boolean = false;
  @Input() isDisabled: boolean = false;
  @Output() onCancel = new EventEmitter<boolean>();

  constructor() {}
}
