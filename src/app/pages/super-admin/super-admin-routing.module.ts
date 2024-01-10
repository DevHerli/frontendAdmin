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
import { FormsComponent } from './business/forms/forms.component';
import { TypesPermitsComponent } from './general/types-permits/types-permits.component';
import { PermitsBusinessComponent } from './business/permits-business/permits-business.component';
import { PermitsUsersComponent } from './users/permits-users/permits-users.component';
import { MembershipTypeComponent } from './general/membership-type/membership-type.component';




const routes: Routes = [
{ path: 'super-dash', component: DashboardComponent},
{ path: 'superDashboard', component: SuperDashboardComponent},
{ path: 'categorias', component: CategoriesComponent},
{ path: 'ciudades', component: CitiesComponent},
{ path: 'usuario', component: UserComponent},
{ path: 'tipo-usuario', component: TypeUserComponent},
{ path: 'suscriptor', component: SubscriberComponent},
{ path: 'apis', component: ApisComponent},
{ path: 'catalogo-formularios', component: FormsComponent},
{ path: 'tipos-permisos', component: TypesPermitsComponent},
{ path: 'permisos-negocios', component: PermitsBusinessComponent},
{ path: 'permisos-usuarios', component: PermitsUsersComponent},
{ path: 'tipo-membresia', component: MembershipTypeComponent},

{ path: '', redirectTo: '/superDashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
