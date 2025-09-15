import { dirname, join } from 'path';

export default () => ({
  port: Number(process.env.PORT ?? '3000'),

  jwt: {
    secretKey: process.env.JWT_SECRET_KEY ?? 'dev-secret-please-change',
    expiresIn: Number(process.env.JWT_EXPIRES_IN ?? '900'), // 900s = 15m
    refreshSecretKey: process.env.JWT_REFRESH_SECRET_KEY ?? 'dev-refresh-secret',
    refreshExpiresIn: Number(process.env.JWT_REFRESH_EXPIRES ?? '604800'), // 7 dias
  },

  database: {
    host: process.env.DB_HOST ?? 'localhost',
    name: process.env.DB_NAME ?? 'postgres',
    user: process.env.DB_USER ?? 'postgres',
    password: process.env.DB_PASS ?? 'postgres',
    port: Number(process.env.DB_PORT ?? '5432'),
  },

  gcp: {
    apiKey_path: join(dirname(__dirname), 'config', 'api_keyGCP.json'),
  },
});
