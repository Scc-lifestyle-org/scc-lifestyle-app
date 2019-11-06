import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResturantsComponent } from './resturants/resturants.component';
import { CompaniesComponent } from './companies/companies.component';

@NgModule({
  declarations: [
    AppComponent,
    ResturantsComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
