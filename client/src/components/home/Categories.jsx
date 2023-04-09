

import { Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import {useNavigate} from 'react-router-dom';

const StyledTable = styled(Table)`
    border: 2px solid rgba(215, 215, 215, 2);
	background: white;
`;


const StyledTableCell = styled(TableCell)`
	background: rgb(24 24 24);
    color: rgb(155 210 200);
	font-weight: 600;
    text-decoration: none;
	text-align: center;
	font-size: 20px;
`
const StyledTableCellOptions = styled(TableCell)`
	font-weight: 600;
	color: rgb(24 24 24);
	&:hover{
		background-color: rgb(233 233 233);
		cursor: pointer;
	}
`

const categories = [
	{ id: 1, type: "Music" },
	{ id: 2, type: "Movies" },
	{ id: 3, type: "Sports" },
	{ id: 4, type: "Tech" },
	{ id: 5, type: "Fashion" }
];


const Categories = () => {


	const navigateTo = useNavigate();
	const navigateToCreatePost = (categoryType)=> {
		let path = `/create-new-post/?category=${categoryType}`;
		navigateTo(path)
	}
	
	return (
		<>
			<StyledTable>
				<TableHead>
					<TableRow>
						<StyledTableCell>
							Create Post
						</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						categories.map(category => (
							<TableRow key={category.id}>
								<StyledTableCellOptions onClick={() => navigateToCreatePost(category.type)}>
										{category.type}
								</StyledTableCellOptions>
							</TableRow>
						))
					}
				</TableBody>
			</StyledTable>
		</>
	)
}

export default Categories;