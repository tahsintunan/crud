import "dotenv/config";

import { queryDB } from "../db/dbconfig";
import { Blog } from "../models/blog";



// Helper function to get all blogs
const getAllBlogsDB = async () => {
    const blogs = await queryDB(
        'SELECT * FROM "public".post ORDER BY created_at DESC',
        []
    );
    return blogs;
};

// Helper function to get one blog
const getOneBlogDB = async (id: string) => {
    const blog = await queryDB('select * from "public".post WHERE id = $1', [id]);
    if (!blog || blog.length === 0) {
        return null;
    }
    return blog[0];
};

// Helper function to create a blog
const createBlogDB = async (blog: Blog) => {
    try {
        const query =
            'INSERT INTO "public".post (poster_id, title, content) VALUES ($1, $2, $3)';
        const values = [blog.poster_id, blog.title, blog.content];
        await queryDB(query, values);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

// Helper function to update a blog
const updateBlogDB = async (blog: Blog) => {
    try {
        const query =
            'UPDATE "public".post SET title = $1, content = $2, modified_at = NOW() WHERE id = $3';
        const values = [blog.title, blog.content, blog.id];
        await queryDB(query, values);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

// Helper function to delete a blog
const deleteBlogDB = async (id: string) => {
    try {
        const query = 'DELETE FROM "public".post WHERE id = $1';
        const values = [id];
        await queryDB(query, values);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

// Helper function to check if a blog is owned by a user
const userOwnsBlog = async (userId: string, blogId: string) => {
    const blog = await getOneBlogDB(blogId);
    if (!blog) {
        return false;
    }
    return blog.poster_id === userId;
};


export {
    getAllBlogsDB,
    getOneBlogDB,
    createBlogDB,
    updateBlogDB,
    deleteBlogDB,
    userOwnsBlog,
};
