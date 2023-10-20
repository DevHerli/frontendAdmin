import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-general-buttons',
  templateUrl: './app-general-buttons.component.html',
  styleUrls: ['./app-general-buttons.component.scss']
})
export class AppGeneralButtonsComponent {
  @Input()
  public set showAllButtons(showAll: boolean) {
    this.isVisible_clean = showAll;
    this.isVisible_save = showAll;
    this.isVisible_cancel = showAll;
  }



  @Output() onClean = new EventEmitter<any>();
  @Input() isVisible_clean: boolean = false;
  @Input() isDisabled_clean: boolean = false;

  @Output() onSave = new EventEmitter<any>();
  @Input() isVisible_save: boolean = false;
  @Input() isDisabled_save: boolean = false;

  @Output() onCancel = new EventEmitter<any>();
  @Input() isVisible_cancel: boolean = false;
  @Input() isDisabled_cancel: boolean = false;





}
