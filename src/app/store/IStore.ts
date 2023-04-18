import { ISystemState } from "@/types/system";
import { apiSlice } from "../api/api";

type ApiSliceReducerType = ReturnType<typeof apiSlice.reducer>;


export interface IStore {
  system: ISystemState;
  [apiSlice.reducerPath]: ApiSliceReducerType;
}