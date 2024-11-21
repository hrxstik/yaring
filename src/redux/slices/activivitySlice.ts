import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface ActivityState {
  headings: string[];
  descriptions: string[];
  images: string[];
  loading: boolean;
  error: string | null;
}

const initialState: ActivityState = {
  headings: [
    'Прогуляться по лесу',
    'Порыбачить на озере',
    'Прокатиться на лошади',
    'Поплавать на лодке или каноэ',
    'Приготовить что-нибудь на природе',
    'Искупаться в озере',
  ],
  descriptions: ['Описание', 'Описание', 'Описание', 'Описание', 'Описание', 'Описание'],
  images: [],
  loading: false,
  error: null,
};

export const fetchActivitiesImages = createAsyncThunk<string[], void>(
  'images/fetchActivitiesImages',
  async () => {
    const response = await fetch('http://localhost:5000/api/activitiesImages');
    if (!response.ok) {
      throw new Error('Не удалось загрузить картинки активностей');
    }
    return response.json();
  },
);

const activitySlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActivitiesImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchActivitiesImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchActivitiesImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch images';
      });
  },
});

export default activitySlice.reducer;
