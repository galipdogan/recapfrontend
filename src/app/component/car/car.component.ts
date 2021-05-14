import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetailsDto } from 'src/app/models/cardetailsdto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  carDetailsDto: CarDetailsDto[] = [];
  cars: Car[] = [];
  colors:Color[]=[];
  brands:Brand[]=[];
  imageUrl="https://localhost:44387/";
  currentCar: Car;
  filterText = '';
  btnClear: boolean = false;
  dataLoaded = false;
  brandId:number;
  colorId:number;
  constructor(
    private carService: CarService,
    private cartService: CartService,
    private colorService:ColorService,
    private brandService:BrandService,
    private activedRoute: ActivatedRoute,
    private router:Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarsByBrandIdAndColorId(params['brandId'], params['colorId']);
      } else if (params['brandId']) {
        this.getCarDetailsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarDetailsByColorId(params['colorId']);
      }else{
        this.getCarDetailsDto();
      }
    });
    this.getColors();
    this.getBrands();
  }

  getCarDetailsDto() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetailsDto = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByBrandId(brandId: number) {
    this.carService.getCarDetailsByBrandId(brandId).subscribe((response) => {
      this.carDetailsDto = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByColorId(colorId: number) {
    this.carService.getCarDetailsByColorId(colorId).subscribe((response) => {
      this.carDetailsDto = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandIdAndColorId(brandId: number, colorId: number) {
    this.carService.getCarDetailsByBrandIdColorId(brandId, colorId)
      .subscribe((response) => {
        this.carDetailsDto = response.data;
        this.dataLoaded = true;
      });
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.carDetailsDto = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.carDetailsDto = response.data;
      this.dataLoaded = true;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  addToCart(car: Car) {
    this.toastrService.success('Sepete eklendi ' + car.carName);
    this.cartService.addToCart(car);
    console.log();
  }

  setCurrentCar(car: Car) {
    this.currentCar = car;
  }

  getCurrentCarClass(car: Car) {
    if (car == this.currentCar) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllCarClass() {
    if (!this.currentCar) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
