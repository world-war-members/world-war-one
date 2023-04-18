import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../axios/baseFetch";

export const apiSlice = createApi({
	baseQuery: axiosBaseQuery({
		baseUrl: "/base-url",
	}),
	endpoints: (builder) => ({}),
});
