import React from "react";
import { SystemActions } from "@/features/system/systemSlice";
import { useAppDispatch } from "./hooks/useStore";
import { LanguageKeys } from "./types/enum/system";
import { useGetQuestionsQuery } from "./features/questions/questionsApiSlice";
import { apiEndpointUrls } from "./app/api/apiEndpoints";

const App = () => {
	const dispatch = useAppDispatch();
	const changeLocal = () => {
		dispatch(SystemActions.setLanguage(LanguageKeys.ENGLISH));
	};

	const { 
		data, 
		isLoading, 
		isError, 
		isFetching, 
		isSuccess 
	} = useGetQuestionsQuery({
		endpointName: apiEndpointUrls.questions.getAllQuestions
	});

	console.log("debug-issue", { 
		data, 
		isLoading, 
		isError, 
		isFetching, 
		isSuccess 
	});
	
	if (isError) {
		return <div><h1>Error during fetching</h1></div>;
	}
	else if(isLoading) {
		return <div><h1>Loading</h1></div>;
	}
	return (
		<div>
			<button onClick={() => changeLocal()}>Test</button>
			<ul>
				{
					data?.map((item:any, index:number) => (
						<li key={index}>
							{/* question title */}
							{item.question}
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default App;
