import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
  id: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  first_name: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  last_name: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  participation: Number;
}
