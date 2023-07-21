import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { AdminModule } from './pages/admin/admin.module';
import { SuperAdminModule } from './pages/super-admin/super-admin.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    RouterModule,
    PagesModule,
    AdminModule,
    SuperAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
