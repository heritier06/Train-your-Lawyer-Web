// import { Controller } from '@nestjs/common';

// @Controller('users')
// export class UsersController {}

import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity/user.entity';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Get()
    findAll() {
        return this.service.getUser(2);
    }

    // @Post()
    // create(@Body() user: User) {
    //     return this.service.createUser(user);
    // }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}
