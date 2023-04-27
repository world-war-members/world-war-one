import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/RootReducer";
import { Entity } from "@/app/api/apiTypes";

export interface IQuestionState {
    questionList: Entity<unknown>[],
	isQuestionInformationOpen: boolean,
}

const initialState: IQuestionState = {
	questionList: [],
	isQuestionInformationOpen: false,
};

const questionsSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setQuestions: (state, action: PayloadAction<Entity<unknown>[]>) => {
			state.questionList = action.payload;
		},
		questionDrawerSwitcher: (state, action: PayloadAction<boolean>) => {
			state.isQuestionInformationOpen = action.payload;
		},
	},
});

export const selectCurrentUser = (state: RootState) => state.questions.questionList;
export const selectQuestionInfoDrawerStatus = (state: RootState) => state.questions.isQuestionInformationOpen;

export const { setQuestions, questionDrawerSwitcher } = questionsSlice.actions;
export default questionsSlice.reducer;
