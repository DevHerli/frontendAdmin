import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from 'src/app/pages/admin/blank/blank.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { SuperDashboardComponent } from './super-dashboard/super-dashboard.component';




const routes: Routes = [
{ path: 'super-dash', component: DashboardComponent},
{ path: 'superDashboard', component: SuperDashboardComponent},
{ path: 'categorias', component: CategoriasComponent},

{ path: '', redirectTo: '/superDashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
