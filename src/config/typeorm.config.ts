import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

console.log(process.env.HEROKU_POSTGRESQL_ORANGE, dbConfig.database);
console.log(process.env.DB_PASSWORD, dbConfig.password);
console.log(process.env.DB_HOST, dbConfig.host);
console.log(process.env.DB_USER, dbConfig.username);
console.log(process.env.NODE_ENV);
console.log(process.env.JWT_SECRET, 2323);

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.DB_HOST || dbConfig.host,
  port: process.env.DB_PORT || dbConfig.port,
  username: process.env.DB_USER || dbConfig.username,
  password: process.env.DB_PASSWORD || dbConfig.password,
  database: process.env.DB_DATABASE || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
};
