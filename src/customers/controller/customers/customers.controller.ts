import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';
import { CreateCustomerDto } from 'src/dtos/createCustomer.dto';

@Controller('customers')
export class CustomersController {

    constructor(private customersService: CustomersService) { }

    @Get(':id')
    searchCustomerById(@Param('id', ParseIntPipe) id: number) {
        const customer = this.customersService.findCustomerById(id);
        if (customer) return customer;
        else throw new HttpException('Customer Not Found.', HttpStatus.BAD_REQUEST);
    }

    @Get('')
    getAllCustomers() {
        return this.customersService.getAllCustomers();
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        return this.customersService.createCustomer(createCustomerDto)
    }
}
