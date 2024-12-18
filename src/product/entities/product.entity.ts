import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product' })
@ObjectType()
export class Product {
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
}
