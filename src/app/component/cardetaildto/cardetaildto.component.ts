import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { CarDetailDto } from 'src/app/models/cardetaildto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailDtoService } from 'src/app/services/cardetaildto.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-cardetaildto',
  templateUrl: './cardetaildto.component.html',
  styleUrls: ['./cardetaildto.component.css'],
})
export class CardetaildtoComponent implements OnInit {
  carsDetails: CarDetailDto[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  dataLoaded = false;

  constructor(
    private carDetailDtoService: CarDetailDtoService,
    private colorService: ColorService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {}
  getDetail() {
    this.carDetailDtoService.getDetail().subscribe((response) => {
      this.carsDetails = response.data;
      this.dataLoaded = true;
    });
  }
}
