
// import {Request, Response} from 'express';
// import {pool} from "../db/dbconfig";


// const getAllBlogs = (req: Request, res: Response) => {
//     // posts will be shown in a chronologically descending order on the feed
//     const queryString = `SELECT * FROM "public".post ORDER BY created_at DESC;`;
//     pool.query(queryString, (error, results) => {
//         if (error) throw error;
//         res.status(200).json(results.rows);
//     });
// }

// const getBlogpost = (req: Request, res: Response) => {
//     // get a blogpost by it's post id (:postId)
//     const id = parseInt(req.params.postId);
//     // if (!postExists(id)) res.status(404).json({error: 'Post could not be found'});
//     const queryString = `SELECT * FROM "public".post WHERE id = $1;`;
//     const values = [id];
//     pool.query(queryString, values, (error, results) => {
//         if (error) throw error;
//         res.status(200).json(results.rows);
//     });
// }



// const deleteBlogpost = (req: Request, res: Response) => {
//     // delete a blogpost by it's post id (:postId)
//     const id = parseInt(req.params.postId);
//     // if (!postExists(id)) res.status(404).json({error: 'Post could not be found'});
//     const queryString = `DELETE FROM "public".post WHERE id = $1;`;
//     const values = [id];
//     pool.query(queryString, values, (error, results) => {
//         if (error) throw error;
//         res.status(200).json({message: 'Blogpost deleted successfully'});
//     });
// }

// // const createBlogpost = (req: Request, res: Response) => {
// //     const {title, content} = req.body;
// //     // INSERT INTO "public".post (user_id, content) VALUES (1, 'NEW2');
// //     const queryString = `INSERT INTO "public".post (user_id, title, content) VALUES ($1, $2, $3)`;
// //     const values = [title, content];
// //     pool.query(queryString, values, (error, results) => {
// //         if (error) throw error;
// //         res.status(201).json({message: 'Blogpost created successfully'});
// //     });
// // }


// // const postExists = (req: Request, res: Response, next: ) => {
// //     // check if a blogpost with the given post id exists
// //     let exists = false;
// //     const queryString = `SELECT * FROM "public".post WHERE id = $1;`;
// //     const values = [id];
// //     pool.query(queryString, values, (error, results) => {
// //         if (error) throw error;
// //         exists = (results.rowCount > 0);
// //     });
// //     return exists;
// // }

// // const postExists = (res: Response, req: Request, next: any) => {
// //     // check if a blogpost with the given post id exists
// //     const queryString = `SELECT * FROM "public".post WHERE id = $1;`;
// //     const values = [req.params.postId];
// //     pool.query(queryString, values, (error, results) => {
// //         if (error) throw error;
// //         if (results.rowCount > 0) return next();
// //         return res.status(404).json({error: 'Post could not be found'});
// //     }
// //     );
// // }



// export { 
//     getAllBlogs,
//     getBlogpost,
//     deleteBlogpost,
// };