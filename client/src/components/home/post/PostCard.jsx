
import React from 'react'
import { Details, Heading, Image, Text, Card, Username } from './PostCardStyle'
import { addElipsis } from '../../../utils/commenUtils'

const PostCard = (props) => {
	return (
		<Card>
			<Image src={props.picture} alt="Display Picture" />
			<Text>{props.category}</Text>
			<Heading>{addElipsis(props.title, 20)}</Heading>
			<Text>{props.name}</Text>
			<Username>Username: {props.username}</Username>
			<Details>{addElipsis(props.discription, 100)}</Details>
		</Card>
	)
}

export default PostCard
