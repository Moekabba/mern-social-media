// we are going to utalize mongoose here
import mongoose from "mongoose";
// mongoose schema this is a schema of our post
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// now turn the schema to model
const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;

// we are exporting mongoose model from the postmessfile the later on we can run FIND, CREATE , DELETE etc
