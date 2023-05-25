import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const findAllBreeds = data => {
  const breeds = Object.keys(data);
  const subbreeds = [];
  let currentBreedNameIndex = '';
  for (let i = 0; i < breeds.length; i++) {
    if (data[breeds[i]].length > 0) {
      for (let j = 0; j < data[breeds[i]].length; j++) {
        subbreeds.push(`${breeds[i]}/${data[breeds[i]][j]}`)
      }
    }
  }
  console.log ([...breeds, ...subbreeds])
  return [...breeds, ...subbreeds];
};


export const fetchBreeds = createAsyncThunk('breeds/all', async () => {
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await response.json();
  const subBreeds = findAllBreeds(data.message);
  const breeds = Object.keys(data.message);
  return {parentBreeds: breeds, allBreeds: subBreeds}
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