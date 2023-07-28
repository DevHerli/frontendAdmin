import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../shared/dashboard/dashboard.component';
import { SuperDashboardComponent } from './super-dashboard/super-dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { ApisComponent } from './apis/apis.component';




const routes: Routes = [
{ path: 'super-dash', component: DashboardComponent},
{ path: 'superDashboard', component: SuperDashboardComponent},
{ path: 'categorias', component: CategoriesComponent},
{ path: 'apis', component: ApisComponent},

{ path: '', redirectTo: '/superDashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
