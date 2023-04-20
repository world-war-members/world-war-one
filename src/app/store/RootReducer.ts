import { AnyAction, CombinedState, Reducer, combineReducers } from "redux";
import { IStore } from "./IStore";
import systemSlice from "@/features/system/systemSlice";
import questionSlice from "@/features/questions/questionSlice";
import { apiSlice } from "../api/api";

const appReducer: Reducer<CombinedState<IStore>> = combineReducers({
	system: systemSlice,
	questions: questionSlice,
	[apiSlice.reducerPath]: apiSlice.reducer,
});
  

const rootReducer = (
	state: CombinedState<IStore> | undefined,
	action: AnyAction,
) => {
	return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;