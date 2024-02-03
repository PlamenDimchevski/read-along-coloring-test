import { Knex } from 'knex';
import { POSTGRES_PRISMA_URL } from './config';

const config: Knex.Config = {
   client: 'pg',
   connection: POSTGRES_PRISMA_URL,
   migrations: {
      extension: 'ts',
   },
};

export default config;
