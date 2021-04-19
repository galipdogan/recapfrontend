import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44387/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<CarResponseModel> {
    let newPath=this.apiUrl+"cars/getall"
    return this.httpClient.get<CarResponseModel>(newPath);
  }

  getdetail(): Observable<CarResponseModel> {
    let newPath=this.apiUrl+"cars/getdetail"
    return this.httpClient.get<CarResponseModel>(newPath);
  }
}
