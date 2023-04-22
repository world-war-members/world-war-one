import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../axios/baseFetch";
import { testConfig } from "../../../environments/app/dev";

export const apiSlice = createApi({
	baseQuery: axiosBaseQuery({
		baseUrl: testConfig.apiUrl,
	}),
	tagTypes: ["QUESTIONS"],
	endpoints: () => ({}),
});
