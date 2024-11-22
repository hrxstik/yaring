import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface QuestionsState {
  questions: string[];
  answers: string[];
}

const initialState: QuestionsState = {
  questions: ['Вопрос 1', 'Вопрос 2', 'Вопрос 3', 'Вопрос 4', 'Вопрос 5', 'Вопрос 6'],
  answers: ['Ответ', 'Ответ', 'Ответ', 'Ответ', 'Ответ', 'Ответ'],
};

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
});

export default questionSlice.reducer;
