import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';

import Main from './pages/main';
import store from './store';

const App = () => (
  <Provider store={store}>
    <CssBaseline />
    <Main />
  </Provider>
);

export default App;
