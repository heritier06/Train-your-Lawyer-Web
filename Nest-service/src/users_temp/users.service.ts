import { Injectable } from '@nestjs/common';
import { User } from './Class/users.interface';

@Injectable()
export class UsersService {
    all_User = [
        {
            id: 1,
            username: 'admin2',
            email: 'admin2@gmail.com',
            password: 'admin2'
        },
        {
            id: 2,
            username: 'admin2',
            email: 'admin2@gmail.com',
            password: 'admin2'
        }
    ];

    findAll() : User[] {
        return this.all_User;
    }

    create(user : User) {
        this.all_User = [...this.all_User, user];
    }
}
