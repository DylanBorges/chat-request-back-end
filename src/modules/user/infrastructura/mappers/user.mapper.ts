import { UserEntity } from "@user/domain/entities/user.entity";
import { UserModel } from "../models/user.model";

export class UserMapper {
  static toUserEntity(model: UserModel): UserEntity {
    return new UserEntity(
      model.id,
      model.number,
      model.name,
      model.email,
      model.cpf,
      model.password,
      model.createdAt,
      model.updatedAt,
      model.deletedAt
    );
  }
}