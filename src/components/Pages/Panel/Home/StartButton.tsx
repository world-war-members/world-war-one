import React from "react";
import { Button } from "antd";

type StartButtonType = {
    questionNumber: string;
    levelInfo: string;
}
const StartButton = (props: StartButtonType) => {
	const {questionNumber, levelInfo} = props;
    
	const startQuiz = () => {
		console.log("debug-issue", questionNumber, levelInfo);
	};

	return (
		<Button 
			className="start-button"
			size="large"
			onClick={startQuiz}
		>
            Start
		</Button>
	);
};

export default StartButton;
