import { configureStore } from '@reduxjs/toolkit';
import breedsReducer, { selectBreeds } from '../features/breedsSlice';
import selectedBreedsSlice from '../features/selectedBreeds';

export default configureStore({
  reducer: {
    breeds: breedsReducer,
    selectedBreeds: selectedBreedsSlice
  }
})