import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Order } from "./Order";

export enum UserRole {
    ADMIN= "admin",
    USER= "user"
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column("bigint")
    phone: string

    @Column()
    gender: string

    @Column("text")
    address: string;

    @Column()
    image: string;
    Orders: any;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole

    @CreateDateColumn()
    createdDate: Date

    @UpdateDateColumn()
    updatedDate: Date

    @OneToMany(type => Order, order => order.user)
    orders: Order[]

}