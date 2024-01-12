import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUserPermissionsContainerComponent } from './app-user-permissions-container/app-user-permissions-container.component';
import { AppUserPermissionsAddFormComponent } from './app-user-permissions-add-form/app-user-permissions-add-form.component';
import { AppUserPermissionsEditFormComponent } from './app-user-permissions-edit-form/app-user-permissions-edit-form.component';



@NgModule({
  declarations: [
    AppUserPermissionsContainerComponent,
    AppUserPermissionsAddFormComponent,
    AppUserPermissionsEditFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserPermissionsModule { }
