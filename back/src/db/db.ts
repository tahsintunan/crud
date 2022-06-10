require('dotenv').config();
// import { Client } from 'pg';
import { Pool } from 'pg';


// const client = new Client({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     port: parseInt(process.env.DB_PORT || '5432')
// });

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432')
});


// const queryDB = async (queryString: string, values: any[]) => {
//     try {
//         await client.connect();
//         const res = await client.query(queryString, values);
//         return res.rows;
//     } catch (err) {
//         console.log(err);
//     } finally {
//         await client.end();
//     }
// }

// export { queryDB };



export { pool };



/*
async function callbackQueryDB(result: any) {
    console.log(result.rows[0].name);
}

async function getUsers(query: string, callback: (result: any) => void) {
    const result = await queryDB(query, [], callback);
}

getUsers('SELECT * FROM "public".user', callbackQueryDB);
*/


/*
const a = queryDB('SELECT * FROM "public".user', []);
a
    .then(res => console.log(res))
    .catch(err => console.log(err));
*/


/*
const getUser = async (id: number) => {
    try{
        const query = 'SELECT * FROM "public".user WHERE id = $1';
        const values = [id];
        const result = await queryDB(query, values);
        console.log(result);
    }catch{
        console.log('error');
    }
}

getUser(2);
*/