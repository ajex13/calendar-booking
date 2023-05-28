import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5435,
    username: "cb_app",
    password: "postgres",
    database: "cb_app",
    synchronize: false,
    logging: true,
    entities: ["src/models/**/*.ts"],
    migrations: ["src/migrations/**/*.ts"],
    subscribers: [],
})
