import { GridFsStorage } from 'multer-gridfs-storage'
import multer from 'multer';
// ENV CONFIGURATION
import dotenv from 'dotenv';
dotenv.config();

const connectionOption = {
	useNewUrlParser: true, useUnifiedTopology: true
}

const storage = new GridFsStorage({
	url: process.env.MONGO_URL,
	options: connectionOption,
	file: (request, file) => {
		const match = ["image/png", "image/jpg"];

		if (match.indexOf(file.memeType) === -1)
			return `${Date.now()}-blog-${file.originalname}`;

		return {
			bucketName: "photos",
			filename: `${Date.now()}-blog-${file.originalname}`
		}
	}
});

export default multer({ storage }); 