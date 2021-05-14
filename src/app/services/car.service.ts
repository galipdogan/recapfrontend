import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';
import { CarDetailsDto } from '../models/cardetailsdto';
import { SingleResponseModel } from '../models/ResponseModels/singleResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44387/api/';

  constructor(private httpClient: HttpClient) {}

  // getAll(): Observable<ListResponseModel<CarDetailsDto>> {
  //   let newPath = this.apiUrl + 'cars/getall';
  //   return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  // }

  getCarDetails(): Observable<ListResponseModel<CarDetailsDto>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }

  getCarById(carId:number): Observable<SingleResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getall?carId='+carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }
  
  getCarsByBrandId(brandId:number):Observable<ListResponseModel<CarDetailsDto>>{
    let newPath=this.apiUrl+"cars/getcarsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }

  getCarsByColorId(colorId:number):Observable<ListResponseModel<CarDetailsDto>>{
    let newPath=this.apiUrl+"cars/getcarsbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }   
  
  getDetailsByCarId(carId: number): Observable<ListResponseModel<CarDetailsDto>> {
    let newPath = this.apiUrl + 'cars/getdetailsbycarid?carid=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }

  getCarDetailsByBrandIdColorId(brandId: number, colorId: number):
  Observable<ListResponseModel<CarDetailsDto>> {
    let newPath=this.apiUrl+'cars/getcardetailsbrandidandcolorid?brandId=' +
    brandId +'&colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }

  getCarDetailsByColorId(colorId:number):Observable<ListResponseModel<CarDetailsDto>>{
    let newPath=this.apiUrl+"cars/getdetailsbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }  

  getCarDetailsByBrandId(brandId:number):Observable<ListResponseModel<CarDetailsDto>>{
    let newPath=this.apiUrl+"cars/getdetailsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }  

}
