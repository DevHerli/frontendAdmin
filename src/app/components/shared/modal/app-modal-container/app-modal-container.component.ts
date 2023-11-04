import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { BootstrapColorStyles } from 'src/app/data/types/BootstrapColorStyles.type';

@Component({
  selector: 'app-modal-container',
  templateUrl: './app-modal-container.component.html',
  styleUrls: ['./app-modal-container.component.scss'],
})


export class AppModalContainerComponent {
  @ContentChild(TemplateRef) modalContent?: TemplateRef<unknown>;

  @Input() modalId: string = "";
  @Input() headerText: string = "";

  @Input() set headerStyle(value: BootstrapColorStyles) {
    this._headerStyle = ` bg-${value.toLowerCase()}`;
  }

  public get headerStyle(): string {
    return this._headerStyle;
  }

  private _headerStyle: string = "";






}
