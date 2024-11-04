import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageState {
  images: string[];
  loading: boolean;
  error: string | null;
}

const initialState: ImageState = {
  images: [],
  loading: false,
  error: null,
};

export const fetchImages = createAsyncThunk<string[], void>('images/fetchImages', async () => {
  const response = await fetch('http://localhost:5000/api/images');
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  return response.json();
});

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch images';
      });
  },
});

export default imageSlice.reducer;
