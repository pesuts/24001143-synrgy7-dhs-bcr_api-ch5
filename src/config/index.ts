const knexConfig = {
  client: 'pg',
  connection: {
    user: 'postgres',
    password: 'postgres',
    port: 5432,
    host: '127.0.0.1',
    database: 'challenge5',
  }
};

export default knexConfig;