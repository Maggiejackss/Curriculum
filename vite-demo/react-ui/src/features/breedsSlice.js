import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchBreeds = createAsyncThunk('breeds/all', async () => {
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await response.json();
  const breeds = Object.keys(data.message);
  return breeds;
});


export const breedsSlice = createSlice({
  name: 'breeds',
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBreeds.fulfilled, (state, action) => {
      return action.payload;
    });
  }
})

//allows us to read from this slice of state
export const selectBreeds = state => state.breeds;

export default breedsSlice.reducer;