import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'quiz',
  entities: [path.join(__dirname, '../**/**/*.entity{.ts,.js}')],
  synchronize: true, // Set This To false in Production. Might cause data loss
  logging: true,
};
