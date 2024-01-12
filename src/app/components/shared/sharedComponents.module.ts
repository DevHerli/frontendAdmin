import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangsComponent } from './langs/langs.component';
import { TranslateModule } from '@ngx-translate/core';
import { NotificationsComponent } from './notifications/notifications.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppSaveButtonComponent } from './buttons/app-save-button/app-save-button.component';
import { AppCancelButtonComponent } from './buttons/app-cancel-button/app-cancel-button.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { AppLoadingSpinnerComponent } from './app-loading-spinner/app-loading-spinner.component';
import { AppCategoryDropdownComponent } from './dropdowns/app-category-dropdown/app-category-dropdown.component';
import { AppCleanButtonComponent } from './buttons/app-clean-button/app-clean-button.component';
import { AppGeneralButtonsComponent } from './buttons/app-general-buttons/app-general-buttons.component';
import { AppCardNumberComponent } from './cards/app-card-number/app-card-number.component';
import { AppModalContainerComponent } from './modal/app-modal-container/app-modal-container.component';
import { AppModalActionButtonComponent } from './modal/app-modal-action-button/app-modal-action-button.component';
import { AppSwitchToggleComponent } from './app-switch-toggle/app-switch-toggle.component';

const components = [
  LangsComponent,
  NotificationsComponent,
  AppSaveButtonComponent,
  AppCancelButtonComponent,
  SpinnerComponent,
  PaginatorComponent,
  AppLoadingSpinnerComponent,
  AppCategoryDropdownComponent,
  AppCleanButtonComponent,
  AppGeneralButtonsComponent,
  AppCardNumberComponent,
  AppModalContainerComponent,
  AppModalActionButtonComponent,
  AppSwitchToggleComponent
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [
    CommonModule, 
    TranslateModule, 
    ReactiveFormsModule, 
    FormsModule
  ],
})
export class SharedComponentsModule { }
