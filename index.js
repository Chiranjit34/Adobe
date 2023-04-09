import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';



const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());





import mongooseConnection from './database/db.js';
mongooseConnection();



import router from './router/route.js';
app.use('/', router)



const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
	console.log(`server is running on port: ${PORT}`);
})
