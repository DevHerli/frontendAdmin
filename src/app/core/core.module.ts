import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

import { MainContainerComponent } from './main-container/main-container.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedComponentsModule } from '../components/shared/sharedComponents.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuAdminComponent } from './sidebar/menu-admin/menu-admin.component';
import { MenuInterfacesComponent } from './sidebar/menu-interfaces/menu-interfaces.component';
import { MenuSuperAdminComponent } from './sidebar/menu-super-admin/menu-super-admin.component';
import { MenuKardexComponent } from './sidebar/menu-kardex/menu-kardex.component';
import { MenuTicketsComponent } from './sidebar/menu-tickets/menu-tickets.component';
import { PagesModule } from '../pages/pages.module';
import { FooterComponent } from './footer/footer.component';
import { RouterLinkActive } from '@angular/router';





@NgModule({
  declarations: [
    HeaderComponent,
    MainContainerComponent,
    SidebarComponent,
    MenuAdminComponent,
    MenuInterfacesComponent,
    MenuSuperAdminComponent,
    MenuKardexComponent,
    MenuTicketsComponent,
    FooterComponent
  ],
  exports:[
    HeaderComponent,
    MainContainerComponent,
    SidebarComponent,
    MenuAdminComponent,
    MenuInterfacesComponent,
    MenuSuperAdminComponent,
    MenuKardexComponent,
    MenuTicketsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    PagesModule,
    HttpClientModule,
    TranslateModule,
    SharedComponentsModule,
    RouterLinkActive
  ]
})
export class CoreModule { }
