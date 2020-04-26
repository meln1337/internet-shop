import { Pool } from 'pg'

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'spykespyke',
    database: 'internetstore',
    port: 8080
})