import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAdminComponent } from './sidebar/menu-admin/menu-admin.component';
import { MenuSuperAdminComponent } from './sidebar/menu-super-admin/menu-super-admin.component';
import { MenuInterfacesComponent } from './sidebar/menu-interfaces/menu-interfaces.component';
import { MenuKardexComponent } from './sidebar/menu-kardex/menu-kardex.component';
import { MenuTicketsComponent } from './sidebar/menu-tickets/menu-tickets.component';


const routes: Routes = [
{ path: 'menu-superadmin', component: MenuSuperAdminComponent, outlet: 'menu' },
{ path: 'menu-admin', component: MenuAdminComponent, outlet: 'menu' },
{ path: 'menu-interfaces', component: MenuInterfacesComponent, outlet: 'menu' },
{ path: 'menu-kardex', component: MenuKardexComponent, outlet: 'menu' },
{ path: 'menu-tickets', component: MenuTicketsComponent, outlet: 'menu' },
{ path: '', redirectTo: '/home(menu:menu-admin)', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
