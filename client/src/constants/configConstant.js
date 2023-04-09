

export const API_NOTIFICATION_MESSAGE = {
	loading: {
		title: 'Loading...',
		message: 'Data is being loaded... Please wait',
	},
	success: {
		title: 'success',
		message: 'Data is successfuly loaded',
	},
	responceFailure: {
		title: 'ERROR',
		message: "Request sent sucessfuly... request is received by server... server also has sent a responce sucessfuly... but the responce was other then 200 series  i.e. server couldn't process the request due to any reason"
	},
	requestFailuer: {
		title:'ERROR',
		message: "Request sent sucessfuly... but no responce was received."
	},
	networkError: {
		title: "ERROR",
		message: "Unble to connect wit the server. Please check your internet connection OR try again leter"
	}
};




export const SERVICE_URL = {
	userSignup: {
		url: '/signup',
		method: 'POST',
	},
	userLogin: {
		url: '/login',
		method: 'POST',
	},
	uploadDisplayPicture: {
		url: 'file/upload',
		method: 'POST'
	},
	createPost: {
		url: '/create',
		method: 'POST'
	},
	getAllPosts: {
		url: '/posts',
		method: 'GET'
	},
	getPostDetail: {
		url: '/posts-detail',
		method: 'GET',
		query: true,
	},
	updatePost: {
		url: "/update",
		method: "POST"
	},
	deletePost: {
		url:'/delete',
		method:'GET', 
		query: true
	}
}