import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './component/brand/brand.component';
import { CarComponent } from './component/car/car.component';
import { CardetaildtoComponent } from './component/cardetaildto/cardetaildto.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ColorComponent } from './component/color/color.component';
import { NaviComponent } from './component/navi/navi.component';
import { RentalComponent } from './component/rental/rental.component';
import { RentaldetaildtoComponent } from './component/rentaldetaildto/rentaldetaildto.component';
import { UserComponent } from './component/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    RentalComponent,
    NaviComponent,
    CustomerComponent,
    UserComponent,
    CardetaildtoComponent,
    RentaldetaildtoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
