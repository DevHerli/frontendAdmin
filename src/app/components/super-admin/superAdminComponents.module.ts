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
import { AppCategoryFormComponent } from './categories/category/app-category-form/app-category-form.component';
import { AppCategoryListComponent } from './categories/category/app-category-list/app-category-list.component';
import { AppSubcategoryListComponent } from './categories/subcategory/app-subcategory-list/app-subcategory-list.component';
import { AppSubcategoryFormComponent } from './categories/subcategory/app-subcategory-form/app-subcategory-form.component';
import { AppSpecialityFormComponent } from './categories/speciality/app-speciality-form/app-speciality-form.component';
import { AppSpecialityListComponent } from './categories/speciality/app-speciality-list/app-speciality-list.component';
import { AppCategoryContainerComponent } from './categories/category/app-category-container/app-category-container.component';

const components = [
  CategoriaComponent,
  AddCategoriaComponent,
  AppAddSubcategoryFormComponent,
  AppAddSpecialityFormComponent,
  AppCategoryFormComponent, 
  AppCategoryListComponent, 
  AppSubcategoryListComponent, 
  AppSubcategoryFormComponent, 
  AppSpecialityFormComponent, 
  AppSpecialityListComponent,
  AppCategoryContainerComponent
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
