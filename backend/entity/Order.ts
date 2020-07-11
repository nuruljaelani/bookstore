import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";
import { OrderItem } from "./OrderItem";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    status: string

    @CreateDateColumn()
    createdDate: Date

    @UpdateDateColumn()
    updatedDate: Date

    @ManyToOne(type => User, user => user.Orders)
    user: User
    OrderItems: any;

    @OneToMany(type => OrderItem, orderItem => orderItem.order)
    orderItems: OrderItem[]

}