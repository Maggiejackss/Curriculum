import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { fetchMons } from './features/pokemonSlice'
import store from './App/store'

import App from './app'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
store.dispatch(fetchMons())

root.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>
)
