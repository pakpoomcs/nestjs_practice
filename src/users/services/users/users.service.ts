import { Get, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/index';

@Injectable()
export class UsersService {
    private users: User[] = [{
        id: 1,
        username: 'user1',
        password: '123456'
    }, {
        id: 2,
        username: 'user2',
        password: '789789'
    }, {
        id: 3,
        username: 'user3',
        password: '112233'
    }]


    getAllUsers() {
        return this.users;
    }

    getUserByUsername(uname) {
        return this.users.find(x => x.username == uname);
    }

    getUserById(id) {
        return this.users.find(x => x.id == id);
    }
}
