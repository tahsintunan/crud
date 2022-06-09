require('dotenv').config();
import { Client } from 'pg';


const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432')
});


async function queryDB(queryString: string, values: any[], callback: (result: any) => void) {
    try {
        await client.connect();
        const res = await client.query(queryString, values);
        callback(res);
    } catch (err) {
        console.log(err);
    } finally {
        await client.end();
    }
}


export { queryDB };



/*
async function callbackQueryDB(result: any) {
    console.log(result.rows[0].name);
}

async function getUsers(query: string, callback: (result: any) => void) {
    const result = await queryDB(query, [], callback);
}

getUsers('SELECT * FROM "public".user', callbackQueryDB);
*/