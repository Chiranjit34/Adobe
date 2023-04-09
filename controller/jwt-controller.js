import Jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const authanticateToken = (request, responce, next) => {
	const authHeader = request.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token == null) {
		return responce.status(401).json({ msg: "Token is missing" });
	}
	Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (error, user)=>{
		if(error){
			return responce.status(403).json({msg: "invalid token"});
		}
		// console.log("request ==> ", request);
		// console.log("user value: ===> ", user)
		next();
	})
}