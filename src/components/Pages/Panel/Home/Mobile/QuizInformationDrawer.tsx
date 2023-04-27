import React, { useState } from "react";
import { Drawer } from "antd";
import { useAppSelector } from "@/hooks/useStore";
import { selectQuestionInfoDrawerStatus } from "@/features/questions/questionSlice";
import RadioGroup from "@/components/UI/Ant/DataEntry/RadioGroup";
import { quizLevelOptions, quizQuestionNumberOptions } from "@/assets/model/quizLevelModel";
import { MinusOutlined } from "@ant-design/icons";
import StartButton from "../StartButton";

type QuizInformationDrawerType = {
    closeDrawer: () => void;
    emitterFunction: React.Dispatch<React.SetStateAction<string>>;
    levelInfo: string;
    questionNumber: string;
}

const QuizInformationDrawer = ({ closeDrawer, emitterFunction, levelInfo, questionNumber }:QuizInformationDrawerType) => {
	const questionInfoDrawerStatus = useAppSelector(selectQuestionInfoDrawerStatus);

	return (
		<Drawer
			placement="bottom"
			closable={true}
			onClose={closeDrawer}
			open={questionInfoDrawerStatus}
			key="quiz-information-drawer"
			className="wwo-quiz-info-drawer"
			closeIcon={<MinusOutlined />}
		>
			<RadioGroup
				options={quizLevelOptions}
				emitterFunction={emitterFunction}
			/>
			<RadioGroup
				options={quizQuestionNumberOptions}
				emitterFunction={emitterFunction}
			/>
			<StartButton 
				questionNumber={questionNumber} 
				levelInfo={levelInfo}
			/>
		</Drawer>
	);
};

export default QuizInformationDrawer;
