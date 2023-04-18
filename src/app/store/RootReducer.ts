import { AnyAction, CombinedState, Reducer, combineReducers } from "redux";
import { IStore } from "./IStore";
import systemSlice from "@/features/system/systemSlice";

const appReducer: Reducer<CombinedState<IStore>> = combineReducers({
	system: systemSlice,
});
  

const rootReducer = (
	state: CombinedState<IStore> | undefined,
	action: AnyAction,
) => {
	return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;