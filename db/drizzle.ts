import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { accounts } from './schema';
import * as schema from './schema';

export const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql );

;

