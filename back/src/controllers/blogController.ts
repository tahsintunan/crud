import {Request, Response} from 'express';
import {pool} from "../db/db";


const getAllBlogs = (req: Request, res: Response) => {
    // posts will be shown in a chronologically descending order on the feed
    const queryString = `SELECT * FROM "public".post ORDER BY created_at DESC;`;
    pool.query(queryString, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}


export { 
    getAllBlogs,
};