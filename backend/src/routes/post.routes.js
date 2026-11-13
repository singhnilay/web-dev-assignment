import { Router } from "express";
import { createPost, deletePost, updatePost } from "../controller/post.controller.js";
import { getPosts } from "../controller/post.controller.js";
const postRouter = Router();

postRouter.route('/create').post(createPost);
postRouter.route('/getPosts').get(getPosts);
postRouter.route('/update/:id').patch(updatePost);
postRouter.route('/delete/:id').delete(deletePost);

export default postRouter;