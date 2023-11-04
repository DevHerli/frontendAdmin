import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-action-button',
  templateUrl: './app-modal-action-button.component.html',
  styleUrls: ['./app-modal-action-button.component.scss']
})
export class AppModalActionButtonComponent {

  @Input() text: string = "";
  @Input() icon: string = "";
  @Input() buttonStyle: string = "";

  @Input() public set modalId(id: string) {
    this._modalId = ("#" + id);
  }

  public get modalId(): string {
    return this._modalId;
  }

  private _modalId: string = "";

  constructor() {
  }

}
