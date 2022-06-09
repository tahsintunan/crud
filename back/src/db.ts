require('dotenv').config();
import { Client } from 'pg';


const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432')
});



//.........................................

// function queryDB(query: string, values: any[]) {
//     return new Promise((resolve, reject) => {
//         client.connect();
//         client.query(query, values, (err, res) => {
//             if (!err) {
//                 resolve(res);
//             } else {
//                 reject(err);
//             }
//             client.end();
//         });
//     });
// }


function queryDB(query: string, values: any[]) {
    client.connect();
    client.query(query, values, (err, res) => {
        if (!err) {
            return res.rows;
            // console.log(res.rows);
        } else {
            console.log(err);
            return err;
        }
        client.end();
    });
}

//.........................................




// const a = queryDB('SELECT * FROM "public".user WHERE name = $1', ['John'])

let a = queryDB('SELECT * FROM "public".user', []);

console.log(a);




export { queryDB };


// client.connect();
// client.query('SELECT * FROM "public".user WHERE name = $1', ['John'], (err, res) => {
//     if (!err) {
//         // console.log(res.rows.length);
//         // console.log(res.rows);
//         console.log(res.rows[0].email);
//     } else {
//         console.log(err);
//     }
//     client.end();
// })
