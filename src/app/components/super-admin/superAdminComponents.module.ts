import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CategoriaComponent } from './categorias/categoria/categoria.component';
import { AddCategoriaComponent } from './categorias/add-categoria/add-categoria.component';
import { SharedComponentsModule } from '../shared/sharedComponents.module';
import { AppAddSubcategoryFormComponent } from './categorias/app-add-subcategory-form/app-add-subcategory-form.component';
import { AppAddSpecialityFormComponent } from './categorias/app-add-speciality-form/app-add-speciality-form.component';
import { CategoryFormsService } from 'src/app/data/services/category-forms.service';

const components = [
  CategoriaComponent,
  AddCategoriaComponent,
  AppAddSubcategoryFormComponent,
  AppAddSpecialityFormComponent,
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ],
  providers: [CategoryFormsService],
})
export class SuperAdminComponentsModule {}
