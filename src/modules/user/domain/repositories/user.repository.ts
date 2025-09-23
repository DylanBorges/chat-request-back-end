import { UserEntity } from "../entities/user.entity";
import { IUserRepositoryFilters } from "../interfaces/user-repository-filters";

export abstract class UserRepository {
  abstract findAllUsers(
    limit?: number, 
    page?: number,
    filters?: IUserRepositoryFilters,
  ): Promise<Omit<UserEntity, 'password'>>;

  abstract findUserById(id: string): Promise<Omit<UserEntity, 'password'>>;

  abstract createUser(
    name: string,
    email: string,
    cpf: string,
    password: string,
  ): Promise<Omit<UserEntity, 'password'>>;

  abstract updateUser(
    user: UserEntity,
    values: {[key in keyof UserEntity]?: UserEntity[key]},
  ): Promise<Omit<UserEntity, 'password'>>;

  abstract deleteUSer(id: string): Promise<void>;

  abstract validcateCredentials(email: string, password: string): Promise<boolean>;
}