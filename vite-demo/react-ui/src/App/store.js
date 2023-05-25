import { configureStore } from '@reduxjs/toolkit';
import breedsReducer, { selectBreeds } from '../features/breedsSlice';
// import { subbreedsreducer } from '../features/subBreedsSlice';
import selectedBreedsSlice from '../features/selectedBreeds';

export default configureStore({
  reducer: {
    breeds: breedsReducer,
    // breedsWithSubbreeds: subbreedsreducer,
    selectedBreeds: selectedBreedsSlice
  }
})