import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResturantsComponent } from './resturants/resturants.component';
import { CompaniesComponent } from './companies/companies.component';


const routes: Routes = [
  {path: 'resturants', component: ResturantsComponent },
  {path: 'companies', component: CompaniesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
