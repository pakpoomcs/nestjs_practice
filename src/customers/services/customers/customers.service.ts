import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/dtos/createCustomer.dto';
import { Customer } from 'src/types/Customer';

@Injectable()
export class CustomersService {

    private customers: Customer[] = [{ id: 1, name: 'pakpoom', sex: 1, email: 'pakpoom@a.com' }, { id: 2, name: 'kp', sex: 1, email: 'pakpoom@a.com' }, { id: 3, name: 'pa', sex: 2, email: 'pakpoom@a.com' }];

    findCustomer() {
        return {
            id: 1,
            customerName: 'test name',
            createdAt: new Date()
        }
    }

    findCustomerById(id) {
        return this.customers.find(x => x.id == id)
    }

    getAllCustomers() {
        return this.customers;
    }

    createCustomer(customerDetail: CreateCustomerDto) {
        this.customers.push(customerDetail);
        console.log(customerDetail);
        return this.customers;
    }
}
