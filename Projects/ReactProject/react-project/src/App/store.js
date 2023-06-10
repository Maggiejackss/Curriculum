import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer, { selectMons } from '../features/pokemonSlice'
import pokemonSlice from '../features/pokemonSlice'
import selectedMonsSlice from '../features/selectedMons'
import cardsReducer from '../features/cardsSlice'

export default configureStore({
    reducer: {
        pokemon: pokemonReducer,
        Cards: cardsReducer,
        selectedMons: selectedMonsSlice
    }
})
