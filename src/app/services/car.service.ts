import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44387/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getdetail(): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getdetail"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(branId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/GetCarsByBrandId?branId="+branId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/GetCarsByColorId?branId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getByUnitPrice(min:number,max:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/GetByUnitPrice?dailyprice=>"+min;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  
}
