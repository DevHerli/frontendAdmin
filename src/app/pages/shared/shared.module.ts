import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedComponentsModule } from 'src/app/components/shared/sharedComponents.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    TranslateModule
  ]
})
export class SharedModule { }
