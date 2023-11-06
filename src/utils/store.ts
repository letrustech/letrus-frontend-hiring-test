import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import charactersReducer from "../store/reducers/reducer";



const rootReducer = combineReducers({
  characters: charactersReducer,
});

export const store = configureStore({
   reducer: rootReducer,
});



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

