import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailsDto } from '../models/cardetailsdto';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: CarDetailsDto[], filterText: string): CarDetailsDto[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:CarDetailsDto)=>c.carName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
