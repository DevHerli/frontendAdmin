import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangsComponent } from './langs/langs.component';
import { TranslateModule } from '@ngx-translate/core';
import { NotificationsComponent } from './notifications/notifications.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppSaveButtonComponent } from './buttons/app-save-button/app-save-button.component';
import { AppCancelButtonComponent } from './buttons/app-cancel-button/app-cancel-button.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { AppLoadingSpinnerComponent } from './app-loading-spinner/app-loading-spinner.component';

const components = [
  LangsComponent,
  NotificationsComponent,
  AppSaveButtonComponent,
  AppCancelButtonComponent,
  SpinnerComponent,
  PaginatorComponent,
  AppLoadingSpinnerComponent,
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
})
export class SharedComponentsModule {}
