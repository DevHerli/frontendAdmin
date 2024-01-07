import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { SharedComponentsModule } from '../shared/sharedComponents.module';
import { CategoriesModule } from './categories/categories.module';
import { CitiesModule } from './general/cities/cities.module';


const components = [

  ]


@NgModule({
  declarations: [

  ],
  exports: [

  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CategoriesModule,
    CitiesModule
  ],

})
export class SuperAdminComponentsModule { }
