import React, { useState, useEffect, useContext } from 'react';
import { AddCircle as Add } from '@mui/icons-material';
import { Container, StyledFormControl, Image, Label, StyledInputBase, StyledButton, StyledTextArea, } from './CreatePostStyle'
import { useSearchParams, useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import { API } from '../../services/api';
import Tech from '../../assets/Tech.jpg';
import Music from '../../assets/Music.jpg';
import Movies from '../../assets/Movies.jpg';
import Sports from '../../assets/Sports.jpg';
import Fashion from '../../assets/Fashion.jpg';


const defaultImages = {
	Tech: Tech,
	Music: Music,
	Movies: Movies,
	Fashion: Fashion,
	Sports: Sports,
}


const initialPostData = {
	name: '',
	title: '',
	blogStory: '',
	displayPic: '',
	userName: '',
	category: '',
	createdDate: new Date()
}



const CreatePost = () => {
	const [postData, setPostData] = useState(initialPostData)
	const [searchParams] = useSearchParams();
	const category = searchParams.get('category');
	const { userAccount } = useContext(DataContext);
	const navigate = useNavigate();
	const updateImage = async (file) => {
		const data = new FormData();
		data.append("name", file.name);
		data.append("file", file);
		const responce = await API.uploadDisplayPicture(data); 
		setPostData((prevPostData) => {
			return {
				...prevPostData,
				displayPic: responce.data,
			}
		});

	}



	useEffect(() => {
		setPostData((prevStat)=>{
			return{
				...prevStat,
				category: category,
				displayPic: postData.displayPic ? postData.displayPic : defaultImages[category],
				name: userAccount.name,
				userName: userAccount.userName
			}
		})
	}, []);


	const blogInputChangeHndler = (e) => {
		setPostData({ ...postData, [e.target.name]: e.target.value });
	};

	const savePost = async()=>{
		try {
			await API.createPost(postData)
			navigate('/home');
		} catch (error) {
			console.log("something went wrong while crating a new post -->", error );
		}
	}
	let imageUrl = postData.displayPic ? postData.displayPic : defaultImages[category]; 
	return (
		<Container>

			<Image src={imageUrl} alt="post" />

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
					value={postData.title}
				/>
				<StyledButton onClick={savePost}>Publish</StyledButton>
			</StyledFormControl>

			<StyledTextArea
				minRows={5}
				placeholder="What's your story...."
				onChange={blogInputChangeHndler}
				name='blogStory'
				value={postData.blogStory}
			/>

		</Container>
	)
}

export default CreatePost;