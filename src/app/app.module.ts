import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './component/brand/brand.component';
import { CarComponent } from './component/car/car.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ColorComponent } from './component/color/color.component';
import { NaviComponent } from './component/navi/navi.component';
import { RentalComponent } from './component/rental/rental.component';
import { UserComponent } from './component/user/user.component';

import { VatAddedPipe } from './pipe/vat-added.pipe';
import { FilterPipe } from './pipe/filter-pipe.pipe';
import { BrandFilterPipe } from './pipe/brand-filter.pipe';
import { ColorFilterPipe } from './pipe/color-filter.pipe';


import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './component/cart-summary/cart-summary.component';
import { CarDetailDtoComponent } from './component/car-detail-dto/car-detail-dto.component';
import { CarsFilterSearchBarComponent } from './component/cars-filter-search-bar/cars-filter-search-bar.component';


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
    VatAddedPipe,
    FilterPipe,
    CartSummaryComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    CarsFilterSearchBarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
