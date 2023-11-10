import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCategoryFormComponent } from './category/app-category-form/app-category-form.component';
import { AppCategoryListComponent } from './category/app-category-list/app-category-list.component';
import { AppSubcategoryListComponent } from './subcategory/app-subcategory-list/app-subcategory-list.component';
import { AppSubcategoryFormComponent } from './subcategory/app-subcategory-form/app-subcategory-form.component';
import { AppSpecialityFormComponent } from './speciality/app-speciality-form/app-speciality-form.component';
import { AppSpecialityListComponent } from './speciality/app-speciality-list/app-speciality-list.component';
import { AppCategoryContainerComponent } from './category/app-category-container/app-category-container.component';
import { AppSubcategoryContainerComponent } from './subcategory/app-subcategory-container/app-subcategory-container.component';
import { AppCategoryAddFormComponent } from './category/app-category-add-form/app-category-add-form.component';
import { SharedComponentsModule } from '../../shared/sharedComponents.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';
import { CategoryFormsService } from 'src/app/data/services/category-forms.service';
import { AppCategoryEditFormComponent } from './category/app-category-edit-form/app-category-edit-form.component';
import { AppSpecialityContainerComponent } from './speciality/app-speciality-container/app-speciality-container.component';


const components = [
  AppCategoryFormComponent,
  AppCategoryListComponent,
  AppSubcategoryListComponent,
  AppSubcategoryFormComponent,
  AppSpecialityFormComponent,
  AppSpecialityListComponent,
  AppCategoryContainerComponent,
  AppSubcategoryContainerComponent,
  AppCategoryAddFormComponent
]

@NgModule({
  declarations: [components, AppCategoryEditFormComponent, AppSpecialityContainerComponent],
  imports: [
    CommonModule,
    SharedComponentsModule, ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    TranslateModule

  ], exports: [components],
  providers: [CategoryFormsService],
})
export class CategoriesModule { }
