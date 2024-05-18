import express, { Express, Response } from "express";
import knex from "knex";
import { Model } from "objection"
import router from "./routes"
import knexConfig  from "./config"

const PORT = 8000;
const app: Express = express();

app.use(express.static('src/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const knexInstance = knex(knexConfig);

Model.knex(knexInstance)

app.get("/", (_, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use(router)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}...`);
});
