import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: parseInt(process.env.POSTGRESQL_PORT),
    username: process.env.POSTGRESQL_USERNAME,
    password: process.env.POSTGRESQL_PASSWORD,
    database: process.env.POSTGRESQL_DATABASE,
    synchronize: true,
    logging: false,
    entities: ["src/models/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: [],
})
