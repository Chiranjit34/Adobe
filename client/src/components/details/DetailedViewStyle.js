import { Box, Typography, styled } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';


export const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
}));

export const Image = styled('img')({
	marginTop: "5px",
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

export const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
	color: rgb(116 206 190);
	&:hover{
		color: rgb(68 80 69);
	}
	`;
	
	export const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
	color: rgb(68 80 69);
	&:hover{
		color: rgb(35 43 36);
	}
`;

export const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`;

export const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));