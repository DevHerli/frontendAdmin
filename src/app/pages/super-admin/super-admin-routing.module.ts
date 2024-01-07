import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../shared/dashboard/dashboard.component';
import { SuperDashboardComponent } from './super-dashboard/super-dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { ApisComponent } from './apis/apis.component';
import { CitiesComponent } from './general/cities/cities.component';
import { UserComponent } from './users/user/user.component';
import { SubscriberComponent } from './subscribers/subscriber/subscriber.component';
import { TypeUserComponent } from './users/type-user/type-user.component';




const routes: Routes = [
{ path: 'super-dash', component: DashboardComponent},
{ path: 'superDashboard', component: SuperDashboardComponent},
{ path: 'categorias', component: CategoriesComponent},
{ path: 'ciudades', component: CitiesComponent},
{ path: 'usuario', component: UserComponent},
{ path: 'tipo-usuario', component: TypeUserComponent},
{ path: 'suscriptor', component: SubscriberComponent},
{ path: 'apis', component: ApisComponent},

{ path: '', redirectTo: '/superDashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
