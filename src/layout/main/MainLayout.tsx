import React from "react";
import { Layout } from "antd";
import MainHeader from "@/components/Layout/Main/Header";
import MainContent from "@/components/Layout/Main/Content";
import { useAppSelector } from "@/hooks/useStore";

const MainLayout: React.FC = () => {
	
	const { lightMode } = useAppSelector((store)=> store.system);

	return (
		<Layout 
			className={`wwo-layout ${!lightMode ? "light-text-color" : "dark-text-color"}`}
		>
			<MainHeader />
			<MainContent />
		</Layout>
	);
};

export default MainLayout;
