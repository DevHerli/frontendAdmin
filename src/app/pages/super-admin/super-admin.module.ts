import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { SuperDashboardComponent } from './super-dashboard/super-dashboard.component';



@NgModule({
  declarations: [
    CategoriasComponent,
    SuperDashboardComponent
  ],
  exports: [
    CategoriasComponent,
    SuperDashboardComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule
  ]
})
export class SuperAdminModule { }
