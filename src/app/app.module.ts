import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



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
    SweetAlert2Module,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,


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
