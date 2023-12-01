import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlankComponent } from './blank/blank.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared/sharedComponents.module';
import { AdminComponentsModule } from 'src/app/components/admin/adminComponents.module';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardModule } from 'src/app/components/super-admin/dashboard/dashboard.module';



@NgModule({
  declarations: [
    DashboardComponent,
    BlankComponent
  ],
  exports: [
    DashboardComponent,
    BlankComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedComponentsModule,
    AdminComponentsModule,
    TranslateModule
  ]
})
export class AdminModule { }
