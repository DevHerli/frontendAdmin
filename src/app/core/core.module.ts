import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { MainContainerComponent } from './main-container/main-container.component';
import { CoreRoutingModule } from './core-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuAdminComponent } from './sidebar/menu-admin/menu-admin.component';
import { MenuInterfacesComponent } from './sidebar/menu-interfaces/menu-interfaces.component';
import { MenuSuperAdminComponent } from './sidebar/menu-super-admin/menu-super-admin.component';
import { MenuKardexComponent } from './sidebar/menu-kardex/menu-kardex.component';
import { MenuTicketsComponent } from './sidebar/menu-tickets/menu-tickets.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainContainerComponent,
    SidebarComponent,
    MenuAdminComponent,
    MenuInterfacesComponent,
    MenuSuperAdminComponent,
    MenuKardexComponent,
    MenuTicketsComponent
  ],
  exports:[
    HeaderComponent,
    MainContainerComponent,
    SidebarComponent,
    MenuAdminComponent,
    MenuInterfacesComponent,
    MenuSuperAdminComponent,
    MenuKardexComponent,
    MenuTicketsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
