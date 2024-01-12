import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCityContainerComponent } from './app-city-container/app-city-container.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedComponentsModule } from 'src/app/components/shared/sharedComponents.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppCityAddFormComponent } from './app-city-add-form/app-city-add-form.component';
import { AppCityEditFormComponent } from './app-city-edit-form/app-city-edit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
AppCityContainerComponent,
AppCityAddFormComponent,
AppCityEditFormComponent
]

@NgModule({
  declarations: [
    components,
  ],
  exports:[
    components
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SharedComponentsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CitiesModule { }
