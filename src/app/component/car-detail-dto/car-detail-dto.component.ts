import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css']
})
export class CarDetailDtoComponent implements OnInit {
  carsDetails:CarDetailDto[]=[];
  dataLoaded=false;
  constructor(private carDetailDtoService:CarDetailDtoService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

        this.getCarDetailDtos();
    
  }
  getCarDetailDtos() {
    this.carDetailDtoService.getCarDetails().subscribe(response=>{
      this.carsDetails=response.data;
      this.dataLoaded=true;
    });
  }

  getCarDetailsByCarId(carId:number){
    this.carDetailDtoService.getCarDetails().subscribe(response => {
      this.carsDetails = response.data;
    });
  }

}
