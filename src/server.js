import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';

import router from './router.js';

const server = express();

server.use(cors());
server.use(json());

server.get("/health", (req, res) => {
    return res.sendStatus(200);
})

//router
server.use(router);

server.listen(5001, () => {
    console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});
