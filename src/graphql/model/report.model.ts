import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ReportType } from 'src/graphql/type/report.type';

@Entity({ name: 'stockin' })
@ObjectType()
export class Stockin {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'enum', enum: ReportType, nullable: true })
  @Field(() => ReportType, { nullable: true })
  reportType: ReportType;

  @Column({ nullable: true })
  @Field({ nullable: true })
  generatedDate: Date;
}
