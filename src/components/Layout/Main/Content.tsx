import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const MainContent = () => {
	return (
		<Layout.Content className="main-content">
			<Outlet />
		</Layout.Content>
	);
};

export default MainContent;
