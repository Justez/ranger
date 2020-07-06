import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import settingsReducer from './settings-module/reducer'

const configureStore = () => {
  const instance = createStore(
    settingsReducer,
    composeWithDevTools(),
  );

  return instance;
};

export type State = ReturnType<typeof store.getState>;

const store = configureStore();

export default store;