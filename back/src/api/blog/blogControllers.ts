import { getAllBlogsDB, getOneBlogDB, createBlogDB, updateBlogDB, deleteBlogDB } from './blogHelpers';


const getAllBlogsController = async (req: any, res: any) => {
    const blogs = await getAllBlogsDB();
    return res.json(blogs);
}

const getOneBlogController = async (req: any, res: any) => {
    const blog = await getOneBlogDB(req.params.id);
    res.json(blog);
}

const createBlogController = async (req: any, res: any) => {
    // const blog = new Blog(req.body);
    // await blog.save();
    res.json({ message: 'Blog created successfully' });
}

const updateBlogController = async (req: any, res: any) => {
    // await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Blog updated successfully' });
}

const deleteBlogController = async (req: any, res: any) => {
    // await Blog.findByIdAndRemove(req.params.id);
    res.json({ message: 'Blog deleted successfully' });
}


export { getAllBlogsController, getOneBlogController, createBlogController, updateBlogController, deleteBlogController };
