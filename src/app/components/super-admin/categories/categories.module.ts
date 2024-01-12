import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { AppSubcategoryAddFormComponent } from './subcategory/app-subcategory-add-form/app-subcategory-add-form.component';
import { AppSubcategoryEditFormComponent } from './subcategory/app-subcategory-edit-form/app-subcategory-edit-form.component';
import { AppSpecialityEditFormComponent } from './speciality/app-speciality-edit-form/app-speciality-edit-form.component';
import { AppSpecialityAddFormComponent } from './speciality/app-speciality-add-form/app-speciality-add-form.component';

const components = [
  AppCategoryContainerComponent,
  AppSubcategoryContainerComponent,
  AppCategoryAddFormComponent,
  AppCategoryEditFormComponent,
  AppSpecialityContainerComponent,
  AppSubcategoryAddFormComponent,
  AppSubcategoryEditFormComponent,
  AppSpecialityEditFormComponent,
  AppSpecialityAddFormComponent

]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    TranslateModule

  ], exports: [components],
  providers: [CategoryFormsService],
})
export class CategoriesModule { }
