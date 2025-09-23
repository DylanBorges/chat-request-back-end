import { DomainException } from "@commons/exceptions/DomainException";
import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { CreateUserDto } from "@user/application/dtos/user.dto";
import { CreateUserUseCase } from "@user/application/use-case/create-user.use-case";

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Post('register')
  @HttpCode(201)
  async createUser(
    @Body() userData: CreateUserDto
  ) {
    try {
      return await this.createUserUseCase.execute(
      userData.name,
      userData.email,
      userData.cpf,
      userData.password
    );
    } catch (error) {
      if (error instanceof DomainException) {
        error.toHttpException;
      }
      throw error;
    }
  }
}