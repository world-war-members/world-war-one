import React from "react";

import { useAppSelector } from "@/hooks/useStore";
import LightLogo from "@/assets/images/light-logo.svg";
import DarkLogo from "@/assets/images/dark-logo.svg";

const HomePageLogo = () => {
	const { lightMode } = useAppSelector((store)=> store.system);

	return (
		<div className="home-logo">
			<img src={lightMode ? LightLogo : DarkLogo} alt="site logo"/>
			<h1>Word War One</h1>
		</div>
	);
};

export default HomePageLogo;
