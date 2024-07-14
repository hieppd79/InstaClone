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
import {ThemeReducer, PostReducer} from '../reducers';
import {PostApi, SearchApi} from '../../../sdk/apis';
import reactotron from '../../../ReactotronConfig';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 30000,
  whitelist: ['theme'],
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  theme: ThemeReducer,
  posts: PostReducer,
  // ...other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    root: persistedReducer,
    [PostApi.reducerPath]: PostApi.reducer,
    [SearchApi.reducerPath]: SearchApi.reducer,
  },
  enhancers: getDefaultEnhancers =>
    getDefaultEnhancers().concat(__DEV__ ? [reactotron.createEnhancer!()] : []),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(PostApi.middleware)
      .concat(SearchApi.middleware) as any,
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
