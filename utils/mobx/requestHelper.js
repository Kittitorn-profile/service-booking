import axios, { AxiosRequestConfig, Method } from "axios";

const request = async (method, endpoint, options) => {
	const requestOptions = {
		method,
		baseURL: endpoint,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	};

	if (options && options.queries) {
		requestOptions.params = options.queries;
	}
	if (options && options.body) {
		requestOptions.data = options.body;
	}

	try {
		const res = await axios(requestOptions);
		return res;
	} catch (e) {
		throw e;
	}
};

const get = (endpoint, requestOptions) =>
	request("GET", endpoint, requestOptions);
const post = (endpoint, requestOptions) =>
	request("POST", endpoint, requestOptions);
const put = (endpoint, requestOptions) =>
	request("PUT", endpoint, requestOptions);
const patch = (endpoint, requestOptions) =>
	request("PATCH", endpoint, requestOptions);
const remove = (endpoint, requestOptions) =>
	request("DELETE", endpoint, requestOptions);
export default { get, post, put, patch, delete: remove };
