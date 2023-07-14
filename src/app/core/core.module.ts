import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
  ],
  exports:[
    HeaderComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class CoreModule { }
