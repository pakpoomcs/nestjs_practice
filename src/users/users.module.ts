import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { UsersService } from './services/users/users.service';

@Module({
    imports: [UsersModule],
    controllers: [UserController],
    providers: [UsersService],
})


export class UsersModule { }
