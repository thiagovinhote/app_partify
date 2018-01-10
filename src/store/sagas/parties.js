import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/parties';
import { NavigationActions } from 'react-navigation';

export function* getParties() {
  const response = yield call(api.get, '/parties');

  if (response.ok) {
    yield put(ActionCreators.partySuccess(response.data));
  } else {
    yield put(ActionCreators.partyFailure());
  }
}

export function* saveParty(action) {
  const response = yield call(api.post, '/parties', JSON.stringify(action.party));

  if (response.ok) {
    yield put(NavigationActions.back());
    yield put(ActionCreators.partySaveSuccess(response.data));
  } else {
    yield put(ActionCreators.partySaveFailure());
  }
}
