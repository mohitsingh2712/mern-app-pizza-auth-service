import { DataSource } from 'typeorm';
import { Config } from '.';
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: Config.DB_HOST,
    port: Number(Config.DB_PORT),
    username: Config.DB_USERNAME,
    password: Config.DB_PASSWORD,
    database: Config.DB_NAME,
    //don't use syncronize in production
    synchronize: false,
    logging: false,
    entities: ['src/entity/*.{ts,js}'],
    migrations: ['src/migration/*.{ts,js}'],
    subscribers: [],
    // ssl: {
    //     rejectUnauthorized: false, // This will bypass certificate validation (usually fine for CI environments)
    // },
});
