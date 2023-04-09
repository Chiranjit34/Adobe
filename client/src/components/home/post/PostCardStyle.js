import { Box, Typography, styled } from '@mui/material'



export const Container = styled(Box)`
    margin: 10px;
    display: flex;
	justify-content: space-between;
    align-items: center;
	flex-wrap: wrap;
	gap: 30px;
`;
export const Card = styled(Box)`
	border: 1px solid rgb(198 197 197);
	box-shadow: 2px 2px 16px -4px rgba(0,0,0,0.75);
	max-width: 250px;
	min-width: 200px;
    border-radius: 10px;
	padding: 5px;
    margin: 10px;
	margin-right: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

export const Image = styled('img')({
	width: '100%',
	objectFit: 'cover',
	borderRadius: '10px 10px 0 0',
	height: 150
});

export const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

export const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600
`;

export const Username = styled(Typography)`
    font-size: 12px;
	color: #878787
`;
export const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word; /*---> it will break the paragraph in new line if words are more then the box size*/
`;
