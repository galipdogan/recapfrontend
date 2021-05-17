import { BuiltinFunctionCall } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetailsDto } from 'src/app/models/cardetailsdto';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { CarImageService } from 'src/app/services/car-image.service';

import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css'],
})
export class CarDetailDtoComponent implements OnInit {
  carDetailsDto: CarDetailsDto;
  cars:CarDetailsDto[]=[];
  carImages:CarImage[]=[];
  imageUrl="https://localhost:44387/";
  Images:string[];
  brands: Brand[] = [];
  colors: Color[] = [];
  currentCarDetail: CarDetailsDto | null;
  dataLoaded = false;
  filterText = '';
  brandNameFilter: '';
  colorNameFilter: '';
  defaultImg="images/default.jpg"
  constructor(
    private carService: CarService,
    private cartService: CartService,
    private carImageService:CarImageService,
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
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByCarId(carId: number) {
    this.carService.getDetailsByCarId(carId).subscribe((response) => {
      this.cars=response.data;
      this.carDetailsDto = response.data[0];
      this.Images=this.carDetailsDto.carImages;
      console.log(carId);
      this.dataLoaded = true;
    });
  }
  
}
