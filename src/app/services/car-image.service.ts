import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailsDto } from '../models/cardetailsdto';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';
import { ResponseModel } from '../models/ResponseModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = 'https://localhost:44387/api/';
  constructor(private httpClient: HttpClient) {}

  add(image: File, carImage: CarImage): Observable<ResponseModel> {
    const Image = new FormData();

    Image.append('file', image);

    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(newPath, Image && carImage);
  }

  getCarImages():Observable<ListResponseModel<CarImage>> {
    return this.httpClient
      .get<ListResponseModel<CarImage>>(this.apiUrl + '/carimages/getallimages');
  }

  getImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getimagesbycarid?carid="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }  
}
