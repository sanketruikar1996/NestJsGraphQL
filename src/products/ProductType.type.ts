import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'ProductType ' })
export class ProductType {
  @Field((type) => ID)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  price: string;

  @Field({ nullable: true })
  catogery: string;

  @Field({ nullable: true })
  brand: string;
}
