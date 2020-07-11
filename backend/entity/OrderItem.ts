import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity()
export class OrderItem {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    quantity: number

    @ManyToOne(type => Order, order => order.OrderItems)
    order: Order

    @OneToOne(type => Product)
    @JoinColumn()
    product: Product

}