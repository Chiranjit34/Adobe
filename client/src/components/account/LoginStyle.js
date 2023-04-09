import { Box, Button, Typography, styled } from '@mui/material';


export const Component = styled(Box)`
    display: flex;
    height: 100%;
	margin-top: 5rem;
    justify-content: center; 
    align-items: flex-end;    
    padding: 15px;
`;

export const LoginContainer = styled(Box)`
	width: 500px;
    box-shadow: 4px 0px 4px 03px rgb(0 0 0/ 0.3);
	display: flex;
    flex-direction: column;
    justify-content: center; 
	align-item: center;
`

export const Image = styled('img')({
	width: 250,
	margin: 'auto',
	padding: '50px 0 0',
});

export const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

export const LoginButton = styled(Button)`
    text-transform: none;
    background: blue;
    color: white;
	font-weight: 700;
    height: 48px;
    border-radius: 2px;
	&:hover{
    background: rgb(181 228 220);
  }
`;

export const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: blue;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
	&:hover{
    background: rgb(239 239 239);
  }
`;

export const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;


