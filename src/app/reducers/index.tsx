import { combineReducers } from "redux";
import { RootState } from "./state";
import { tonaReducer } from "./tona";

export type { RootState };

export const rootReducer = combineReducers<RootState>({
  tonas: tonaReducer,
});
