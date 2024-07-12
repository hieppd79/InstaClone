import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {combineReducers} from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {ThemeReducer} from '../reducers';
import {PostApi} from '../../../sdk/apis';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 30000,
  whitelist: ['theme'],
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  theme: ThemeReducer,
  // ...other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    root: persistedReducer,
    [PostApi.reducerPath]: PostApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

setupListeners(store.dispatch);
/**
 * Initialize services after persist is completed
 */
const onPersistComplete = () => {
  // do something
};

const persistor = persistStore(store, null, onPersistComplete);

export {persistor, store};
