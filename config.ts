import {config} from 'dotenv';
config({path:'.env.local'});

export const { NODE_ENV, DISCORD_CLIENT_SECRET, DISCORD_CLIENT_ID, ALLOWED_CHANEL_ID, OPENAI_API_KEY, POSTGRES_URL } = process.env;
