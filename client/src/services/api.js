import axios from 'axios';
import { API_NOTIFICATION_MESSAGE, SERVICE_URL } from '../constants/configConstant';
import { getAccessToken, getType } from '../utils/commenUtils';




const API_URL = 'http://localhost:8080';
const axiosInstance = axios.create({ 
	baseURL: API_URL,
	timeout: 30000,
});


axiosInstance.interceptors.request.use(
	(config) => {
		
		if (config.TYPE.query) {
			config.url = config.url + "?post_id=" + config.TYPE.query
		}
		else if (config.TYPE.params){
			config.params = config.TYPE.params
		}
		return config;
	}, 
	(error) => {
		console.log("could not make request --->", error);
		return Promise.reject(error);
	}
)

axiosInstance.interceptors.response.use(
    function(response) {
        return processResponse(response);
    },
    function(error) {
        return Promise.reject(processError(error));
    }
)

const processResponse = (response) => {
	if (response?.status === 200) {
		return { 
			isSuccess: true, 
			data: response.data 
		}
	} 
	else {
		return {
			isFailure: true,
			status: response?.status,
			msg: response?.msg,
			code: response?.code
		}
	}
}


const processError = (error) => {
	if (error.responce) {
		console.log("Error in respoce ---> ", error.toJSON());
		return {
			isError: true,
			msg: API_NOTIFICATION_MESSAGE.responceFailure,
			code: error.responce.status
		}
	}
	else if (error.request) {
		console.log("Error in request ---> ", error);
		return {
			isError: true,
			msg: API_NOTIFICATION_MESSAGE.requestFailuer,
			code: ""
		}
	}
	else {
		console.log("Error in network ---> ", error);
		return {
			isError: true,
			msg: API_NOTIFICATION_MESSAGE.networkError,
			code: ""
		}
	}
}



export const API = {};
for(const [key, value] of Object.entries(SERVICE_URL)){
	API[key] = (body, showUploadProgress, showDownloadProgress) => { 
		return axiosInstance({
			url: value.url,
			method: value.method,
			data: body,
			responseType: value.responceType,
			headers: {
				authorization: getAccessToken()
			},
			TYPE: getType(value, body),
			onUploadProgress: (ProgressEvent)=>{
				if(showUploadProgress){
					let percentComplete = Math.round((ProgressEvent.loaded*100)/ProgressEvent.total);
					showUploadProgress(percentComplete);
				}
			},
			onDownloadProgress: (ProgressEvent)=>{
				if(showDownloadProgress){
					let percentComplete = Math.round((ProgressEvent.loaded*100)/ProgressEvent.total);
					showDownloadProgress(percentComplete)
				}
			}
		})
	}
}
