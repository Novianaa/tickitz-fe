import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducers'
import thunk from 'redux-thunk' //add this
import logger from 'redux-logger' //addthis

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["auth", "movies"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
let persistor = persistStore(store)
export {
  store, persistor
}

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }