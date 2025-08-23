import { dirname } from 'path';

export default () => ({
  port: Number(process.env.PORT) ?? 3000,

  jwt: {
    secretKey: process.env.JWT_SECRET_KEY ?? '5ebe2294ecd0e0f08eab7690d2a6ee69',
    expiresIn: Number(process.env.JWT_EXPIRES_IN) ?? 60 * 15,
    refreshSecretKey: process.env.JWT_REFRESH_SECRET_KEY ?? '5182cf9a6ee4471a7c5e4ca8b02d2ce9',
    refreshExpiresIn: Number(process.env.JWT_REFRESH_EXPIRES) ?? 60 * 60 * 24 * 7,
  },

  database: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: Number(process.env.DATABASE_PORT) ?? 5432,
  },

  gcp: {
    apiKey_path: dirname(__dirname) + '/config/api_keyGCP.json',
  },
});
