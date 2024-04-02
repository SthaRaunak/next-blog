import { Post } from "@/model/post.model";
import { connectDB } from "./connectionDB";
import { User } from "@/model/user.model";
import { unstable_noStore as noStore } from "next/cache";

const getPosts = async () => {
  try {
    connectDB();
    const posts = Post.find();
    return posts;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch posts");
  }
};

const getPost = async (slug) => {
  try {
    connectDB();
    const post = await Post.findOne({ slug: slug });
    if (!post) {
      throw new Error("400 Post not found");
    }

    return post;
  } catch (err) {
    console.error(err.message);
    throw new Error("Failed to fetch post detail");
  }
};

const getUser = async (id) => {
  noStore(); //stop nextjs from caching (currently this feature is unstable)
  try {
    connectDB();
    const user = await User.findById(id).select("-password");
    return user;
  } catch (err) {
    console.error(err.message);
    throw new Error("Failed to fetch User");
  }
};

const getUsers = async () => {
  try {
    connectDB();
    const users = User.find();
    return users;
  } catch (err) {
    console.error(err.message);
    throw new Error("Failed to fetch Users");
  }
};

export { getPost, getPosts, getUser, getUsers };
