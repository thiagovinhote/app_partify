import { combineReducers } from 'redux';

/* Reducers */
import navReducers from 'navigation/reducer';
import { reducer as parties } from './ducks/parties';

import configureStore from './configureStore';
import rootSaga from './sagas';

export default () => {
  const rootReducer = combineReducers({
    nav: navReducers,
    parties,
  });

  return configureStore(rootReducer, rootSaga);
};
