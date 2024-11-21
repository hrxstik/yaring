import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import imageReducer from './slices/imageSlice';
import activitiesReducer from './slices/activivitySlice';

export const store = configureStore({
  reducer: { imageReducer, activitiesReducer },
});

type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
