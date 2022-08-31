import {
  Action,
  ThunkAction,
  configureStore,
  combineReducers
} from '@reduxjs/toolkit'

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import themeState from './slices/themeSlice'
import menuState from './slices/menuSlice'
import cardState from './slices/cardSlice'

const rootReducer = combineReducers({
  theme: themeState,
  menu: menuState,
  card: cardState
})

// blacklist a store attribute using it's reducer name.
// Blacklisted attributes will not persist.
const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
  blacklist: ['menu', 'card']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
