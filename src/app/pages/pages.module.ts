import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { AdminModule } from './admin/admin.module';
import { SharedComponentsModule } from '../components/shared/sharedComponents.module';
import { TranslateModule } from '@ngx-translate/core';
import { SuperAdminComponentsModule } from '../components/super-admin/superAdminComponents.module';





@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminModule,
    SharedComponentsModule,
    TranslateModule,
    SuperAdminComponentsModule
  ]
})
export class PagesModule { }
