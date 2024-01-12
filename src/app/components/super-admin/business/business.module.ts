import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFormsBusinessContainerComponent } from './formsBusiness/app-forms-business-container/app-forms-business-container.component';

const components = [
  AppFormsBusinessContainerComponent
]

@NgModule({
  declarations: [
    components
  ],
  exports:  [
    components
  ],
  imports: [
    CommonModule
  ]
})
export class BusinessModule { }
