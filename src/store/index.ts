import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import siteReducer from './booksmarkReducer';
import optionsReducer from './optionsReducer';

const store = configureStore({
  reducer: { siteReducer, optionsReducer },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
