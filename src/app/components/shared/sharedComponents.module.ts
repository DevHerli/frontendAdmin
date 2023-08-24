import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangsComponent } from './langs/langs.component';
import { TranslateModule } from '@ngx-translate/core';
import { NotificationsComponent } from './notifications/notifications.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppSaveButtonComponent } from './buttons/app-save-button/app-save-button.component';
import { AppCancelButtonComponent } from './buttons/app-cancel-button/app-cancel-button.component';

const components = [
  LangsComponent,
  NotificationsComponent,
  AppSaveButtonComponent,
  AppCancelButtonComponent,
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
})
export class SharedComponentsModule {}
