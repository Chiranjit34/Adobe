import { Box } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../../context/DataProvider';
import { Link } from 'react-router-dom';
import { API } from '../../../services/api';
import PostCard from './PostCard';
import { Container } from './PostCardStyle';


const Posts = () => {
	const [posts, setPosts] = useState([]);
	const { filterCategory } = useContext(DataContext);
	const [filteredPost, setFilteredPost] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const responce = await API.getAllPosts();
				setPosts(responce.data.posts)
			} catch (error) {
				console.log("Error Fetching all posts: ", error.message)
			}
		}
		fetchData();

	}, []);

	useEffect(()=>{ 
		if (posts && posts.length > 0) {
			let filter = []
			posts.forEach((post) => {
				if (filterCategory.category === 'All') {
					filter.push(
						<Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/?post_id=${post._id}`}>
							<PostCard 
								key={post._id}
								picture={post.displayPic}
								category={post.category}
								title={post.title}
								name={post.name}
								username={post.userName}
								discription={post.blogStory}
							/>
						</Link>
					)
				}
				if (filterCategory.category === post.category) {
					filter.push(
						<Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/?post_id=${post._id}`}>
							<PostCard
								key={post._id}
								picture={post.displayPic}
								category={post.category}
								title={post.title}
								name={post.name}
								username={post.userName}
								discription={post.blogStory}
							/>
						</Link>
					)
				}

			});
			setFilteredPost(filter)
		}
		else {
			setFilteredPost([<Box>No data to display</Box>]) ;
		}
	}, [filterCategory.category, posts])
	

	

	return (
		<Container>
			{filteredPost}
		</Container>
	)
}

export default Posts
