import React from "react";
import RadioGroup from "@/components/UI/Ant/DataEntry/RadioGroup";
import HomePageLogo from "@/components/Pages/Panel/Home/Logo";
import StartButton from "@/components/Pages/Panel/Home/StartButton";

import { quizLevelOptions, quizQuestionNumberOptions } from "@/assets/model/quizLevelModel";

const Home:React.FC = () => {
	const [levelInfo, setLevelInfo] = React.useState("");
	const [questionNumber, setQuestionNumber] = React.useState("");
	
	return (
		<div className="home-page">
			<HomePageLogo />
			<RadioGroup 
				options={quizLevelOptions}
				emitterFunction={setLevelInfo}
			/>
			<RadioGroup 
				options={quizQuestionNumberOptions}
				emitterFunction={setQuestionNumber}
			/>
			<StartButton questionNumber={questionNumber} levelInfo={levelInfo}/>
		</div>
	);
};

export default Home;
