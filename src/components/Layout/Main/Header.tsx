import React from "react";

import { Layout, Row, Col, Switch } from "antd";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { SystemActions } from "@/features/system/systemSlice";

const MainHeader: React.FC = () => {
	const { lightMode } = useAppSelector((store) => store.system);
	const dispatch = useAppDispatch();

	const setTheme = () => {
		dispatch(SystemActions.setTheme(!lightMode));
	};
    
	return (
		<Layout.Header className={`main-header ${lightMode ? "bg-light" : "bg-dark"}`} >
			<Row justify={"end"}>
				<Col  style={{}} >
					<Switch 
						onClick={setTheme}
						defaultChecked 
					/>
				</Col>
			</Row>
		</Layout.Header >
	);
};

export default MainHeader;
