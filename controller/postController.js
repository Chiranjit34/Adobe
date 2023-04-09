import { request } from "express";
import Posts from "../model/postsModel.js";

export const createPost = async(request, responce)=>{
	try {
		// console.log("****request received****")
		// console.log("body ==>", request.body)
		const post = await Posts.create(request.body);
		// console.log("data posted =-=-=-=->>>>", post);
		post.save();
		return responce.status(200).json({msg: "New post successfully created"});
	} catch (error) {
		console.log(error.message)
		return responce.status(500).json({ msg: 'Error while creating new post...' });
	}
}

export const getAllPosts = async(request, responce)=>{
	try {
		const allPost = await Posts.find();
		responce.status(200).json({posts: allPost});
	} catch (error) {
		responce.status(500).json({msg: error.message});
	}
}


export const getPostDetail = async(request, responce)=>{
	const postId = request.query.post_id;
	try {
		const post = await Posts.findById(postId);
		// console.log(post)
		responce.status(200).json({post: post})
	} catch (error) {
		responce.status(500).json({msg: error.message})
	}
}


export const updatePost = async(request, responce)=>{
	try {
		await Posts.findByIdAndDelete(request.body._id)
		const updatedPost = await Posts.create(request.body);
		updatedPost.save();
		// console.log(updatedPost);
		responce.status(200).json({ updatedPost: updatedPost })
	} catch (error) {
		responce.status(500).json({msg: error.message})
	}
	
}


export const deletePost = async(request, responce)=>{
	const postId = request.query.post_id
	// console.log(postId)
	try {
		await Posts.findByIdAndDelete(postId)
		responce.status(200).json({msg: "post deleted sucessfully"});
	} catch (error) {
		responce.status(500).json({ msg: error.message })
	}
}