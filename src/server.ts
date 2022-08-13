import 'reflect-metadata'
import express, {  } from 'express'
import dotenv from 'dotenv'
import { DataSource } from 'typeorm'
import { Movie } from './api/movies/movie.model';
import { MainRouter } from './routers/main.router';
import { ServicesFactory } from './services.factory';
import { ControllersFactory } from './controllers.factory';
import { errorHandler } from './middleware/errorHandler';
import { responseHandler } from './middleware/responseHandler';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT as unknown as number,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: [Movie],
    migrations: [],
    subscribers: [],
})

const server = express();

AppDataSource.initialize();

const servicesFactory = new ServicesFactory(AppDataSource);
const controllersFactory = new ControllersFactory(servicesFactory);
const mainRouter = new MainRouter(controllersFactory);

server.use(express.json());
server.use('/', mainRouter.router);
server.use(errorHandler);
server.use(responseHandler);

server.listen(process.env.SERVER_PORT, () => 
    console.log(`Server is listening on port ${process.env.SERVER_PORT}...`)
);
