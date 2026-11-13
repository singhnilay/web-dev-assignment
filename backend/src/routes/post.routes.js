import { Router } from "express";
import { createPost, updatePost } from "../controller/post.controller.js";
import { getPosts } from "../controller/post.controller.js";
const postRouter = Router();

postRouter.route('/create').post(createPost);
postRouter.route('/getPosts').get(getPosts);
postRouter.route('/update/:id').patch(updatePost);

export default postRouter;