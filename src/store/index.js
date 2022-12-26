import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { isDarkMode, setDarkMode } from '../utils/darkModeToggler'
import { api } from './api'
import darkModeSlice from './darkModeSlice'
import filterSlice from './filtersSlice'

const persistedState = async () => {
  return await isDarkMode();
}

console.log('persistedState', await persistedState())

export const store = configureStore({
  preloadedState: {
    darkMode: await persistedState(),
  },
  reducer: {
    filters: filterSlice,
    darkMode: darkModeSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

store.subscribe(() => {
  const darkMode = store.getState().darkMode;
  console.log('darkMode', darkMode)
  setDarkMode(darkMode);
})

setupListeners(store.dispatch)