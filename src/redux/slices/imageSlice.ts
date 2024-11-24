import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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

export const fetchCommonImages = createAsyncThunk<string[], void>(
  'images/fetchCommonImages',
  async () => {
    const response = await fetch('http://localhost:5000/api/commonImages');
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    return response.json();
  },
);

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommonImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCommonImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchCommonImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch commmon images';
      });
  },
});

export default imageSlice.reducer;
