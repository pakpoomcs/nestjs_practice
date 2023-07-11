import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumberString, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./createAddress.dto";

export class CreateCustomerDto {
    @IsEmail()
    email: string;

    @IsNumberString()
    @IsNotEmpty()
    id: number;

    @IsNumberString()
    sex: number;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CreateAddressDto)
    address: CreateAddressDto;
}