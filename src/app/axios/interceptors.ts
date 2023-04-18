import {
	AxiosError,
	AxiosInstance,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from "axios";

// if auth is required, write auth helper
// import { AuthService } from "@/helper/auth.helper";

const onRequest = (
	config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
	// config.headers.Accept = "application/json";
	// config.headers["Content-Type"] = "application/json; charset=UTF-8";
	// const authToken = AuthService.getAuthInfo().accessToken;
	// if (authToken) {
	// 	config.headers.Authorization = `Bearer ${authToken}`;
	// }
	return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
	console.error(`[request error] [${JSON.stringify(error)}]`);
	return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
	console.info(`[response] [${JSON.stringify(response)}]`);
	return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
	console.error(`[response error] [${JSON.stringify(error)}]`);
	return Promise.reject(error);
};

export function setupInterceptorsTo(
	axiosInstance: AxiosInstance,
): AxiosInstance {
	axiosInstance.interceptors.request.use(onRequest, onRequestError);
	axiosInstance.interceptors.response.use(onResponse, onResponseError);
	return axiosInstance;
}
