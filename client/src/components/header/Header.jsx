import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Component, Container, Image } from './HeaderStyle.js';
import image from '../../assets/logo.png'
import { DataContext } from '../../context/DataProvider.js';


const Header = () => {

	function capitalizeFirstLetter (str) {
		const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
		return capitalized;
	}

	const { userAccount } = useContext(DataContext);
	const name = capitalizeFirstLetter(userAccount.name) 

	const logoutHandler = async () => {
		sessionStorage.clear();
	}

	return (
		<Component>
			<Container>
				<div>
					<Link to='/home'><Image src={image} alt="blog" /></Link>
					<Link to='/home'>HOME</Link>
					<Link to='/about'>ABOUT</Link>
				</div>
				<div>
					<Link to='/login' onClick={logoutHandler}><i className="icon-off"> {name}</i></Link>
				</div>
			</Container>
		</Component>
	)
}

export default Header;