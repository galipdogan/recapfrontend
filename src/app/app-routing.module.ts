import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailDtoComponent } from './component/car-detail-dto/car-detail-dto.component';
import { CarComponent } from './component/car/car.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent },
  {path:"cars",component:CarComponent },
  // {path:"cars/brand/:brandId",component:CarComponent },
  // {path:"cars/color/:colorId",component:CarComponent },

  {path:"car/details/:carId", component: CarDetailDtoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
