import React from "react";
import { Layout } from "antd";
import MainHeader from "@/components/Layout/Main/Header";
import MainContent from "@/components/Layout/Main/Content";

const MainLayout: React.FC = () => {
	return (
		<Layout style={{ height: "100vh" }}>
			<MainHeader />
			<MainContent />
		</Layout>
	);
};

export default MainLayout;
