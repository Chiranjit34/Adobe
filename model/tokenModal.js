import mongoose from "mongoose";


const tokenShema = new mongoose.Schema({
	token: {
		type: String,
		required: true
	}
});

const Token = mongoose.model('Token', tokenShema);

export default Token;