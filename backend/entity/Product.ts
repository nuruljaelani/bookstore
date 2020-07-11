import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    publisher: string

    @Column({ type: "text" })
    description: string

    @Column()
    price: number

    @Column()
    status: string

    @Column()
    stock: string

    @Column()
    isbn: string

    @Column()
    weight: number

    @Column()
    thickness: number

    @Column()
    width: string

    @Column()
    hight: string

    @Column()
    image: string

    @CreateDateColumn()
    createdDate: Date

    @UpdateDateColumn()
    updatedDate: Date

}