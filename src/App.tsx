import React from "react";
import { SystemActions } from "@/features/system/systemSlice";
import { useAppDispatch } from "./hooks/useStore";
import { LanguageKeys } from "./types/enum/system";

const App = () => {
	const dispatch = useAppDispatch();
	const changeLocal = () => {
		dispatch(SystemActions.setLanguage(LanguageKeys.ENGLISH));
	};
	
	return (
		<div>
			<button onClick={() => changeLocal()}>Test</button>
		</div>
	);
};

export default App;
