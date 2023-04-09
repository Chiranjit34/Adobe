
import React, { useEffect, useState, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { API } from '../../services/api'
import { Link, useNavigate} from 'react-router-dom'
import { DataContext } from '../../context/DataProvider';

import { Box, Typography } from '@mui/material';

import { Container, Image, EditIcon, DeleteIcon, Heading, Author } from './DetailedViewStyle.js'



 

const DetailedView = () => {
	const { userAccount } = useContext(DataContext);
	const [searchParams] = useSearchParams();
	const postId = searchParams.get('post_id');
	const navigate = useNavigate()

	const [postDetail, setPostDetail] = useState({});

	useEffect(()=>{
		const getPostDetail = async()=>{
			try {
				const responce = await API.getPostDetail(postId)
				setPostDetail(responce.data.post);
			} catch (error) {
				console.log("error while loading post detail: -> ", error)
			}
		}
		getPostDetail();
	},[postId])



	const deletePostHandler = async()=>{
		try {
			await API.deletePost(postId);
			navigate('/home');
		} catch (error) {
			console.log("error while requesting delete: -> ", error)
		}
	}

	return (
		<div>
			<Container>
				<Image src={postDetail.displayPic } alt="post" />
				<Box style={{ float: 'right' }}>
					{
						userAccount.userName === postDetail.userName &&
						<>
							<Link to={`/update-post/?post_id=${postDetail._id}`}><EditIcon color="primary" /></Link>
							<DeleteIcon onClick={deletePostHandler} />
						</>
					}
				</Box>
				<Heading>{postDetail.title}</Heading>

				<Author>
					<Link to={`/?username=${postDetail.userName}`} style={{ textDecoration: 'none', color: 'inherit' }}>
						<Typography>Author: <span style={{ fontWeight: 600 }}>{postDetail.userName}</span></Typography>
					</Link>
					<Typography style={{ marginLeft: 'auto' }}>{new Date(postDetail.createdDate).toDateString()}</Typography>
				</Author>

				<Typography>{postDetail.blogStory}</Typography>
			</Container>
		</div>
	) 
}

export default DetailedView
