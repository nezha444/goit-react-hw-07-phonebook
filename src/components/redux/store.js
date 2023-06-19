import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './reducer';
// import {
// persistStore,
// persistReducer,
// FLUSH,
// REHYDRATE,
// PAUSE,
// PERSIST,
// PURGE,
// REGISTER,
// } from 'redux-persist';

// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: reducer,

  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

// export const persistor = persistStore(store);
