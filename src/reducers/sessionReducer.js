import { LOGIN_LOADING, LOGIN_ERROR } from '../types';

const initialState = {
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
    state = Object.assign({}, state, { error: action.payload });
      break;
    case LOGIN_LOADING:
    state = Object.assign({}, state, { loading: action.payload });
    break;
  }

  return state;
}