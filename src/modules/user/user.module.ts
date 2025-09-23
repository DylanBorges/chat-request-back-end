import { DataBaseModule } from "@database/database.module";
import { Module } from "@nestjs/common";
import { UserModel } from "./infrastructura/models/user.model";
import { UserController } from "./presentation/controller/user.controller";
import { UserRepository } from "./domain/repositories/user.repository";
import { UserRepositoryImpl } from "./infrastructura/repositories/user.repository.impl";
import { CreateUserUseCase } from "./application/use-case/create-user.use-case";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  imports: [
    DataBaseModule,
    SequelizeModule.forFeature([UserModel]),
  ],
  controllers: [UserController],
  providers: [
    {
      provide: UserRepository,
      useClass: UserRepositoryImpl,
    },
    CreateUserUseCase
  ],
  exports: [
    {
      provide: UserRepository,
      useClass: UserRepositoryImpl,
    },
  ],
})
export class UserModule { }
