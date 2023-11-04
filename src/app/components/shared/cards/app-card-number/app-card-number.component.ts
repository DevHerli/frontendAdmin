import { Component, Input } from '@angular/core';
import { BootstrapColorStyles } from 'src/app/data/types/BootstrapColorStyles.type';

@Component({
  selector: 'app-card-number',
  templateUrl: './app-card-number.component.html',
  styleUrls: ['./app-card-number.component.scss']
})
export class AppCardNumberComponent {

  @Input() quantity: number = NaN;
  @Input() cardText: string = "";
  @Input() set style(value: BootstrapColorStyles) {
    this._style = value;
  }

  public get style(): string {
    return this._style;
  }

  private _style: string = '';


  constructor() {

  }



}
