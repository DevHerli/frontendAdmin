import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangsComponent } from './langs/langs.component';
import { TranslateModule } from '@ngx-translate/core';
import { NotificationsComponent } from './notifications/notifications.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LangsComponent,
    NotificationsComponent
  ],
  exports: [
    LangsComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class SharedComponentsModule { }
