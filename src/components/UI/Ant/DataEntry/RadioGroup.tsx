import React from "react";
import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { QuizOptionType } from "@/assets/model/quizLevelModel";

type RadioGroupPropType = {
    options: QuizOptionType[];
    emitterFunction: React.Dispatch<React.SetStateAction<string>>;
}


const RadioGroup = ({ options, emitterFunction }: RadioGroupPropType) => {
    
	const [value, setValue] = React.useState(options[0].label);
	const getProperRadioItem = ({ target: { value } }: RadioChangeEvent) => {
		emitterFunction(value);
		setValue(value);
	};

	React.useEffect(() => {
		emitterFunction(value); 
	}, []);

	return (
		<Radio.Group
			className="wwo-radio-group"
			options={options}
			onChange={getProperRadioItem}
			value={value}
			optionType="button"
			buttonStyle="solid"
		/>
	);
};

export default RadioGroup;
