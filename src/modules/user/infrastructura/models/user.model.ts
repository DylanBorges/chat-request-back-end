import { AllowNull, AutoIncrement, Column, DataType, Default, IsEmail, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

@Table({
  tableName: 'users',
  timestamps: true,
  paranoid: true,
  underscored: true,
  deletedAt: true
})
export class  UserModel extends Model<UserModel> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  public declare id: string;

  @AllowNull(false)
  @AutoIncrement
  @Column(DataType.INTEGER)
  public number: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Unique({name: 'unique-email-user', msg: 'Email alread exists'})
  @Column(DataType.STRING)
  email: string

  @AllowNull(false)
  @Unique({name: 'unique-cpf-user', msg: 'CPF alread exists'})
  @Column(DataType.STRING)
  cpf: string;

  @AllowNull(null)
  @Column(DataType.STRING)
  password: string;
} 