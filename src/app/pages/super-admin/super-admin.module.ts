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
import { CountriesComponent } from './general/countries/countries.component';
import { UserComponent } from './users/user/user.component';
import { SubscriberComponent } from './subscribers/subscriber/subscriber.component';




@NgModule({
  declarations: [
    SuperDashboardComponent,
    CategoriesComponent,
    ApisComponent,
    CitiesComponent,
    CountriesComponent,
    UserComponent,
    SubscriberComponent,

  ],
  exports: [
    CategoriesComponent,
    SuperDashboardComponent,
    CitiesComponent,
    CountriesComponent,
    UserComponent,
    SubscriberComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedComponentsModule,
    SuperAdminComponentsModule,
    TranslateModule,
    CategoriesModule,
    DashboardModule
  ]
})
export class SuperAdminModule { }
