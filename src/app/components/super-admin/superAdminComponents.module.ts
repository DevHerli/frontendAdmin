import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CategoriaComponent } from './categorias/categoria/categoria.component';
import { AddCategoriaComponent } from './categorias/add-categoria/add-categoria.component';




@NgModule({
  declarations: [
    CategoriaComponent,
    AddCategoriaComponent
  ],
  exports: [
    CategoriaComponent,
    AddCategoriaComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class SuperAdminComponentsModule { }
