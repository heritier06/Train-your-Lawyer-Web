import { TimestampEntities } from 'src/Generics/times.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

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