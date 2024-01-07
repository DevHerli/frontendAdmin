import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperDashboardComponent } from './super-dashboard/super-dashboard.component';
import { SharedComponentsModule } from 'src/app/components/shared/sharedComponents.module';
import { SuperAdminComponentsModule } from 'src/app/components/super-admin/superAdminComponents.module';
import { CategoriesComponent } from './categories/categories.component';
import { TranslateModule } from '@ngx-translate/core';
import { ApisComponent } from './apis/apis.component';
import { CategoriesModule } from 'src/app/components/super-admin/categories/categories.module';
import { DashboardModule } from 'src/app/components/super-admin/dashboard/dashboard.module';
import { CitiesComponent } from './general/cities/cities.component';
import { UserComponent } from './users/user/user.component';
import { SubscriberComponent } from './subscribers/subscriber/subscriber.component';
import { CitiesModule } from 'src/app/components/super-admin/general/cities/cities.module';
import { TypeUserComponent } from './users/type-user/type-user.component';

const components = [
  SuperDashboardComponent,
  CategoriesComponent,
  ApisComponent,
  CitiesComponent,
  UserComponent,
  SubscriberComponent,
  TypeUserComponent,
  ]


@NgModule({
  declarations: [
    components
  ],
  exports: [
    components
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedComponentsModule,
    TranslateModule,
    CategoriesModule,
    DashboardModule,
    CitiesModule,
    SuperAdminComponentsModule
  ]
})
export class SuperAdminModule { }
