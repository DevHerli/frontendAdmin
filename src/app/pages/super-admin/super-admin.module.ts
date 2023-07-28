import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperDashboardComponent } from './super-dashboard/super-dashboard.component';
import { SharedComponentsModule } from 'src/app/components/shared/sharedComponents.module';
import { SuperAdminComponentsModule } from 'src/app/components/super-admin/superAdminComponents.module';
import { CategoriesComponent } from './categories/categories.component';
import { TranslateModule } from '@ngx-translate/core';
import { ApisComponent } from './apis/apis.component';




@NgModule({
  declarations: [
    SuperDashboardComponent,
    CategoriesComponent,
    ApisComponent,

  ],
  exports: [
    CategoriesComponent,
    SuperDashboardComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedComponentsModule,
    SuperAdminComponentsModule,
    TranslateModule
  ]
})
export class SuperAdminModule { }