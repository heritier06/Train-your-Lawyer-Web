import { TimestampEntities } from 'src/Generics/times.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, IsNull } from 'typeorm';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';


@Entity()
export class User extends TimestampEntities{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ 
        
    })
    email:string;

    @Column({ 
        length: 25 
    }) 
    password:string;

    @Column({

    }) 
    nom:string;

    @Column({

    }) 
    prenom:string;

    @Column({
        
    }) 
    year:number;
}

export class newUser {
 
    @IsNotEmpty()
    @IsString()
    email:string;

    @IsNotEmpty()
    @IsString()
    password:string;

    @IsNotEmpty()
    @IsString()
    nom:string;

    @IsNotEmpty()
    @IsString()
    prenom:string;

    @IsNotEmpty()
    @IsNumber()
    year:number;
}
