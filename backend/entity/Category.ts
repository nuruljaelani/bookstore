import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Product } from "./Product"

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToMany(type => Product)
    @JoinTable()
    products: Product[]

}