import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { error } from 'console';
import { Http2ServerRequest } from 'http2';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';

@Controller('user')
export class UserController {
    constructor(private userService: UsersService) { }

    @Get('')
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/username/:username')
    getUserByUsername(@Param('username') uname: string) {
        const user = this.userService.getUserByUsername(uname);

        return user ? new SerializedUser(user) : 'no user with this username found'
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/id/:id')
    getById(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.getUserById(id);

        return user ? new SerializedUser(user) : new HttpException('no user with id', HttpStatus.BAD_REQUEST);
    }

}
