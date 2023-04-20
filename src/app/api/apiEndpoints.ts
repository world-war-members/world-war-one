type ApiEndpointUrls = {
    questions: {
      getAllQuestions: string;
    };
};
  
export const apiEndpointUrls: ApiEndpointUrls = {
	questions: {
		getAllQuestions: "/api/words"
	}
} as const;