import { takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as PartiesTypes } from 'store/ducks/parties';

/* Sagas */
import { getParties, saveParty } from './parties';

export default function* root() {
  yield [
    takeLatest(PartiesTypes.PARTY_REQUEST, getParties),
    takeLatest(PartiesTypes.PARTY_SAVE_REQUEST, saveParty),
  ];
}
