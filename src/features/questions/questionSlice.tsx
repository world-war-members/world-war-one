import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/RootReducer";
import { Entity } from "@/app/api/apiTypes";

export interface IQuestionState {
    questionList: Entity<unknown>[]
}

const initialState: IQuestionState = {
	questionList: []
};

const questionsSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setQuestions: (state, action: PayloadAction<Entity<unknown>[]>) => {
			state.questionList = action.payload;
		},
	},
});

export const selectCurrentUser = (state: RootState) => state.questions.questionList;

export const { setQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
