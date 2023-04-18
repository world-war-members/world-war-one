import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { setupInterceptorsTo } from "./interceptors";

const baseFetch = setupInterceptorsTo(axios);

export const axiosBaseQuery = (
	{ baseUrl }: { baseUrl: string } = { baseUrl: "" },
): BaseQueryFn<
	{
		url: string;
		method: AxiosRequestConfig["method"];
		data?: AxiosRequestConfig["data"];
		params?: AxiosRequestConfig["params"];
	},
	unknown,
	unknown
> =>
	async ({ url, method, data, params }) => {
		try {
			const result = await baseFetch({
				url: baseUrl + url,
				method,
				data,
				params,
			});
			return { data: result.data };
		} catch (axiosError) {
			const err = axiosError as AxiosError;
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			};
		}
	};
