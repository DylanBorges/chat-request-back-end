import { ConfigService } from "@nestjs/config";
import { SequelizeModuleOptions } from "@nestjs/sequelize";

export function getDatabaseconfig(
    configService: ConfigService
): SequelizeModuleOptions {
    return {
        dialect: 'postgres',
        host: configService.get<string>('DB_HOST') ?? 'localhost',
        port: configService.get<number>('DB_PORT') ?? 5432,
        username: configService.get<string>('DB_USER') ?? 'postgres',
        password: configService.get<string>('DB_PASS') ?? 'root',
        database: configService.get<string>('DB_NAME') ?? 'postgres',
        autoLoadModels: true,
        synchronize: false,
        logging: false
    }
}