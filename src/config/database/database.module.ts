import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (
        configService: ConfigService
      ) => ({
        dialect: 'postgres',
        host: configService.get<string>('DB_HOST') ?? 'localhost',
        port: configService.get<number>('DB_PORT') ?? 5432,
        username: configService.get<string>('DB_USER') ?? 'postgres',
        password: configService.get<string>('DB_PASS') ?? '',
        database: configService.get<string>('DB_NAME') ?? 'postgres',

        autoLoadModels: true,
        synchronize: false,
        logging: false,
      }),
    }),
  ],
  exports: [SequelizeModule],
})
export class DataBaseModule { }
