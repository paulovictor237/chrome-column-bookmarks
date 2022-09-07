import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { SiteReducer } from './bookmarks';
import { optionsReducer } from './options';

export const store = configureStore({
  reducer: { SiteReducer, optionsReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
