import { CreateUserInput } from '@application/dto/create-user.input';
import { UpdateUserInput } from '@application/dto/update-user.input';
import { UsersService } from '@application/services/users.service';
import { User } from '@domain/entities/entities/user.entity';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
    // Verifica a soma atual de participation
    const users = await this.usersService.findAll();

    const currentSum = users.reduce((acc, user) => acc + user.participation, 0);
    const newSum = currentSum + createUserInput.participation;

    if (newSum > 100) {
      throw new Error('A soma total de participation não pode ultrapassar 100');
    }

    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'findAll' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => String }) id: string) {
    return this.usersService.remove(id);
  }
}
