//  this the express part?
import express from "express";

// now import the function from controller posts
import { getPosts, createPost } from "../controllers/posts.js";
const router = express.Router();

// http://localhost:5001/posts
router.get("/", getPosts);
router.post("/", createPost);

export default router;
