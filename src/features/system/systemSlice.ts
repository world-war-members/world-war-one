import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISystemState, LanguageTypes, DirectionTypes, ThemeType } from "@/types/system";
import { SystemServices } from "@/helper/system.helper";

const initialState: ISystemState = SystemServices.getLocalSystemConfig();

const systemSlices = createSlice({
	name: "SystemSlice",
	initialState,
	reducers: {
		setLanguage(state, action: PayloadAction<LanguageTypes>) {
			state.language = action.payload;
		},
		setDirection(state, action: PayloadAction<DirectionTypes>) {
			state.direction = action.payload;
		},
		setTheme(state, action: PayloadAction<ThemeType>) {
			state.lightMode = action.payload;
		},
	},
});

export const SystemActions = systemSlices.actions;

export default systemSlices.reducer;
