import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from 'src/app/pages/admin/blank/blank.component';
import { DashboardComponent } from 'src/app/pages/admin/dashboard/dashboard.component';



const routes: Routes = [
{ path: 'admin-dash', component: DashboardComponent},
{ path: 'admin-blank', component: BlankComponent},

{ path: '', redirectTo: '/admin-dash', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
