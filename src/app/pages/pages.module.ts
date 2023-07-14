import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from './blank/blank.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    BlankComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
