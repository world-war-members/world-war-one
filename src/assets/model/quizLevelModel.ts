export type QuizOptionType = {
    label: string,
    value: string,
}
export type QuestionType = {
	word: string;
	optA: string;
	optB: string;
	optC: string;
	optD: string;
	optCorrect: string;
  };

export const quizLevelOptions: QuizOptionType[] = [
	{ label: "Beginner", value: "Beginner" },
	{ label: "Intermediate", value: "Intermediate" },
	{ label: "Advanced", value: "Advanced"},
];

export const quizQuestionNumberOptions: QuizOptionType[] = [
	{ label: "10", value: "10" },
	{ label: "15", value: "15" },
	{ label: "20", value: "20"},
];
export interface QuizModel{
	level:         string;
	questionCount: number;
	duration:      number;
	questions:     QuestionModel[];
  }
  
  export interface QuestionModel {
	word:       string;
	optA:       string;
	optB:       string;
	optC:       string;
	optD:       string;
	optCorrect: string;
  }




