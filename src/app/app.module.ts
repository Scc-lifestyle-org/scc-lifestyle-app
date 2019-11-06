import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResturantsComponent } from './resturants/resturants.component';
import { CompaniesComponent } from './companies/companies.component';
import { PublicTransportationComponent } from './public-transportation/public-transportation.component';
import { TwentyoneOverComponent } from './twentyone-over/twentyone-over.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { TouristSpotsComponent } from './tourist-spots/tourist-spots.component';
import { PlacesToStayComponent } from './places-to-stay/places-to-stay.component';
import { OutdoorEventsComponent } from './outdoor-events/outdoor-events.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    ResturantsComponent,
    CompaniesComponent,
    PublicTransportationComponent,
    TwentyoneOverComponent,
    ShoppingComponent,
    TouristSpotsComponent,
    PlacesToStayComponent,
    OutdoorEventsComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
