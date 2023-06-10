import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const selectedMonsSlice = createSlice({
  name: 'selectedMon',
  initialState: [],
  reducers: {
    addSelectedMonsToStore(state, action) {
      return action.payload;
    }
  }
})

//allows us to read from this slice of state
export const selectedMons = state => state.selectedMons;

export default selectedMonsSlice.reducer;

export const { addSelectedMonsToStore } = selectedMonsSlice.actions;