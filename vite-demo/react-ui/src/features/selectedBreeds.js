import { createSlice } from '@reduxjs/toolkit'

export const selectedBreedsSlice = createSlice({
  name: 'selectedBreeds',
  initialState: [],
  reducers: {
    addSelectedBreedsToStore(state, action) {
      return action.payload;
    }
  }
})

//allows us to read from this slice of state
export const selectSelectedBreeds = state => state.selectedBreeds;

export default selectedBreedsSlice.reducer;

export const { addSelectedBreedsToStore } = selectedBreedsSlice.actions;