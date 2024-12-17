import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'supplier' })
@ObjectType()
export class Supplier {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  supplierName: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  contact: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  address: string;
}
