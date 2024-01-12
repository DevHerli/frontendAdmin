import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUsersContainerComponent } from './app-users-container/app-users-container.component';
import { AppUsersAddFormComponent } from './app-users-add-form/app-users-add-form.component';
import { AppUsersEditFormComponent } from './app-users-edit-form/app-users-edit-form.component';



@NgModule({
  declarations: [
    AppUsersContainerComponent,
    AppUsersAddFormComponent,
    AppUsersEditFormComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
