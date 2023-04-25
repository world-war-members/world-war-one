import React from "react";
import Router from "./routes/routes";
import { ConfigProvider, theme} from "antd";
import { useAppSelector } from "./hooks/useStore";

const App = () => {
	const { darkAlgorithm, defaultAlgorithm } = theme;

	const { lightMode } = useAppSelector((store)=> store.system);
	
	return (
		<ConfigProvider
			theme={{
				algorithm: !lightMode ? darkAlgorithm : defaultAlgorithm,
				token: {
					colorPrimary: "#00b96b",
				},
			}}>
			<Router />
		</ConfigProvider>
	);
};

export default App;
