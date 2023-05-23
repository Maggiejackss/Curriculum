import { configureStore } from '@reduxjs/toolkit';
import breedsReducer from '../features/breedsSlice';

export default configureStore({
  reducer: {
    breeds: breedsReducer
  }
})