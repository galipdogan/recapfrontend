import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDtoResponseModel } from '../models/cardetaildtoResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailDtoService {
  apiUrl = 'https://localhost:44387/api/cars/getdetail';
  
  constructor(private httpClient: HttpClient) {}

  getDetail(): Observable<CarDetailDtoResponseModel> {
    return this.httpClient.get<CarDetailDtoResponseModel>(this.apiUrl);
  }
}
