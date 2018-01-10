import 'config/ReactotronConfig';
import 'config/StatusBarConfig';

import React from 'react';

import NavigatorComponent from 'navigation';
import { Provider } from 'react-redux';
import createStore from './store';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <NavigatorComponent />
  </Provider>
);

export default App;
