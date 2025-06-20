import { loadEnv } from 'vite';


export const env = loadEnv(process.env.APP_ENV, process.cwd(), '')
