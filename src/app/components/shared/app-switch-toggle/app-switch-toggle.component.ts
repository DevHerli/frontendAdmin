import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch-toggle',
  templateUrl: './app-switch-toggle.component.html',
  styleUrls: ['./app-switch-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppSwitchToggleComponent),
      multi: true,
    },
  ],
})
export class AppSwitchToggleComponent implements ControlValueAccessor {
  //#region Bindings
  @Output() onChangeValue = new EventEmitter<boolean>();

  @Input() isDisabled: boolean = false;
  @Input() falseText: string = "";
  @Input() trueText: string = "";

  @Input() public set value(v: boolean) {
    this._value = v;
    this.onEmit();
  }
  //#endregion Bindings

  //#region Variables
  public get value(): boolean {
    return this._value
  }

  private _value: boolean = false;
  //#endregion


  public onEmit(): void {
    this.onChangeValue.emit(this._value);
  }

  //#region
  private onChange = (_: any) => {
  };
  private onTouched = () => { };

  writeValue(obj: any): void {
    this._value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  //#endregion ValueAccessor
}
