import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFormsBusinessContainerComponent } from './formsBusiness/app-forms-business-container/app-forms-business-container.component';
import { AppHealthMenuComponent } from './formsBusiness/health/app-health-menu/app-health-menu.component';
import { AppSpecialtiesMenuComponent } from './formsBusiness/health/specialties/app-specialties-menu/app-specialties-menu.component';
import { AppPharmacyContainerComponent } from './formsBusiness/health/pharmacy/app-pharmacy-container/app-pharmacy-container.component';
import { AppSpecialtiesContainerComponent } from './formsBusiness/health/specialties/app-specialties-container/app-specialties-container.component';
import { AppLaboratoriesContainerComponent } from './formsBusiness/health/laboratories/app-laboratories-container/app-laboratories-container.component';
import { AppHospitalsContainerComponent } from './formsBusiness/health/hospitals/app-hospitals-container/app-hospitals-container.component';
import { AppDoctorsContainerComponent } from './formsBusiness/health/specialties/doctors/app-doctors-container/app-doctors-container.component';
import { AppDentistContainerComponent } from './formsBusiness/health/specialties/dentist/app-dentist-container/app-dentist-container.component';
import { AppCardiologistsContainerComponent } from './formsBusiness/health/specialties/cardiologists/app-cardiologists-container/app-cardiologists-container.component';
import { AppRestaurantContainerComponent } from './formsBusiness/restaurants/app-restaurant-container/app-restaurant-container.component';
import { AppPubsContainerComponent } from './formsBusiness/pubs/app-pubs-container/app-pubs-container.component';
import { AppServicesContainerComponent } from './formsBusiness/services/app-services-container/app-services-container.component';
import { AppJobsContainerComponent } from './formsBusiness/jobs/app-jobs-container/app-jobs-container.component';
import { AppEventsContainerComponent } from './formsBusiness/events/app-events-container/app-events-container.component';
import { AppShopsContainerComponent } from './formsBusiness/shops/app-shops-container/app-shops-container.component';

const components = [
  AppFormsBusinessContainerComponent,
  AppHealthMenuComponent
]

@NgModule({
  declarations: [
    components,
    AppSpecialtiesMenuComponent,
    AppPharmacyContainerComponent,
    AppSpecialtiesContainerComponent,
    AppLaboratoriesContainerComponent,
    AppHospitalsContainerComponent,
    AppDoctorsContainerComponent,
    AppDentistContainerComponent,
    AppCardiologistsContainerComponent,
    AppRestaurantContainerComponent,
    AppPubsContainerComponent,
    AppServicesContainerComponent,
    AppJobsContainerComponent,
    AppEventsContainerComponent,
    AppShopsContainerComponent,
  ],
  exports:  [
    components
  ],
  imports: [
    CommonModule
  ]
})
export class BusinessModule { }
