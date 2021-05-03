import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { CarDetailDtoComponent } from '../car-detail-dto/car-detail-dto.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  currentCar: Car;
  filterText = '';
  dataLoaded = false;

  constructor(
    private carService: CarService,
    private cartService: CartService,
    private carDetailsDtoService: CarDetailDtoService,
    private activedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      }
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
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
