import { LocalStorageKeys } from "@/types/enum/system";

export type LocalStorageReturnType = null | object;

const setLocalStorageItem = <T = object>(
	key: LocalStorageKeys,
	value: T,
): void => {
	return localStorage.setItem(key, JSON.stringify(value));
};
  
const getLocalStorageItem = (key: LocalStorageKeys) => {
	const data = localStorage.getItem(key);
	return JSON.parse(data ?? "null");
};
  
const deleteLocalStorageItem = (key: LocalStorageKeys) => {
	return localStorage.removeItem(key);
};
  
const clearLocalStorage = () => {
	return localStorage.clear();
};
  
const updateLocalStorageItem = (
	key: LocalStorageKeys,
	value: LocalStorageReturnType,
): void => {
	const oldData: LocalStorageReturnType = getLocalStorageItem(key);
	if (oldData !== null && value !== null) {
		const updatedData = {
			...oldData,
			...(value as Record<string, unknown>),
		};
		setLocalStorageItem(key, updatedData);
	}
};
  
export const LocalStorageService = {
	setLocalStorageItem,
	getLocalStorageItem,
	deleteLocalStorageItem,
	clearLocalStorage,
	updateLocalStorageItem,
};