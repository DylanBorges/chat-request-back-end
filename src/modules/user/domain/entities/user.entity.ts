export class UserEntity {
  constructor(
    public readonly id: string,
    public readonly number: number,
    public name: string,
    public email: string,
    public cpf: string,
    public passwprd: string,
    public readonly created_at: Date,
    public updated_at: Date,
    public deleted_at: Date
  ) {
    if (!name || name.trim() === '') {
      throw new Error('User name cannot be empty');
    }
  }
}