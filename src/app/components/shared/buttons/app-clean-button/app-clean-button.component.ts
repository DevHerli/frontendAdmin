import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clean-button',
  templateUrl: './app-clean-button.component.html',
  styleUrls: ['./app-clean-button.component.scss']
})
export class AppCleanButtonComponent {

  @Input() isHidden: boolean = false;
  @Input() isDisabled: boolean = false;
  @Output() onClean = new EventEmitter<any>();

}
