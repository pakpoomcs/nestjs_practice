import { IsNotEmpty, IsNumberString } from "class-validator";

export class CreateAddressDto {
    @IsNotEmpty()
    line1: string;

    line2?: string;

    zipcode: string;

    @IsNotEmpty()
    city: string;
    country: string;



}