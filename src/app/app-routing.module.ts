import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabyComponent } from './baby/baby.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { BabyVaccineComponent } from './baby-vaccine/baby-vaccine.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:'baby',component:BabyComponent
  },
  {
    path:'vaccine',component:VaccineComponent
  },
  {
    path:'baby-vaccine',component:BabyVaccineComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'update/:id',component:UpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
