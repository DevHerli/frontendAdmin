import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch-toggle',
  templateUrl: './app-switch-toggle.component.html',
  styleUrls: ['./app-switch-toggle.component.scss']
})
export class AppSwitchToggleComponent {

  @Output() onChange = new EventEmitter<boolean>();

  @Input() public set value(v: boolean) {
    this._value = v;
    this.onEmit();
  }

  public get value(): boolean {
    return this._value
  }

  private _value: boolean = true;

  public onEmit(): void {
    this.onChange.emit(this._value);
  }

}
