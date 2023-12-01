import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountCategoriesComponent } from './categoriesBusiness/count-categories/count-categories.component';
import { CountSubcategoriesComponent } from './categoriesBusiness/count-subcategories/count-subcategories.component';
import { CountSpecialityComponent } from './categoriesBusiness/count-speciality/count-speciality.component';

const components = [
  CountCategoriesComponent,
  CountSubcategoriesComponent,
  CountSpecialityComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports: [components]
})
export class DashboardModule { }
