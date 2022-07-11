import 'dotenv/config';
import { Client, Pool } from 'pg';


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT as string)
});


const queryDB = async (query: string, params: any[]) => {
    try {
        const res = await pool.query(query, params);
        return res.rows;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}


export { queryDB };
