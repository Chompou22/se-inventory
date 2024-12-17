import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from './product.model';
import { Supplier } from './supplier.model';

@Entity({ name: 'stockin' })
@ObjectType()
export class Stockin {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  productName: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  @Field({ nullable: true })
  price: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  quantity: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  importDate: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  expireDate: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  @Field({ nullable: true })
  total: number;

  @ManyToOne(() => Product)
  @Field({ nullable: true })
  ProductId?: Product;

  @ManyToOne(() => Supplier)
  @Field({ nullable: true })
  SupplierId?: Supplier;
}
