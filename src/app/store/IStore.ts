import { ISystemState } from "@/types/system";
import { IQuestionState } from "@/features/questions/questionSlice";
import { apiSlice } from "../api/api";

type ApiSliceReducerType = ReturnType<typeof apiSlice.reducer>;


export interface IStore {
  system: ISystemState;
  questions: IQuestionState,
  [apiSlice.reducerPath]: ApiSliceReducerType;
}