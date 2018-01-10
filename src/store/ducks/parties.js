import { createActions, createReducer } from 'reduxsauce';

/* Types & Creators */

const { Types, Creators } = createActions({
  partyRequest: null,
  partySuccess: ['data'],
  partyFailure: null,

  partySaveRequest: ['party'],
  partySaveSuccess: ['data'],
  partySaveFailure: null,
});

export { Types };

export default Creators;

/* Initial State */

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

/* Reducers */

export const request = state => ({
  ...state,
  error: false,
  loading: true,
});

export const success = (state, action) => ({
  data: action.data,
  loading: false,
  error: false,
});

export const failure = () => ({
  data: [],
  loading: false,
  error: true,
});

export const saveRequest = state => ({
  ...state,
  loading: true,
  error: false,
});

export const saveSuccess = (state, action) => ({
  data: [...state.data, action.data],
  loading: false,
  error: false,
});

export const saveFailure = state => ({
  ...state,
  loading: false,
  error: true,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PARTY_REQUEST]: request,
  [Types.PARTY_SUCCESS]: success,
  [Types.PARTY_FAILURE]: failure,

  [Types.PARTY_SAVE_REQUEST]: saveRequest,
  [Types.PARTY_SAVE_SUCCESS]: saveSuccess,
  [Types.PARTY_SAVE_FAILURE]: saveFailure,
});
