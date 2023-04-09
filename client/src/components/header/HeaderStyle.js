import { AppBar, Toolbar, styled } from '@mui/material';



export const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
	margin: 0;
`;

export const Container = styled(Toolbar)`
    background-color: rgb(24 24 24);
	display: flex;
    justify-content: space-between;
	  align-items: center;
	  &> div {
		display: flex;
    	justify-content: space-between;
		align-items: center;
		
	  }    
    & > div > a {
        margin-left: 10px;
		margin-right: 10px;
        color: rgb(156 211 201);
        text-decoration: none;
		font-weight: 800;
		&:hover{
			color: white;
		}
    }
`

export const Image = styled('img')({
	width: 80,
	height: 'auto'
});

