import { CarDetailDto } from "./cardetaildto";
import { ResponseModel } from "./responseModel";

export interface CarDetailDtoResponseModel extends ResponseModel{
data:CarDetailDto[];
}