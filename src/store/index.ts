import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import timeReducer from './time-module/reducer'

const configureStore = () => {
  const instance = createStore(
    timeReducer,
    composeWithDevTools(),
  );

  return instance;
};

export type State = ReturnType<typeof store.getState>;

const store = configureStore();

export default store;