import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedComponentsModule } from 'src/app/components/shared/sharedComponents.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTypePermissionEditFormComponent } from './app-type-permission-edit-form/app-type-permission-edit-form.component';
import { AppTypePermissionAddFormComponent } from './app-type-permission-add-form/app-type-permission-add-form.component';
import { AppTypePermissionContainerComponent } from './app-type-permission-container/app-type-permission-container.component';

const components = [
  AppTypePermissionEditFormComponent,
  AppTypePermissionAddFormComponent,
  AppTypePermissionContainerComponent
]

@NgModule({
  declarations: [
    components,
  ],
  exports:[
    components
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SharedComponentsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class TypePermissionModule { }
