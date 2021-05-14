import { BuiltinFunctionCall } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetailsDto } from 'src/app/models/cardetailsdto';
import { Color } from 'src/app/models/color';

import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css'],
})
export class CarDetailDtoComponent implements OnInit {
  carsDetailsDto: CarDetailsDto[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  currentCarDetail: CarDetailsDto | null;
  dataLoaded = false;
  filterText = '';
  brandNameFilter: '';
  colorNameFilter: '';
  constructor(
    private carService: CarService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsByCarId(params['carId']);
      }else{
        this.getCarDetailsDto();
      }
    });
  }
  getCarDetailsDto() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carsDetailsDto = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByBrandId(brandId: number) {
    this.carService.getCarDetailsByBrandId(brandId).subscribe((response) => {
      this.carsDetailsDto = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByColorId(colorId: number) {
    this.carService.getCarDetailsByColorId(colorId).subscribe((response) => {
      this.carsDetailsDto = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByCarId(carId: number) {
    this.carService.getDetailsByCarId(carId).subscribe((response) => {
      this.carsDetailsDto = response.data;
      this.dataLoaded = true;
    });
  }
}
