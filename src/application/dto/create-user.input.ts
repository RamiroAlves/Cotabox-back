import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  first_name: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  last_name: string;

  @Field(() => Number, { description: 'Example field (placeholder)' })
  participation: number;
}
