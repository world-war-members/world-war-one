import { LanguageKeys, LanguageDirection, SystemKeysEnum } from "./enum/system";

export type LanguageTypes = LanguageKeys.ENGLISH | LanguageKeys.TURKISH

export type DirectionTypes = LanguageDirection.LTR | LanguageDirection.LTR;

export type SystemKeys = SystemKeysEnum.LANGUAGE | SystemKeysEnum.DIRECTION;

export type ThemeType = boolean;

export interface ISystemState {
    language: LanguageTypes;
    direction: DirectionTypes;
    lightMode: ThemeType;
}