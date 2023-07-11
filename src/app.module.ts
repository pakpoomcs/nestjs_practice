import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { CustomersController } from './customers/controller/customers/customers.controller';
import { CustomersService } from './customers/services/customers/customers.service';
import { UserController } from './users/controllers/user/user.controller';
import { UsersService } from './users/services/users/users.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';

@Module({
  imports: [CustomersModule, UsersModule, TypeOrmModule.forRoot({ type: 'mysql', host: 'localhost', port: 3306, username: 'root', password: '103079', database: 'tutorial_db', entities: entities, synchronize: true })],
  controllers: [CustomersController, UserController],
  providers: [CustomersService, UsersService],
})
export class AppModule { }
