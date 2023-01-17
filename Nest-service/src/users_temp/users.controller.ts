import { Controller , Get, Post, Body} from '@nestjs/common';
import { User } from './Class/users.interface';
import { UsersService } from './users.service';
// import { AppService } from 'src/app.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService : UsersService) {}

    @Get()
    findAll() : User[] {
        return this.usersService.findAll();
    }

    @Post()
    createUser(@Body() newUser) {
        this.usersService.create(newUser);
    }
}
 