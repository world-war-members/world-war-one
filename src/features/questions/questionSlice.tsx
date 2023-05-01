import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/RootReducer";
import { Entity } from "@/app/api/apiTypes";
import { QuizModel } from "@/assets/model/quizLevelModel";

export interface IQuestionState {
  questionList: Entity<QuizModel>;
  isQuestionInformationOpen: boolean;
}

const initialState: IQuestionState = {
  questionList: {} as Entity<QuizModel>,
  isQuestionInformationOpen: false,
};

const questionsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Entity<QuizModel>>) => {
      state.questionList = action.payload;
    },
    questionDrawerSwitcher: (state, action: PayloadAction<boolean>) => {
      state.isQuestionInformationOpen = action.payload;
    },
  },
});

export const selectCurrentUser = (state: RootState) =>
  state.questions.questionList;
export const selectQuestionInfoDrawerStatus = (state: RootState) =>
  state.questions.isQuestionInformationOpen;

export const { setQuestions, questionDrawerSwitcher } = questionsSlice.actions;
export default questionsSlice.reducer;
