import { UserEntity } from "@user/domain/entities/user.entity";
import { UserRepository } from "@user/domain/repositories/user.repository";

export class CreateUserUseCase {
  constructor (
    private readonly userRepository: UserRepository
  ) {}

  async execute(
    name: string,
    email: string,
    cpf: string,
    password: string
  ): Promise<Omit<UserEntity, 'password'>> {
    try {
      const user = await this.userRepository.createUser(name, email, cpf, password);
      return user;
    } catch (error) {
      throw error;
    }
  }
}