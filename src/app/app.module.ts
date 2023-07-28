import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { AdminModule } from './pages/admin/admin.module';
import { SuperAdminModule } from './pages/super-admin/super-admin.module';

import { AppComponent } from './app.component';
import { SharedComponentsModule } from './components/shared/sharedComponents.module';
import { ReactiveFormsModule } from '@angular/forms';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    SuperAdminModule,
    HttpClientModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
