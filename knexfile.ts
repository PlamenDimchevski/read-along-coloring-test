import { Knex } from 'knex';
import { POSTGRES_URL } from './config';

const config: Knex.Config = {
   client: 'pg',
   connection: POSTGRES_URL,
   migrations: {
      extension: 'ts',
   },
};

export default config;
