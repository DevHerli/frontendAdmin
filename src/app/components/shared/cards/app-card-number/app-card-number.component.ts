import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-number',
  templateUrl: './app-card-number.component.html',
  styleUrls: ['./app-card-number.component.scss']
})
export class AppCardNumberComponent {

  @Input() quantity: number = NaN;
  @Input() cardText: string = "<empty>";
  @Input() set style(value: string) {
    if (value && this.validStyles.includes(value)) {
      this._style = value;
      console.log('estilo válido')
    }
  }

  public get style(): string {
    return this._style;
  }

  private _style: string = '';
  private validStyles: string[] = ['primary', 'success', 'warning', 'danger'];



  constructor() {

  }



}
