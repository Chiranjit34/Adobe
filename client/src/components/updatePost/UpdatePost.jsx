import React, { useState, useEffect } from 'react';
import { AddCircle as Add } from '@mui/icons-material';
import { Container, StyledFormControl, Image, Label, StyledInputBase, StyledButton, StyledTextArea, } from './UpdatePostStyle.js'
import { useSearchParams, useNavigate } from 'react-router-dom';
import { API } from '../../services/api';

const initialPostData = {
	name: '',
	title: '',
	blogStory: '',
	displayPic: '',
	userName: '',
	category: '',
	createdDate: new Date()
}

const UpdatePost = () => {
	const [searchParams] = useSearchParams();
	const postId = searchParams.get('post_id');
	const navigate = useNavigate();

	const [postDetail, setPostDetail] = useState(initialPostData);

	useEffect(() => {
		const getPostDetail = async () => {
			try {
				const responce = await API.getPostDetail(postId)
			
				setPostDetail(responce.data.post);
			} catch (error) {
				console.log("error while loading post detail: -> ", error)
			}
		}
		getPostDetail();
	}, [postId])


	const updateImage = async (file) => {
		try {
			const data = new FormData();
			data.append("name", file.name);
			data.append("file", file);
			const responce = await API.uploadDisplayPicture(data); 
			console.log("responce ===> ", responce.data);
			setPostDetail((prevPostDetail) => {
				return {
					...prevPostDetail,
					displayPic: responce.data,
				}
			});
		} catch (error) {
			console.log("error while uploading the image: ->", error.message);
		}
	}


	const blogInputChangeHndler = (e)=> {
		setPostDetail({ ...postDetail, [e.target.name]: e.target.value });
	}

	const savePost = async()=>{
		try {
			const responce = await API.updatePost(postDetail);
			navigate(`/home/details?post_id=${responce.data.updatedPost._id}`);
		} catch (error) {
			console.log("something went wrong while crating a new post -->", error);
		}
	}


	return (
		<Container>

			<Image src={postDetail.displayPic} alt="post" />

			<StyledFormControl>
				<Label htmlFor='fileInput'>
					<Add fontSize='large' color='action' />
					<span>Display Pic</span>
				</Label>
				<input
					type='file'
					id='fileInput'
					style={{ display: 'none' }}
					onChange={(e) => updateImage(e.target.files[0])}
				/>
				<StyledInputBase
					placeholder="Enter Blog Tile here..."
					onChange={blogInputChangeHndler}
					name='title'
					value={postDetail.title}
				/>
				<StyledButton onClick={savePost}>Publish</StyledButton>
			</StyledFormControl>

			<StyledTextArea
				minRows={5}
				placeholder="What's your story...."
				onChange={blogInputChangeHndler}
				name='blogStory'
				value={postDetail.blogStory}
			/>

		</Container>
	)
}

export default UpdatePost;