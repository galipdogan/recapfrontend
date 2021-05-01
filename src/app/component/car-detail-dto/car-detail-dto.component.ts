import { BuiltinFunctionCall } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css']
})
export class CarDetailDtoComponent implements OnInit {
  carsDetails:Car[]=[];
  brands:Brand[]=[];
  colors:Color[]=[];
  currentCarDetail:CarDetailDto |null;
  dataLoaded=false;
  filterText="";
  brandNameFilter:"";
  colorNameFilter:"";
  constructor(private carDetailDtoService:CarDetailDtoService,
    private carService: CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

        this.load();
    
  }

  load(){
    this.activatedRoute.params.subscribe(params => {
      if (params['carId']) {
        this.getDetailsByCarId(params['carId']);
      }
    });
    this.getCarDetailsDto();
  }
  
  getCarDetailsDto() {
    this.carService.getCars().subscribe(response=>{
      this.carsDetails=response.data;
      this.dataLoaded=true;
    });
  }

  getDetailsByCarId(carId:number) {
    this.carService.getDetailsByCarId(carId).subscribe((response)=>{
      this.carsDetails=response.data;
      this.dataLoaded=true;
    });
  }

}
