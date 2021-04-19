import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDtoResponseModel } from '../models/rentalDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentaldetaildtoService {
  apiUrl = 'https://localhost:44387/api/rentals/getdetail';
  constructor(private httpClient: HttpClient) { }

  getRentalDetails():Observable<RentalDetailDtoResponseModel>{
    return this.httpClient.get<RentalDetailDtoResponseModel>(this.apiUrl);
  }
}
