import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from '../models/user.model';
import { UserMapper } from '../mappers/user.mapper';
import { UserRepository } from '@user/domain/repositories/user.repository';
import { UserEntity } from '@user/domain/entities/user.entity';
import { IUserRepositoryFilters } from '@user/domain/interfaces/user-repository-filters';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(@InjectModel(UserModel) private readonly userModel: typeof UserModel) { }

  findAllUsers(limit?: number, page?: number, filters?: IUserRepositoryFilters): Promise<Omit<UserEntity, 'password'>> {
    throw new Error('Method not implemented.');
  }

  async findUserById(id: string): Promise<Omit<UserEntity, 'password'>> {
    try {
      const user = await this.userModel.findByPk(id);

      if (!user) {
        throw new Error('User not found');
      }

      return UserMapper.toUserEntity(user);
    } catch (error) {
      throw error;
    }
  }

  async createUser(
    name: string,
    email: string,
    cpf: string,
    password: string
  ): Promise<Omit<UserEntity, 'password'>> {
    try {
      const user = await this.userModel.create({
        name,
        email,
        cpf,
        password
      });
      return UserMapper.toUserEntity(user);
    } catch (error) {
      throw error;
    }
  }

  updateUser(user: UserEntity, values: { [key in keyof UserEntity]?: UserEntity[key]; }): Promise<Omit<UserEntity, 'password'>> {
    throw new Error('Method not implemented.');
  }

  deleteUSer(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  validcateCredentials(email: string, password: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}