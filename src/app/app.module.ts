import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './component/brand/brand.component';
import { CarComponent } from './component/car/car.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ColorComponent } from './component/color/color.component';
import { NaviComponent } from './component/navi/navi.component';
import { RentalComponent } from './component/rental/rental.component';
import { UserComponent } from './component/user/user.component';
import { CarDetailDtoComponent } from './component/car-detail-dto/car-detail-dto.component';
import { RentalDetailDtoComponent } from './component/rental-detail-dto/rental-detail-dto.component';



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
    CarDetailDtoComponent,
    RentalDetailDtoComponent,

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
