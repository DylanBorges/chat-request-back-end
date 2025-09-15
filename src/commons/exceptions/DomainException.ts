import { HttpException, HttpStatus } from "@nestjs/common";

export class DomainException extends Error {
  public readonly name: string;
  public readonly code: string;
  public readonly httpCode: HttpStatus;

  constructor(message: string, code: string, httpCode?: HttpStatus) {
    super(message);
    this.name = 'DomainException';
    this.code = code;
    this.httpCode = httpCode || HttpStatus.INTERNAL_SERVER_ERROR;
  }

  toHttpException(): HttpException {
    throw new HttpException({message: this.message, code: this.code}, this.httpCode);
  }
}
