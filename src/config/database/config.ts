import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';

export function getDatabaseConfig(
  configService: ConfigService,
): SequelizeModuleOptions {
  return {
    dialect: 'postgres',
    host: configService.get<string>('DB_HOST') ?? 'localhost',
    port: configService.get<number>('DB_PORT') ?? 5432,
    username: configService.get<string>('DB_USER') ?? 'postgres',
    password: configService.get<string>('DB_PASS') ?? '',
    database: configService.get<string>('DB_NAME') ?? 'postgres',

    autoLoadModels: true,
    synchronize: true,
    logging: false,
  };
}
