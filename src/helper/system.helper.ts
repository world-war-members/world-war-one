import { LocalStorageKeys, LanguageKeys, LanguageDirection } from "@/types/enum/system";
import { LocalStorageService } from "./localStorage.helper";
import { ISystemState, SystemKeys } from "@/types/system";

export const defaultSystemSettings: Required<ISystemState> = {
	language: LanguageKeys.TURKISH,
	direction: LanguageDirection.LTR,
};

const getLocalSystemConfig = (): ISystemState => {
	const localData = LocalStorageService.getLocalStorageItem(
		LocalStorageKeys.System,
	);
	const result: ISystemState = localData ? localData : defaultSystemSettings;
	return result;
};

const updateSystemConfig = (key: SystemKeys, value: string | number) => {
	const oldLocalData = LocalStorageService.getLocalStorageItem(
		LocalStorageKeys.System,
	);
	let newLocalData;
	if (oldLocalData) {
		newLocalData = {
			...oldLocalData,
			[key]: value,
		};
	} else {
		newLocalData = {
			...defaultSystemSettings,
			[key]: value,
		};
	}
  
	return LocalStorageService.updateLocalStorageItem(
		LocalStorageKeys.System,
		newLocalData,
	);
};

export const SystemServices = {
	getLocalSystemConfig,
	updateSystemConfig,
};
  