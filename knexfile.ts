import knexConfig from './src/config/index';
import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = { development: knexConfig };

module.exports = config;