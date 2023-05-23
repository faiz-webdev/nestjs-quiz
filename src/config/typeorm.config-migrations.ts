import { DataSource, DataSourceOptions } from 'typeorm';

export const typeOrmConfigMigration: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: 'root',
  database: 'quiz-migration',
  password: 'root',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  synchronize: false,
  logging: true,
};

const dataSource = new DataSource(typeOrmConfigMigration);
export default dataSource;
