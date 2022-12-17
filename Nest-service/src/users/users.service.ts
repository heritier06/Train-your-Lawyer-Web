import { Injectable } from '@nestjs/common';

// @Injectable()
// export class UsersService {}

//import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { newUser, User } from './user.entity/user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async getUsers(user: User): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["email", "password", "year", "nom", "prenom"],
            where: [{ "id": _id }]
        });
    }

    async checkSubscribed(_email, _password): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["email", "password", "year", "nom", "prenom"],
            where: [{ "email": _email, "password": _password}]
        });
    }

    async createUser(user: newUser): Promise<User> {
        return await this.usersRepository.save(user);
    }

    async updateUser(user: User) {
        this.usersRepository.save(user)
    }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }
}