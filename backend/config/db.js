import { neon } from "@neondatabase/serverless";

import dotenv from 'dotenv';

dotenv.config();

const {PGHOST,PGUSER,PGDATABASE,PGPASSWORD} = process.env;

// postgresql://neondb_owner:npg_loFxn7BAbWD5@ep-muddy-snow-a8jimq29-pooler.eastus2.azure.neon.tech/neondb?sslmode=require


export const sql=neon(
    `postgresql://${PGHOST}:${PGPASSWORD}@${PGUSER}/${PGDATABASE}?sslmode=require`
)