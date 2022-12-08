import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    email:string;

    @Column({ length: 25 }) 
    password:string;

    @Column() 
    year:number;

    @Column() 
    tepitechman:number;
}