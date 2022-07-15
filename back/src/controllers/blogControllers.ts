import { Response } from "express";
import { Blog } from "../models/blog";
import { ApiRequest } from "../interfaces/apiRequest";
import {
    getAllBlogsDB,
    getOneBlogDB,
    createBlogDB,
    updateBlogDB,
    deleteBlogDB,
    userOwnsBlog,
} from "../helpers/blogHelpers";


// Controller for getting all blogs
const getAllBlogsController = async (req: ApiRequest, res: Response) => {
    const blogs = await getAllBlogsDB();
    return res.status(200).json(blogs);
};


// Controller for getting one blog
const getOneBlogController = async (req: ApiRequest, res: Response) => {
    const blog = await getOneBlogDB(req.params.id);
    if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json(blog);
};


// Controller for creating a blog
const createBlogController = async (req: ApiRequest, res: Response) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const userId = req.user.id;
    const { title, content } = req.body;

    const blog = new Blog(title, content, userId);
    if (!(await createBlogDB(blog))) {
        return res.status(500).json({ message: "Error creating blog" });
    }
    return res.status(200).json({ message: "Blog created successfully" });
};


// Controller for updating a blog
const updateBlogController = async (req: ApiRequest, res: Response) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const userId = req.user.id;

    const blogId = req.params.id;
    const { title, content } = req.body;

    if (!(await userOwnsBlog(userId, blogId))) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const blog = new Blog(title, content, userId);
    blog.id = blogId;

    if (!(await updateBlogDB(blog))) {
        return res.status(500).json({ message: "Error updating blog" });
    }

    return res.status(200).json({ message: "Blog updated successfully" });
};


// Controller for deleting a blog
const deleteBlogController = async (req: ApiRequest, res: Response) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const userId = req.user.id;
    const blogId = req.params.id;

    if (!(await userOwnsBlog(userId, blogId))) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    if (!(await deleteBlogDB(blogId))) {
        return res.status(500).json({ message: "Error deleting blog" });
    }

    return res.status(200).json({ message: "Blog deleted successfully" });
};

export {
    getAllBlogsController,
    getOneBlogController,
    createBlogController,
    updateBlogController,
    deleteBlogController,
};
