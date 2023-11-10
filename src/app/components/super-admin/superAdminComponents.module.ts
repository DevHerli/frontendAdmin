import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { SharedComponentsModule } from '../shared/sharedComponents.module';

import { CategoryFormsService } from 'src/app/data/services/category-forms.service';
import { AppCategoryFormComponent } from './categories/category/app-category-form/app-category-form.component';
import { AppCategoryListComponent } from './categories/category/app-category-list/app-category-list.component';
import { AppSubcategoryListComponent } from './categories/subcategory/app-subcategory-list/app-subcategory-list.component';
import { AppSubcategoryFormComponent } from './categories/subcategory/app-subcategory-form/app-subcategory-form.component';
import { AppSpecialityFormComponent } from './categories/speciality/app-speciality-form/app-speciality-form.component';
import { AppSpecialityListComponent } from './categories/speciality/app-speciality-list/app-speciality-list.component';
import { AppCategoryContainerComponent } from './categories/category/app-category-container/app-category-container.component';
import { AppSubcategoryContainerComponent } from './categories/subcategory/app-subcategory-container/app-subcategory-container.component';
import { AppCategoryAddFormComponent } from './categories/category/app-category-add-form/app-category-add-form.component';
import { CountCategoriesComponent } from './dashboard/categoriesBusiness/count-categories/count-categories.component';
import { CountSubcategoriesComponent } from './dashboard/categoriesBusiness/count-subcategories/count-subcategories.component';
import { CountSpecialityComponent } from './dashboard/categoriesBusiness/count-speciality/count-speciality.component';

const components = [
  AppCategoryFormComponent,
  AppCategoryListComponent,
  AppSubcategoryListComponent,
  AppSubcategoryFormComponent,
  AppSpecialityFormComponent,
  AppSpecialityListComponent,
  AppCategoryContainerComponent,
  AppSubcategoryContainerComponent,
  AppCategoryAddFormComponent,
  CountCategoriesComponent,
  CountSubcategoriesComponent,
  CountSpecialityComponent
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
    NgxPaginationModule
  ],
  providers: [CategoryFormsService],
})
export class SuperAdminComponentsModule { }
