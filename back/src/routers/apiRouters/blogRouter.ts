import { Router } from "express";
import {
  getAllBlogsController,
  getOneBlogController,
  createBlogController,
  updateBlogController,
  deleteBlogController,
} from "../../api/blog/blogControllers";

const router = Router();

// routes
router.get("/", getAllBlogsController); // get all blogs
router.get("/:id", getOneBlogController); // get one blog
router.post("/", createBlogController); // create blog
router.put("/:id", updateBlogController); // update blog
router.delete("/:id", deleteBlogController); // delete blog

export { router as blogRouter };
