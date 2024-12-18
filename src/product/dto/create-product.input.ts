import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  productName: string;

  @Field()
  price: number;

  @Field({ nullable: true })
  quantity: number;

  @Field({ nullable: true })
  importDate: Date;

  @Field({ nullable: true })
  expireDate: Date;
}
