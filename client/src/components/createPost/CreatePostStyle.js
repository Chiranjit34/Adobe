
import { Box, styled, } from '@mui/system';
import { Button, FormControl, InputBase, TextareaAutosize } from '@mui/material';



export const Container = styled(Box)(({ theme }) => ({
	margin: '50px 0px',
	[theme.breakpoints.down('md')]: {
		margin: 0
	}
}));

export const StyledFormControl = styled(FormControl)`
	display: flex;
	flex-direction: row;
	align-item: center;
	justify-content: space-between;
	height: 40px;
	margin: 20px;
`

export const Image = styled('img')({
	width: '100%',
	height: '50vh',
	objectFit: 'cover'
});

export const Label = styled('label')({
	display: 'flex',
	alignItems: 'center',
	color: 'rgb(107 107 107)',
	fontWeight: '500',
	cursor: 'pointer',
	margin: '20px',
})

export const StyledInputBase = styled(InputBase)`
	border-bottom: 2px solid rgb(107 107 107);
	font-size: 1.5rem;
	font-weight: 700;
`

export const StyledButton = styled(Button)`
    margin: 0px 20px;
    background: rgb(100 210 200);
    color: rgb(68 80 69);
	font-weight: 600;
	&:hover{
		background: rgb(24 24 24);
		color: rgb(155 210 200);
	}
`;

export const StyledTextArea = styled(TextareaAutosize)`
	width: 91%;
	margin: 50px;
	font-size: 18px;
	border: none;
	background-color: rgb(233, 233, 233);
	&:focus-visible {
		outline: none;
	}
`