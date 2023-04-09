import React from 'react';
import Banner from './banner/Banner';
import { Grid } from '@mui/material';
import Categories from './Categories';
import Posts from './post/Posts';
import Filter from './filter/Filter';


const postContainer = {
	display: 'flex',
	flexDirection: "column",
	width: '100%',
}


const Home = () => {

	return (
		<>
			<Banner />
			<Grid container>
				<Grid item lg={2} xs={12} sm={2} elevation={3}>
					<Categories />
				</Grid>
				<Grid container item xs={12} sm={10} lg={10}>
					<div style={postContainer}>
						<Filter />
						<Posts />
					</div>
				</Grid>
			</Grid>
		</>
	)
}

export default Home;
