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

const getBlogpost = (req: Request, res: Response) => {
    // get a blogpost by it's post id (:postId)
    const id = parseInt(req.params.postId);
    const queryString = `SELECT * FROM "public".post WHERE id = $1;`;
    const values = [id];
    pool.query(queryString, values, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const deleteBlogpost = (req: Request, res: Response) => {
    // delete a blogpost by it's post id (:postId)
    const id = parseInt(req.params.postId);
    const queryString = `DELETE FROM "public".post WHERE id = $1;`;
    const values = [id];
    pool.query(queryString, values, (error, results) => {
        if (error) throw error;
        res.status(200).json({message: 'Blogpost deleted successfully'});
    });
}

// const createBlogpost = (req: Request, res: Response) => {
//     const {title, content} = req.body;
//     // INSERT INTO "public".post (user_id, content) VALUES (1, 'NEW2');
//     const queryString = `INSERT INTO "public".post (user_id, title, content) VALUES ($1, $2, $3)`;
//     const values = [title, content];
//     pool.query(queryString, values, (error, results) => {
//         if (error) throw error;
//         res.status(201).json({message: 'Blogpost created successfully'});
//     });
// }


export { 
    getAllBlogs,
    getBlogpost,
    deleteBlogpost,
};