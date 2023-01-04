import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { isDarkMode, setDarkMode } from '../utils/darkModeToggler'
import { api } from './api'
import darkModeSlice from './darkModeSlice'
import filterMenuSlice from './filterMenuSlice'
import filterSlice from './filtersSlice'

const persistedState = () => {
  return isDarkMode();
}

export const store = configureStore({
  preloadedState: {
    darkMode: persistedState(),
  },
  reducer: {
    filters: filterSlice,
    darkMode: darkModeSlice,
    filterMenu: filterMenuSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

store.subscribe(() => {
  const darkMode = store.getState().darkMode;
  setDarkMode(darkMode);
})

setupListeners(store.dispatch)