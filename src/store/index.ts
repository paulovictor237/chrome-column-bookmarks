import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import SiteReducer from './booksmarkReducer';

const store = configureStore({
  reducer: { SiteReducer },
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
