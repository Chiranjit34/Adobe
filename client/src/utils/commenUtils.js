export const getAccessToken = () => {
	return sessionStorage.getItem("accessToken");
}

export const getType = (value, body) => {
	if (value.query) {
		if (typeof body === "object") {
			return { query: body._id }
		}
		else {
			return { query: body }
		}
	}
	else if (value.params) {
		return { params: body }
	}
	return {}
}

export const addElipsis = (string, limit) => {
	return string.length > limit ? string.substring(0, limit) + '...' : string;
}