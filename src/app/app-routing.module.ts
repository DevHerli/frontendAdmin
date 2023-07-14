import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './pages/blank/blank.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';




const routes: Routes = [
  // {
  //   path: 'pages',
  //   loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  // },
  // {
  //   path: '**',
  //   redirectTo: 'pages'
  // }
    {path: 'dashboard', component: DashboardComponent},
    {path: 'blank', component: BlankComponent},



    {path: '**', redirectTo: 'dashboard'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
