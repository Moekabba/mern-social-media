// after creation get and post function, import postMessage
import PostMessage from "../models/postMessage.js";
// folder structure for backend
// yhis post will take care all the handlers for our routes
// export the post from routes post here

// turn this to asynch
export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// create create-post logic
export const createPost = (req, res) => {
  try {
    const post = req.body;
    const newPost = new postMessage(post);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
