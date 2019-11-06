import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResturantsComponent } from './resturants/resturants.component';
import { CompaniesComponent } from './companies/companies.component';
import { OutdoorEventsComponent } from './outdoor-events/outdoor-events.component';
import { PlacesToStayComponent } from './places-to-stay/places-to-stay.component';
import { PublicTransportationComponent } from './public-transportation/public-transportation.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { TouristSpotsComponent } from './tourist-spots/tourist-spots.component';
import { TwentyoneOverComponent } from './twentyone-over/twentyone-over.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'resturants', component: ResturantsComponent },
  {path: 'companies', component: CompaniesComponent},
  {path: 'outdoor-events', component: OutdoorEventsComponent},
  {path: 'places-to-stay', component: PlacesToStayComponent},
  {path: 'public-transportation', component: PublicTransportationComponent},
  {path: 'shopping', component: ShoppingComponent},
  {path: 'tourist-spots', component: TouristSpotsComponent},
  {path: '21&over', component: TwentyoneOverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
