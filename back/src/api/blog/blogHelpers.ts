

import 'dotenv/config';

import { queryDB } from '../../db/dbconfig';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



const getAllBlogsDB = async () => {
    const blogs = await queryDB('SELECT * FROM blogs', []);
    return blogs;
}

const getOneBlogDB = async (id: string) => {
    const blog = await queryDB('SELECT * FROM blogs WHERE id = ?', [id]);
    if (!blog || blog.length === 0) {
        return null;
    }
    return blog[0];
}

const createBlogDB = async (blog: any) => {
    const newBlog = await queryDB('INSERT INTO blogs (title, content, author) VALUES (?, ?, ?)', [blog.title, blog.content, blog.author]);
    return newBlog;
}

const updateBlogDB = async (id: string, blog: any) => {
    const updatedBlog = await queryDB('UPDATE blogs SET title = ?, content = ?, author = ? WHERE id = ?', [blog.title, blog.content, blog.author, id]);
    return updatedBlog;
}

const deleteBlogDB = async (id: string) => {
    const deletedBlog = await queryDB('DELETE FROM blogs WHERE id = ?', [id]);
    return deletedBlog;
}

export { getAllBlogsDB, getOneBlogDB, createBlogDB, updateBlogDB, deleteBlogDB };
